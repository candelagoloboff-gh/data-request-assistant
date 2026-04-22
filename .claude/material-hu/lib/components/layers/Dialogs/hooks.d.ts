import { type DialogLayerContextValue, type DialogLevel } from './types';
export declare const DialogLayerContext: import("react").Context<DialogLayerContextValue | null>;
/**
 * Hook to access the dialog layer context.
 *
 * Returns `openDialog`, `closeDialog`, `getDialogs`, and `updateDialogConfig` methods.
 *
 * @throws Error if used outside of DialogLayerProvider
 */
export declare const useDialogLayer: () => DialogLayerContextValue;
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
export declare const useDialogLayerItem: (id: string, config: DialogLevel["config"]) => {
    openDialog: (args?: DialogLevel["config"]) => void;
    closeDialog: (immediate?: boolean) => void;
    updateDialogConfig: (setter: (current: import("./types").OpenDialogArgs) => import("./types").OpenDialogArgs) => void;
};
