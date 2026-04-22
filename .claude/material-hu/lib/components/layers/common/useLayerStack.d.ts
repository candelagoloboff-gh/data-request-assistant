/**
 * A single level in the layer stack (e.g. one drawer or one dialog).
 */
export type LayerLevel<TConfig> = {
    /** Unique identifier for this level */
    id: string;
    /** Level configuration (e.g. OpenDrawerArgs or OpenDialogArgs) */
    config: TConfig;
    /** Whether the level is currently open (drives enter/exit animation) */
    isOpen: boolean;
};
/**
 * Options for `useLayerStack`.
 */
export type UseLayerStackOptions<TConfig> = {
    /**
     * Optional. Transform config when opening (e.g. merge default onClose).
     * Receives the raw config, the level id, and a no-arg function that closes this level.
     */
    prepareConfig?: (config: TConfig, id: string, closeById: () => void) => TConfig;
};
/**
 * Return value of `useLayerStack`.
 */
export type UseLayerStackReturn<TConfig> = {
    /** Current stack of levels (order preserved; top = last) */
    stack: LayerLevel<TConfig>[];
    /** Add a level to the stack and open it (animation after raf) */
    open: (args: TConfig, id?: string) => void;
    /** Close a level by id, or the topmost if no id. If `immediate`, remove without animation. */
    close: (id?: string, immediate?: boolean) => void;
    /** Call when a level's exit transition ends; removes it from the stack if it is closed */
    handleTransitionEnd: (id: string) => void;
    /** Returns the current stack (e.g. for reactive hooks to check if a level is open) */
    getStack: () => LayerLevel<TConfig>[];
    /** Update the config of the level with the given id using a setter function */
    updateConfig: (id: string, setter: (current: TConfig) => TConfig) => void;
};
/**
 * Shared stack logic for Drawer and Dialog layers.
 * Manages open/close/transitionEnd/updateConfig with per-level isOpen state.
 */
export declare function useLayerStack<TConfig>(options?: UseLayerStackOptions<TConfig>): UseLayerStackReturn<TConfig>;
