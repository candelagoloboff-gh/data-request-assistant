/** biome-ignore-all lint/suspicious/noConsole: material-hu-plugin */

import { type Plugin } from 'vite';

import {
  DEFAULT_MATERIAL_HU_PATH,
  MATERIAL_HU_INTERNAL_PATHS,
  MATERIAL_HU_SOURCE_PATHS,
  SHARED_DEPENDENCIES,
} from '../constants';
import { type VitePluginConfig } from '../types';
import { getFolderPath, getNodeModule, greenLog } from '../utils';

import path from 'node:path';

const TAG = '[material-hu-plugin]';

/**
 * Builds resolve.alias entries that redirect @material-hu/* imports
 * to the raw TypeScript source in material-hu/src/.
 * Also maps internal aliases (@hooks, @utils, etc.) so that material-hu's
 * own imports resolve correctly when Vite processes its source.
 */
const getMaterialHuSourceAliases = (
  materialHuPath: string,
): Record<string, string> => {
  const srcPath = path.join(materialHuPath, 'src');
  const aliases: Record<string, string> = {};

  // @material-hu/* → material-hu/src/*
  for (const [alias, subdir] of Object.entries(MATERIAL_HU_SOURCE_PATHS)) {
    aliases[alias] = path.join(srcPath, subdir);
  }

  // Internal path aliases used within material-hu source code
  for (const [alias, subdir] of Object.entries(MATERIAL_HU_INTERNAL_PATHS)) {
    aliases[alias] = subdir ? path.join(srcPath, subdir) : srcPath;
  }

  // Force shared dependencies to resolve from the consumer's node_modules.
  // This prevents duplicate React/MUI/emotion instances when Vite follows
  // imports from material-hu source into its own node_modules.
  for (const dep of SHARED_DEPENDENCIES) {
    aliases[dep] = getNodeModule(dep);
  }

  // React JSX runtimes must also be aliased explicitly
  aliases['react/jsx-runtime'] = getNodeModule('react/jsx-runtime');
  aliases['react/jsx-dev-runtime'] = getNodeModule('react/jsx-dev-runtime');

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
const getMaterialHuVitePlugin = (
  materialHuPath: string | undefined,
): Plugin => {
  if (!materialHuPath) return { name: 'material-hu-dev-link-disabled' };

  const materialHuSrcPath = path.join(materialHuPath, 'src');

  console.info(`${TAG} ✅ ${greenLog('Activated')}`);

  return {
    name: 'material-hu-dev-link',
    enforce: 'pre',

    config: () => ({
      resolve: {
        alias: getMaterialHuSourceAliases(materialHuPath),
        dedupe: [...SHARED_DEPENDENCIES],
      },
      server: {
        fs: { allow: [process.cwd(), materialHuSrcPath] },
        watch: { ignored: ['!**/material-hu/src/**'] },
      },
    }),
  };
};

export const createMaterialHuVitePlugin = (
  config: VitePluginConfig,
): Plugin => {
  const materialHuFolderPath = getFolderPath({
    ...config,
    folderPath: DEFAULT_MATERIAL_HU_PATH,
    repoName: 'material-hu',
  });

  return getMaterialHuVitePlugin(materialHuFolderPath);
};
