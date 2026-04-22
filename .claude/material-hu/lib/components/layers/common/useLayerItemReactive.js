import { useCallback, useEffect, useRef } from 'react';
/**
 * Shared reactive layer item logic for Drawers and Dialogs.
 * Keeps the layer's config in sync with the provided `config` while the item is open,
 * so that loading states, form data, etc. stay reactive without re-opening.
 */
export function useLayerItemReactive({ id, config, buildBaseConfig, getItems, openItem, closeItem, updateConfig, }) {
    const baseConfig = buildBaseConfig(config);
    const configRef = useRef(baseConfig);
    configRef.current = baseConfig;
    const canSyncRef = useRef(true);
    const open = useCallback((args) => {
        openItem(args ?? configRef.current, id);
    }, [openItem, id]);
    const close = useCallback((immediate) => {
        closeItem(id, immediate);
    }, [closeItem, id]);
    const updateConfigForItem = useCallback((newConfigSetter) => {
        updateConfig(id, newConfigSetter);
    }, [updateConfig, id]);
    // Sync config to layer when it changes, only while this item is open. baseConfig triggers on config change;
    // getItems intentionally omitted from deps to avoid re-runs when stack reference changes.
    useEffect(() => {
        if (!canSyncRef.current) {
            return;
        }
        const items = getItems();
        const item = items.find(i => i.id === id);
        if (!item || !item.isOpen) {
            return;
        }
        canSyncRef.current = false;
        updateConfig(id, () => configRef.current);
        requestAnimationFrame(() => {
            canSyncRef.current = true;
        });
    }, [baseConfig, updateConfig, id]);
    return {
        open,
        close,
        updateConfig: updateConfigForItem,
    };
}
