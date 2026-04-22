/** biome-ignore-all lint/suspicious/noConsole: vite-utils */
import { type FolderPathParams } from './types';
/**
 * Resolves and validates the path to a sibling repo folder.
 * Returns undefined (disabling the plugin) if `enabled` is false or the folder doesn't exist.
 */
export declare const getFolderPath: ({ enabled, folderPath, repoName, }: FolderPathParams) => string | undefined;
/** Resolves a package to the consumer's node_modules (prevents duplicate instances). */
export declare const getNodeModule: (moduleName: string) => string;
export declare const parseTranslationPath: (filePath: string) => {
    lang: string;
    ns: string;
} | null;
export declare const greenLog: (tag: string) => string;
export declare const redLog: (tag: string) => string;
/**
 * Updates the git worktree state for a file.
 * Set skip=true to skip worktree, skip=false to restore.
 */
export declare const updateGitWorktree: (filePath: string, { skip }?: {
    skip?: boolean;
}) => void;
