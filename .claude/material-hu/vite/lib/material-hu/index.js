"use strict";
/** biome-ignore-all lint/suspicious/noConsole: material-hu-plugin */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMaterialHuVitePlugin = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const node_path_1 = __importDefault(require("node:path"));
const TAG = '[material-hu-plugin]';
/**
 * Builds resolve.alias entries that redirect @material-hu/* imports
 * to the raw TypeScript source in material-hu/src/.
 * Also maps internal aliases (@hooks, @utils, etc.) so that material-hu's
 * own imports resolve correctly when Vite processes its source.
 */
const getMaterialHuSourceAliases = (materialHuPath) => {
    const srcPath = node_path_1.default.join(materialHuPath, 'src');
    const aliases = {};
    // @material-hu/* → material-hu/src/*
    for (const [alias, subdir] of Object.entries(constants_1.MATERIAL_HU_SOURCE_PATHS)) {
        aliases[alias] = node_path_1.default.join(srcPath, subdir);
    }
    // Internal path aliases used within material-hu source code
    for (const [alias, subdir] of Object.entries(constants_1.MATERIAL_HU_INTERNAL_PATHS)) {
        aliases[alias] = subdir ? node_path_1.default.join(srcPath, subdir) : srcPath;
    }
    // Force shared dependencies to resolve from the consumer's node_modules.
    // This prevents duplicate React/MUI/emotion instances when Vite follows
    // imports from material-hu source into its own node_modules.
    for (const dep of constants_1.SHARED_DEPENDENCIES) {
        aliases[dep] = (0, utils_1.getNodeModule)(dep);
    }
    // React JSX runtimes must also be aliased explicitly
    aliases['react/jsx-runtime'] = (0, utils_1.getNodeModule)('react/jsx-runtime');
    aliases['react/jsx-dev-runtime'] = (0, utils_1.getNodeModule)('react/jsx-dev-runtime');
    return aliases;
};
/**
 * Creates the Vite plugin that enables HMR to material-hu source.
 *
 * What it does:
 * - Aliases @material-hu/* imports → material-hu/src/*
 * - Deduplicates shared deps so only one instance of React/MUI/emotion exists
 * - Watches material-hu/src/ for file changes (triggers HMR)
 */
const getMaterialHuVitePlugin = (materialHuPath) => {
    if (!materialHuPath)
        return { name: 'material-hu-dev-link-disabled' };
    const materialHuSrcPath = node_path_1.default.join(materialHuPath, 'src');
    console.info(`${TAG} ✅ ${(0, utils_1.greenLog)('Activated')}`);
    return {
        name: 'material-hu-dev-link',
        enforce: 'pre',
        config: () => ({
            resolve: {
                alias: getMaterialHuSourceAliases(materialHuPath),
                dedupe: [...constants_1.SHARED_DEPENDENCIES],
            },
            server: {
                fs: { allow: [process.cwd(), materialHuSrcPath] },
                watch: { ignored: ['!**/material-hu/src/**'] },
            },
        }),
    };
};
const createMaterialHuVitePlugin = (config) => {
    const materialHuFolderPath = (0, utils_1.getFolderPath)({
        ...config,
        folderPath: constants_1.DEFAULT_MATERIAL_HU_PATH,
        repoName: 'material-hu',
    });
    return getMaterialHuVitePlugin(materialHuFolderPath);
};
exports.createMaterialHuVitePlugin = createMaterialHuVitePlugin;
