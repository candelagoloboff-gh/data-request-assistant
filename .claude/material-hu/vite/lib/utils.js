"use strict";
/** biome-ignore-all lint/suspicious/noConsole: vite-utils */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGitWorktree = exports.redLog = exports.greenLog = exports.parseTranslationPath = exports.getNodeModule = exports.getFolderPath = void 0;
const node_child_process_1 = require("node:child_process");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const TAG = '[vite-utils]';
/**
 * Resolves and validates the path to a sibling repo folder.
 * Returns undefined (disabling the plugin) if `enabled` is false or the folder doesn't exist.
 */
const getFolderPath = ({ enabled, folderPath, repoName, }) => {
    if (!enabled)
        return undefined;
    const resolvedPath = node_path_1.default.resolve(process.cwd(), folderPath);
    if (node_fs_1.default.existsSync(resolvedPath))
        return resolvedPath;
    console.warn(`${TAG} "${repoName}" not found at: ${resolvedPath}. 🚨 ${(0, exports.redLog)('PLUGIN DISABLED')}`);
    return undefined;
};
exports.getFolderPath = getFolderPath;
/** Resolves a package to the consumer's node_modules (prevents duplicate instances). */
const getNodeModule = (moduleName) => node_path_1.default.resolve(process.cwd(), 'node_modules', moduleName);
exports.getNodeModule = getNodeModule;
const parseTranslationPath = (filePath) => {
    const match = filePath.match(/locale\/([^/]+)\/([^/]+)\.json$/);
    if (!match)
        return null;
    const [, lang, ns] = match;
    return { lang, ns };
};
exports.parseTranslationPath = parseTranslationPath;
const greenLog = (tag) => `\x1b[32m${tag}\x1b[0m`;
exports.greenLog = greenLog;
const redLog = (tag) => `\x1b[31m${tag}\x1b[0m`;
exports.redLog = redLog;
/**
 * Updates the git worktree state for a file.
 * Set skip=true to skip worktree, skip=false to restore.
 */
const updateGitWorktree = (filePath, { skip } = {}) => {
    try {
        const flag = skip ? '--skip-worktree' : '--no-skip-worktree';
        (0, node_child_process_1.execSync)(`git update-index ${flag} ${filePath}`, {
            cwd: process.cwd(),
            stdio: 'ignore',
        });
    }
    catch {
        // Not a git repo or git not available. Continue.
    }
};
exports.updateGitWorktree = updateGitWorktree;
