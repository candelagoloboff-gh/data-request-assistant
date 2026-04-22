export const DEFAULT_MATERIAL_HU_PATH = '../material-hu';
export const DEFAULT_HU_TRANSLATIONS_PATH = '../hu-translations';
export const NODE_MODULES_LOCALE_PATTERN =
  /\/node_modules\/hu-translations\/locale\/(.+)\.json/;

/**
 * Dependencies shared between consumer app and material-hu.
 * Must resolve to a single instance to prevent "multiple versions" runtime errors
 */
export const SHARED_DEPENDENCIES = [
  'react',
  'react-dom',
  '@emotion/react',
  '@emotion/styled',
  '@mui/material',
  '@mui/lab',
  '@mui/icons-material',
  '@mui/x-date-pickers',
  '@tanstack/react-query',
  'react-query',
  'react-router',
  'react-router-dom',
  'react-hook-form',
  'react-i18next',
  'i18next',
  'notistack',
  '@dnd-kit/core',
  '@dnd-kit/modifiers',
  '@dnd-kit/sortable',
  '@dnd-kit/utilities',
] as const;

/**
 * Maps @material-hu/* subpath aliases to their corresponding directory inside material-hu/src/.
 * Used to generate resolve.alias entries pointing to source code instead of built dist.
 */
export const MATERIAL_HU_SOURCE_PATHS: Record<string, string> = {
  '@material-hu/components': 'components',
  '@material-hu/hooks': 'hooks',
  '@material-hu/utils': 'utils',
  '@material-hu/types': 'types',
  '@material-hu/constants': 'constants',
  '@material-hu/theme': 'theme',
  '@material-hu/config': 'config',
};

/**
 * Internal path aliases used within material-hu source code.
 * These must also be resolved by Vite when serving material-hu source directly.
 * Key = alias, Value = subdirectory relative to material-hu/src/.
 */
export const MATERIAL_HU_INTERNAL_PATHS: Record<string, string> = {
  '@src': '',
  '@composed-components': 'components/composed-components',
  '@design-system': 'components/design-system',
  '@layers': 'components/layers',
  '@hooks': 'hooks',
  '@types': 'types',
  '@utils': 'utils',
  '@constants': 'constants',
  '@config': 'config',
};
