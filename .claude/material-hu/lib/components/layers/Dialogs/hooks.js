import { createContext, useContext } from 'react';
import { useLayerItemReactive } from '../common/useLayerItemReactive';
export const DialogLayerContext = createContext(null);
/**
 * Hook to access the dialog layer context.
 *
 * Returns `openDialog`, `closeDialog`, `getDialogs`, and `updateDialogConfig` methods.
 *
 * @throws Error if used outside of DialogLayerProvider
 */
export const useDialogLayer = () => {
    const context = useContext(DialogLayerContext);
    if (!context) {
        throw new Error('useDialogLayer must be used inside DialogLayerProvider');
    }
    return context;
};
/**
 * Hook for managing a specific dialog instance with reactive config updates.
 *
 * The dialog configuration automatically stays in sync with component state.
 * Use this instead of `useDialogLayer` when you need reactive props (e.g., loading states).
 *
 * @param id - Unique identifier for the dialog
 * @param config - Dialog configuration that will be kept in sync when the dialog is open
 * @returns `openDialog`, `closeDialog`, and `updateDialogConfig` methods
 * @throws Error if used outside of DialogLayerProvider
 */
export const useDialogLayerItem = (id, config) => {
    const { openDialog: contextOpenDialog, closeDialog: contextCloseDialog, getDialogs, updateDialogConfig: contextUpdateDialogConfig, } = useDialogLayer();
    const { open, close, updateConfig } = useLayerItemReactive({
        id,
        config,
        buildBaseConfig: base => ({
            ...base,
            onClose: base.onClose ?? (() => contextCloseDialog(id)),
        }),
        getItems: getDialogs,
        openItem: contextOpenDialog,
        closeItem: contextCloseDialog,
        updateConfig: contextUpdateDialogConfig,
    });
    return {
        openDialog: open,
        closeDialog: close,
        updateDialogConfig: updateConfig,
    };
};
