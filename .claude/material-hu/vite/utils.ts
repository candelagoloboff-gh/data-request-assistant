/** biome-ignore-all lint/suspicious/noConsole: vite-utils */

import { type FolderPathParams } from './types';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const TAG = '[vite-utils]';

/**
 * Resolves and validates the path to a sibling repo folder.
 * Returns undefined (disabling the plugin) if `enabled` is false or the folder doesn't exist.
 */
export const getFolderPath = ({
  enabled,
  folderPath,
  repoName,
}: FolderPathParams): string | undefined => {
  if (!enabled) return undefined;

  const resolvedPath = path.resolve(process.cwd(), folderPath);

  if (fs.existsSync(resolvedPath)) return resolvedPath;

  console.warn(
    `${TAG} "${repoName}" not found at: ${resolvedPath}. 🚨 ${redLog('PLUGIN DISABLED')}`,
  );
  return undefined;
};

/** Resolves a package to the consumer's node_modules (prevents duplicate instances). */
export const getNodeModule = (moduleName: string): string =>
  path.resolve(process.cwd(), 'node_modules', moduleName);

export const parseTranslationPath = (
  filePath: string,
): { lang: string; ns: string } | null => {
  const match = filePath.match(/locale\/([^/]+)\/([^/]+)\.json$/);
  if (!match) return null;
  const [, lang, ns] = match;
  return { lang, ns };
};

export const greenLog = (tag: string) => `\x1b[32m${tag}\x1b[0m`;
export const redLog = (tag: string) => `\x1b[31m${tag}\x1b[0m`;

/**
 * Updates the git worktree state for a file.
 * Set skip=true to skip worktree, skip=false to restore.
 */
export const updateGitWorktree = (
  filePath: string,
  { skip }: { skip?: boolean } = {},
) => {
  try {
    const flag = skip ? '--skip-worktree' : '--no-skip-worktree';
    execSync(`git update-index ${flag} ${filePath}`, {
      cwd: process.cwd(),
      stdio: 'ignore',
    });
  } catch {
    // Not a git repo or git not available. Continue.
  }
};
