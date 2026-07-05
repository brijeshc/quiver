#!/usr/bin/env node
'use strict';

// Quiver CLI - copies skill folders into a Claude Code skills directory.
// Claude Code discovers skills in ~/.claude/skills, <project>/.claude/skills,
// and installed plugin dirs; it does not read node_modules. So npm delivers the
// files and this command places them where Claude Code will find them.

const fs = require('fs');
const os = require('os');
const path = require('path');

const SKILLS_SRC = path.join(__dirname, '..', 'skills');

// The three core skills that wrappers invoke. If a selected skill's SKILL.md
// references one of these, we pull the core in too (a wrapper without its core
// fails visibly). Derived by scanning, so new wrappers need no CLI change.
const CORES = ['interviewing', 'auditing', 'design-dna'];

function allSkills() {
  return fs
    .readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(SKILLS_SRC, d.name, 'SKILL.md')))
    .map((d) => d.name)
    .sort();
}

// For a set of requested skills, add any core they reference in their SKILL.md.
function withCores(requested, available) {
  const out = new Set(requested);
  for (const name of requested) {
    if (CORES.includes(name)) continue;
    let body = '';
    try {
      body = fs.readFileSync(path.join(SKILLS_SRC, name, 'SKILL.md'), 'utf8');
    } catch {
      continue;
    }
    for (const core of CORES) {
      if (core !== name && available.includes(core) && body.includes(core)) out.add(core);
    }
  }
  return [...out];
}

function parseArgs(argv) {
  const opts = { project: false, dir: null, dryRun: false, list: false, help: false, skills: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--project' || a === '-p') opts.project = true;
    else if (a === '--dir') opts.dir = argv[++i];
    else if (a === '--dry-run' || a === '-n') opts.dryRun = true;
    else if (a === '--list' || a === '-l') opts.list = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else if (a.startsWith('-')) fail(`unknown flag: ${a}`);
    else opts.skills.push(a);
  }
  return opts;
}

function targetDir(opts) {
  if (opts.dir) return path.resolve(opts.dir);
  if (opts.project) return path.resolve(process.cwd(), '.claude', 'skills');
  return path.join(os.homedir(), '.claude', 'skills');
}

function fail(msg) {
  console.error(`quiver: ${msg}`);
  process.exit(1);
}

const HELP = `quiver - install Claude Code skills from the Quiver collection

Usage:
  npx @brijeshc2049/quiver install [skills...] [options]
  npx @brijeshc2049/quiver list

Options:
  -p, --project      Install into ./.claude/skills (this repo) instead of ~/.claude/skills
      --dir <path>   Install into an explicit directory
  -n, --dry-run      Show what would be copied, change nothing
  -l, --list         List available skills and exit
  -h, --help         Show this help

Examples:
  npx @brijeshc2049/quiver install                 # all skills -> ~/.claude/skills
  npx @brijeshc2049/quiver install --project        # all skills -> ./.claude/skills
  npx @brijeshc2049/quiver install ask-me deep-review
                                                # a subset; required cores are added automatically`;

function printList() {
  const skills = allSkills();
  console.log(`Quiver skills (${skills.length}):\n`);
  for (const s of skills) console.log(`  ${CORES.includes(s) ? '*' : ' '} ${s}`);
  console.log(`\n  * = core skill (auto-included when a wrapper needs it)`);
}

function install(opts) {
  const available = allSkills();
  const dest = targetDir(opts);

  let selected;
  if (opts.skills.length === 0) {
    selected = available;
  } else {
    const unknown = opts.skills.filter((s) => !available.includes(s));
    if (unknown.length) {
      fail(`unknown skill(s): ${unknown.join(', ')}\nRun "quiver list" to see available skills.`);
    }
    selected = withCores(opts.skills, available);
  }
  selected.sort();

  const added = withCores(opts.skills, available).filter((s) => !opts.skills.includes(s));
  if (opts.skills.length && added.length) {
    console.log(`Adding required core(s): ${added.join(', ')}\n`);
  }

  console.log(`Target: ${dest}${opts.dryRun ? '  (dry run)' : ''}\n`);

  if (!opts.dryRun) fs.mkdirSync(dest, { recursive: true });

  let installed = 0;
  let updated = 0;
  for (const name of selected) {
    const from = path.join(SKILLS_SRC, name);
    const to = path.join(dest, name);
    const exists = fs.existsSync(to);
    if (!opts.dryRun) {
      if (exists) fs.rmSync(to, { recursive: true, force: true });
      fs.cpSync(from, to, { recursive: true });
    }
    if (exists) updated++;
    else installed++;
    console.log(`  ${exists ? 'updated' : 'added  '}  ${name}`);
  }

  console.log(`\n${opts.dryRun ? 'Would install' : 'Installed'} ${selected.length} skill(s) (${installed} new, ${updated} updated).`);
  if (!opts.dryRun) {
    console.log(`\nType "/" in Claude Code to see them. If ${dest} did not exist before, restart Claude Code once.`);
  }
}

function main() {
  const argv = process.argv.slice(2);
  const command = argv[0] && !argv[0].startsWith('-') ? argv[0] : null;
  const rest = command ? argv.slice(1) : argv;
  const opts = parseArgs(rest);

  if (argv.length === 0 || opts.help || command === 'help') return console.log(HELP);
  if (command === 'list' || opts.list) return printList();
  if (command === 'install') return install(opts);
  // Allow flag-only invocation (e.g. `--project`) to mean install.
  if (command === null) return install(opts);

  fail(`unknown command: ${command}\n\n${HELP}`);
}

main();
