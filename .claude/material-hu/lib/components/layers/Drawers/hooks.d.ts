import { type DrawerLayerContextValue, type DrawerLevel } from './types';
export declare const DrawerLayerContext: import("react").Context<DrawerLayerContextValue | null>;
/**
 * Hook to access the drawer layer context.
 *
 * Returns `openDrawer`, `closeDrawer`, `getDrawers`, and `updateDrawerConfig` methods.
 *
 * @throws Error if used outside of DrawerLayerProvider
 * @see README.md for usage examples
 */
export declare const useDrawerLayer: () => DrawerLayerContextValue;
/**
 * Hook for managing a specific drawer instance with reactive config updates.
 *
 * The drawer configuration automatically stays in sync with component state.
 * Use this instead of `useDrawerLayer` when you need reactive props (e.g., loading states).
 *
 * @param id - Unique identifier for the drawer
 * @param config - Drawer configuration that will be kept in sync when the drawer is open
 * @returns `openDrawer`, `closeDrawer`, and `updateDrawerConfig` methods
 * @throws Error if used outside of DrawerLayerProvider
 * @see README.md for usage examples
 */
export declare const useDrawerLayerItem: (id: string, config: DrawerLevel["config"]) => {
    openDrawer: (args?: DrawerLevel["config"]) => void;
    closeDrawer: (immediate?: boolean) => void;
    updateDrawerConfig: (setter: (current: import("./types").OpenDrawerArgs) => import("./types").OpenDrawerArgs) => void;
};
