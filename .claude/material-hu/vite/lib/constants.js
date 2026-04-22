"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MATERIAL_HU_INTERNAL_PATHS = exports.MATERIAL_HU_SOURCE_PATHS = exports.SHARED_DEPENDENCIES = exports.NODE_MODULES_LOCALE_PATTERN = exports.DEFAULT_HU_TRANSLATIONS_PATH = exports.DEFAULT_MATERIAL_HU_PATH = void 0;
exports.DEFAULT_MATERIAL_HU_PATH = '../material-hu';
exports.DEFAULT_HU_TRANSLATIONS_PATH = '../hu-translations';
exports.NODE_MODULES_LOCALE_PATTERN = /\/node_modules\/hu-translations\/locale\/(.+)\.json/;
/**
 * Dependencies shared between consumer app and material-hu.
 * Must resolve to a single instance to prevent "multiple versions" runtime errors
 */
exports.SHARED_DEPENDENCIES = [
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
];
/**
 * Maps @material-hu/* subpath aliases to their corresponding directory inside material-hu/src/.
 * Used to generate resolve.alias entries pointing to source code instead of built dist.
 */
exports.MATERIAL_HU_SOURCE_PATHS = {
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
exports.MATERIAL_HU_INTERNAL_PATHS = {
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
