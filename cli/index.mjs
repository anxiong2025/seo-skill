#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, cpSync, rmSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';
import { createInterface } from 'node:readline';

const VERSION = '0.1.0';
const SKILLS_DIR = '.claude/skills';
const GLOBAL_SKILLS_DIR = join(process.env.HOME || '~', '.claude/skills');
const TEMP_DIR = join(process.env.TMPDIR || '/tmp', 'claude-skills-install');

const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const REGISTRY_URL = 'https://raw.githubusercontent.com/anthropic-skills/claude-skills/main/registry.json';

function log(msg) { console.log(msg); }
function success(msg) { log(`${COLORS.green}✓${COLORS.reset} ${msg}`); }
function warn(msg) { log(`${COLORS.yellow}!${COLORS.reset} ${msg}`); }
function error(msg) { log(`${COLORS.red}✗${COLORS.reset} ${msg}`); }

async function confirm(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(`${question} (Y/n) `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() !== 'n');
    });
  });
}

function parseSource(input) {
  if (input.startsWith('https://github.com/')) {
    const parts = input.replace('https://github.com/', '').replace(/\.git$/, '').split('/');
    return { owner: parts[0], repo: parts[1], subpath: parts.slice(4).join('/') || null };
  }

  const parts = input.split('/');
  if (parts.length === 2) {
    return { owner: parts[0], repo: parts[1], subpath: null };
  }
  if (parts.length > 2) {
    return { owner: parts[0], repo: parts[1], subpath: parts.slice(2).join('/') };
  }

  return { owner: null, repo: null, name: input };
}

function detectSkillName(dir) {
  const skillMd = join(dir, 'SKILL.md');
  if (!existsSync(skillMd)) return basename(dir);

  const content = readFileSync(skillMd, 'utf-8');
  const match = content.match(/^name:\s*(.+)$/m);
  return match ? match[1].trim() : basename(dir);
}

function findSkillRoot(dir) {
  if (existsSync(join(dir, 'SKILL.md'))) return dir;

  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory() && existsSync(join(full, 'SKILL.md'))) {
      return full;
    }
  }

  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      const nested = findSkillRoot(full);
      if (nested) return nested;
    }
  }
  return null;
}

function copySkillFiles(src, dest) {
  mkdirSync(dest, { recursive: true });

  const entries = readdirSync(src);
  let copied = 0;

  for (const entry of entries) {
    if (entry === '.git' || entry === 'node_modules' || entry === '.DS_Store') continue;
    if (entry === 'examples' || entry === 'cli' || entry === 'LICENSE' || entry === 'README.md') continue;
    if (entry === '.gitignore') continue;

    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      cpSync(srcPath, destPath, { recursive: true });
    } else {
      cpSync(srcPath, destPath);
    }
    copied++;
  }
  return copied;
}

async function fetchRegistry() {
  try {
    const res = await fetch(REGISTRY_URL);
    if (res.ok) return await res.json();
  } catch {}

  const localRegistry = join(import.meta.dirname || '.', 'registry.json');
  if (existsSync(localRegistry)) {
    return JSON.parse(readFileSync(localRegistry, 'utf-8'));
  }
  return { skills: {} };
}

async function cmdAdd(source, flags) {
  const isGlobal = flags.includes('--global') || flags.includes('-g');
  const targetBase = isGlobal ? GLOBAL_SKILLS_DIR : join(process.cwd(), SKILLS_DIR);
  const parsed = parseSource(source);

  let repoUrl;
  if (parsed.name && !parsed.owner) {
    log(`${COLORS.dim}Looking up "${parsed.name}" in registry...${COLORS.reset}`);
    const registry = await fetchRegistry();
    const entry = registry.skills?.[parsed.name];
    if (!entry) {
      error(`Skill "${parsed.name}" not found in registry.`);
      log(`\n  Try installing from GitHub directly:`);
      log(`  ${COLORS.cyan}npx claude-skills add owner/repo${COLORS.reset}\n`);
      process.exit(1);
    }
    repoUrl = `https://github.com/${entry.repo}.git`;
    log(`${COLORS.dim}Found: ${entry.repo} — ${entry.description}${COLORS.reset}`);
  } else {
    repoUrl = `https://github.com/${parsed.owner}/${parsed.repo}.git`;
  }

  if (existsSync(TEMP_DIR)) rmSync(TEMP_DIR, { recursive: true });

  log(`${COLORS.dim}Downloading from ${repoUrl}...${COLORS.reset}`);
  try {
    execSync(`git clone --depth 1 ${repoUrl} ${TEMP_DIR}`, { stdio: 'pipe' });
  } catch (e) {
    error(`Failed to clone ${repoUrl}`);
    log(`  Make sure the repository exists and is public.`);
    process.exit(1);
  }

  let skillDir = TEMP_DIR;
  if (parsed.subpath) {
    skillDir = join(TEMP_DIR, parsed.subpath);
    if (!existsSync(skillDir)) {
      error(`Path "${parsed.subpath}" not found in repository.`);
      rmSync(TEMP_DIR, { recursive: true });
      process.exit(1);
    }
  }

  const skillRoot = findSkillRoot(skillDir);
  if (!skillRoot) {
    error('No SKILL.md found in repository.');
    log(`  A valid skill must contain a SKILL.md file.`);
    rmSync(TEMP_DIR, { recursive: true });
    process.exit(1);
  }

  const skillName = detectSkillName(skillRoot);
  const destDir = join(targetBase, skillName);

  if (existsSync(destDir)) {
    const ok = await confirm(`${COLORS.yellow}Skill "${skillName}" already exists. Overwrite?${COLORS.reset}`);
    if (!ok) {
      log('Aborted.');
      rmSync(TEMP_DIR, { recursive: true });
      process.exit(0);
    }
    rmSync(destDir, { recursive: true });
  }

  const count = copySkillFiles(skillRoot, destDir);

  rmSync(TEMP_DIR, { recursive: true });

  success(`Installed "${COLORS.bold}${skillName}${COLORS.reset}" (${count} files)`);
  log(`  ${COLORS.dim}${destDir}${COLORS.reset}`);
  log('');
  log(`  Use in Claude Code: ${COLORS.cyan}/${skillName}${COLORS.reset}`);
  log('');
}

async function cmdList() {
  log(`${COLORS.bold}Installed skills${COLORS.reset}\n`);

  const projectDir = join(process.cwd(), SKILLS_DIR);
  const globalDir = GLOBAL_SKILLS_DIR;

  let found = false;

  if (existsSync(projectDir)) {
    const entries = readdirSync(projectDir).filter(e =>
      statSync(join(projectDir, e)).isDirectory() && existsSync(join(projectDir, e, 'SKILL.md'))
    );
    if (entries.length) {
      log(`${COLORS.dim}Project (.claude/skills/)${COLORS.reset}`);
      for (const name of entries) {
        log(`  ${COLORS.green}●${COLORS.reset} ${name}`);
      }
      found = true;
    }
  }

  if (existsSync(globalDir)) {
    const entries = readdirSync(globalDir).filter(e =>
      statSync(join(globalDir, e)).isDirectory() && existsSync(join(globalDir, e, 'SKILL.md'))
    );
    if (entries.length) {
      if (found) log('');
      log(`${COLORS.dim}Global (~/.claude/skills/)${COLORS.reset}`);
      for (const name of entries) {
        log(`  ${COLORS.cyan}●${COLORS.reset} ${name}`);
      }
      found = true;
    }
  }

  if (!found) {
    log('  No skills installed.');
    log(`\n  Install one: ${COLORS.cyan}npx claude-skills add owner/repo${COLORS.reset}`);
  }
  log('');
}

async function cmdRemove(name) {
  const projectPath = join(process.cwd(), SKILLS_DIR, name);
  const globalPath = join(GLOBAL_SKILLS_DIR, name);

  let targetPath = null;
  if (existsSync(projectPath)) targetPath = projectPath;
  else if (existsSync(globalPath)) targetPath = globalPath;

  if (!targetPath) {
    error(`Skill "${name}" not found.`);
    process.exit(1);
  }

  const ok = await confirm(`Remove "${name}" from ${targetPath}?`);
  if (!ok) {
    log('Aborted.');
    process.exit(0);
  }

  rmSync(targetPath, { recursive: true });
  success(`Removed "${name}"`);
}

async function cmdSearch(query) {
  log(`${COLORS.dim}Searching registry...${COLORS.reset}\n`);
  const registry = await fetchRegistry();
  const skills = registry.skills || {};
  const results = Object.entries(skills).filter(([name, info]) =>
    name.includes(query) || info.description?.toLowerCase().includes(query.toLowerCase()) ||
    info.tags?.some(t => t.includes(query))
  );

  if (!results.length) {
    log(`  No skills found for "${query}".`);
    log(`\n  You can install any GitHub repo directly:`);
    log(`  ${COLORS.cyan}npx claude-skills add owner/repo${COLORS.reset}`);
  } else {
    for (const [name, info] of results) {
      log(`  ${COLORS.bold}${name}${COLORS.reset} — ${info.description}`);
      log(`  ${COLORS.dim}${info.repo}${COLORS.reset}`);
      log('');
    }
    log(`Install with: ${COLORS.cyan}npx claude-skills add <name>${COLORS.reset}`);
  }
  log('');
}

function showHelp() {
  log(`
${COLORS.bold}claude-skills${COLORS.reset} v${VERSION}

  Install Claude Code skills from GitHub.

${COLORS.bold}Usage${COLORS.reset}

  ${COLORS.cyan}npx claude-skills add <source>${COLORS.reset}      Install a skill
  ${COLORS.cyan}npx claude-skills add <source> -g${COLORS.reset}   Install globally (~/.claude/skills/)
  ${COLORS.cyan}npx claude-skills list${COLORS.reset}               List installed skills
  ${COLORS.cyan}npx claude-skills remove <name>${COLORS.reset}      Remove a skill
  ${COLORS.cyan}npx claude-skills search <query>${COLORS.reset}     Search the registry

${COLORS.bold}Sources${COLORS.reset}

  ${COLORS.dim}# From registry (shorthand)${COLORS.reset}
  npx claude-skills add seo

  ${COLORS.dim}# From GitHub (owner/repo)${COLORS.reset}
  npx claude-skills add anthropic-skills/seo-skill

  ${COLORS.dim}# From GitHub URL${COLORS.reset}
  npx claude-skills add https://github.com/anthropic-skills/seo-skill

  ${COLORS.dim}# Subdirectory in a monorepo${COLORS.reset}
  npx claude-skills add anthropic-skills/skills/packages/seo

${COLORS.bold}Examples${COLORS.reset}

  ${COLORS.dim}# Install SEO skill into current project${COLORS.reset}
  npx claude-skills add seo

  ${COLORS.dim}# Install globally so it's available in all projects${COLORS.reset}
  npx claude-skills add seo -g

  ${COLORS.dim}# Then use in Claude Code${COLORS.reset}
  /seo
`);
}

const [,, command, ...args] = process.argv;
const flags = args.filter(a => a.startsWith('-'));
const positional = args.filter(a => !a.startsWith('-'));

switch (command) {
  case 'add':
  case 'install':
  case 'i':
    if (!positional[0]) { error('Missing source. Usage: npx claude-skills add <source>'); process.exit(1); }
    await cmdAdd(positional[0], flags);
    break;
  case 'list':
  case 'ls':
    await cmdList();
    break;
  case 'remove':
  case 'rm':
  case 'uninstall':
    if (!positional[0]) { error('Missing name. Usage: npx claude-skills remove <name>'); process.exit(1); }
    await cmdRemove(positional[0]);
    break;
  case 'search':
  case 'find':
    if (!positional[0]) { error('Missing query. Usage: npx claude-skills search <query>'); process.exit(1); }
    await cmdSearch(positional[0]);
    break;
  case '--help':
  case '-h':
  case 'help':
  case undefined:
    showHelp();
    break;
  case '--version':
  case '-v':
    log(VERSION);
    break;
  default:
    error(`Unknown command: ${command}`);
    showHelp();
    process.exit(1);
}
