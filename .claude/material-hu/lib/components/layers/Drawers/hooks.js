import { createContext, useContext } from 'react';
import { useLayerItemReactive } from '../common/useLayerItemReactive';
export const DrawerLayerContext = createContext(null);
/**
 * Hook to access the drawer layer context.
 *
 * Returns `openDrawer`, `closeDrawer`, `getDrawers`, and `updateDrawerConfig` methods.
 *
 * @throws Error if used outside of DrawerLayerProvider
 * @see README.md for usage examples
 */
export const useDrawerLayer = () => {
    const context = useContext(DrawerLayerContext);
    if (!context) {
        throw new Error('useDrawerLayer must be used inside DrawerLayerProvider');
    }
    return context;
};
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
export const useDrawerLayerItem = (id, config) => {
    const { openDrawer: contextOpenDrawer, closeDrawer: contextCloseDrawer, getDrawers, updateDrawerConfig: contextUpdateDrawerConfig, } = useDrawerLayer();
    const { open, close, updateConfig } = useLayerItemReactive({
        id,
        config,
        buildBaseConfig: base => ({
            onClose: () => contextCloseDrawer(id),
            ...base,
        }),
        getItems: getDrawers,
        openItem: contextOpenDrawer,
        closeItem: contextCloseDrawer,
        updateConfig: contextUpdateDrawerConfig,
    });
    return {
        openDrawer: open,
        closeDrawer: close,
        updateDrawerConfig: updateConfig,
    };
};
