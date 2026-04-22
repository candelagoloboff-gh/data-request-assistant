export type LayerItemReactiveOptions<T> = {
    /** Unique identifier for this layer item (drawer or dialog) */
    id: string;
    /** Current config (e.g. from component state). Kept in sync when the item is open. */
    config: T;
    /** Build the config to pass to open/update (e.g. merge default onClose with user config) */
    buildBaseConfig: (config: T) => T;
    /** Returns the current stack of items to check if this one is open */
    getItems: () => Array<{
        id: string;
        isOpen: boolean;
    }>;
    /** Open the item with the given config and optional id */
    openItem: (args: T, itemId?: string) => void;
    /** Close the item by id (or topmost if no id) */
    closeItem: (itemId?: string, immediate?: boolean) => void;
    /** Update the item's config in the layer state */
    updateConfig: (itemId: string, setter: (current: T) => T) => void;
};
export type LayerItemReactiveReturn<T> = {
    /** Open the item (uses current config if no args, or pass partial/override config) */
    open: (args?: T) => void;
    /** Close this item */
    close: (immediate?: boolean) => void;
    /** Manually update this item's config in the layer */
    updateConfig: (setter: (current: T) => T) => void;
};
/**
 * Shared reactive layer item logic for Drawers and Dialogs.
 * Keeps the layer's config in sync with the provided `config` while the item is open,
 * so that loading states, form data, etc. stay reactive without re-opening.
 */
export declare function useLayerItemReactive<T>({ id, config, buildBaseConfig, getItems, openItem, closeItem, updateConfig, }: LayerItemReactiveOptions<T>): LayerItemReactiveReturn<T>;
