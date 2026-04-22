/** biome-ignore-all lint/suspicious/noConsole: we use console.log for logging */

import { type TsConfig } from './types';
import { greenLog, redLog, updateGitWorktree } from './utils';
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const TAG = '[dev-server]';
// CONFIG //
const CWD = process.cwd();
const PARENT_DIR = dirname(CWD);
const TS_CONFIG_FILE_NAME = 'tsconfig.json';
const MATERIAL_HU_FOLDER_NAME = 'material-hu';
const HU_TRANSLATIONS_FOLDER_NAME = 'hu-translations';
const TS_CONFIG_PATH = resolve(CWD, TS_CONFIG_FILE_NAME);
const TS_CONFIG_BACKUP_PATH = resolve(CWD, `${TS_CONFIG_FILE_NAME}.backup`);
const TS_CONFIG_DEV_EXTENDS =
  './node_modules/@humanddev/material-hu/vite/tsconfig.dev.json';

const MATERIAL_HU_AUGMENTATION_FILES = [
  '../material-hu/src/theme/material-hu.ts',
  '../material-hu/src/theme/hugo/theme-augmentation.ts',
];

const checkFolderExists = () => {
  const folderNames = [MATERIAL_HU_FOLDER_NAME, HU_TRANSLATIONS_FOLDER_NAME];
  const atLeastOneExists = folderNames.some(folder =>
    existsSync(resolve(PARENT_DIR, folder)),
  );
  if (!atLeastOneExists) {
    console.warn(
      `${TAG} ${redLog(`At least one of "${MATERIAL_HU_FOLDER_NAME}" or "${HU_TRANSLATIONS_FOLDER_NAME}" folders must exist in the parent directory`)}`,
    );
    console.warn(`${TAG} Parent directory: ${PARENT_DIR}`);
    process.exit(1);
  }
};

const patchTsConfig = () => {
  const original = readFileSync(TS_CONFIG_PATH, 'utf-8');
  const base = JSON.parse(original);
  const existingExtends = [base.extends].flat().filter(Boolean);

  const existingInclude = Array.isArray(base.include) ? base.include : [];

  const patched: TsConfig = {
    ...base,
    extends: [...existingExtends, TS_CONFIG_DEV_EXTENDS],
    include: [...existingInclude, ...MATERIAL_HU_AUGMENTATION_FILES],
  };

  // Backup the original tsconfig.json
  writeFileSync(TS_CONFIG_BACKUP_PATH, original, 'utf-8');
  // Patch the tsconfig.json with the dev extends
  writeFileSync(
    TS_CONFIG_PATH,
    `${JSON.stringify(patched, null, 2)}\n`,
    'utf-8',
  );
  // Skip the tsconfig.json from git worktree
  updateGitWorktree(TS_CONFIG_PATH, { skip: true });

  console.info(`${TAG} ✅ ${greenLog('tsconfig.json patched')}`);
};

const restoreTsConfig = () => {
  if (!existsSync(TS_CONFIG_BACKUP_PATH)) return;

  // Restore the tsconfig.json from backup
  writeFileSync(TS_CONFIG_PATH, readFileSync(TS_CONFIG_BACKUP_PATH, 'utf-8'));
  // Delete the backup file
  unlinkSync(TS_CONFIG_BACKUP_PATH);
  // Restore the tsconfig.json from git worktree
  updateGitWorktree(TS_CONFIG_PATH, { skip: false });

  console.log('[dev-config] ✅ tsconfig.json restored');
};

const main = () => {
  checkFolderExists();
  patchTsConfig();

  let done = false;
  const cleanup = () => {
    if (done) return;
    done = true;
    restoreTsConfig();
    process.exit(0);
  };

  const vite = spawn('npx', ['vite'], {
    cwd: CWD,
    stdio: 'inherit',
    env: { ...process.env, ENABLE_HMR_PLUGINS: 'true' },
  });

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('exit', cleanup);

  vite.on('close', code => {
    cleanup();
    process.exit(code ?? 0);
  });
};

main();
