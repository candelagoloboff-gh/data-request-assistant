export declare const DEFAULT_MATERIAL_HU_PATH = "../material-hu";
export declare const DEFAULT_HU_TRANSLATIONS_PATH = "../hu-translations";
export declare const NODE_MODULES_LOCALE_PATTERN: RegExp;
/**
 * Dependencies shared between consumer app and material-hu.
 * Must resolve to a single instance to prevent "multiple versions" runtime errors
 */
export declare const SHARED_DEPENDENCIES: readonly ["react", "react-dom", "@emotion/react", "@emotion/styled", "@mui/material", "@mui/lab", "@mui/icons-material", "@mui/x-date-pickers", "@tanstack/react-query", "react-query", "react-router", "react-router-dom", "react-hook-form", "react-i18next", "i18next", "notistack", "@dnd-kit/core", "@dnd-kit/modifiers", "@dnd-kit/sortable", "@dnd-kit/utilities"];
/**
 * Maps @material-hu/* subpath aliases to their corresponding directory inside material-hu/src/.
 * Used to generate resolve.alias entries pointing to source code instead of built dist.
 */
export declare const MATERIAL_HU_SOURCE_PATHS: Record<string, string>;
/**
 * Internal path aliases used within material-hu source code.
 * These must also be resolved by Vite when serving material-hu source directly.
 * Key = alias, Value = subdirectory relative to material-hu/src/.
 */
export declare const MATERIAL_HU_INTERNAL_PATHS: Record<string, string>;
