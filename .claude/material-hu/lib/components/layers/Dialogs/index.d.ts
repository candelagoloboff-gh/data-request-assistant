import { type ReactNode } from 'react';
export { useDialogLayer, useDialogLayerItem } from './hooks';
/**
 * Context provider for managing dialogs globally.
 *
 * Manages a stack of dialogs that can be opened from anywhere in the app.
 * Supports Simple API (props-based) and Composition Components API (custom layouts).
 *
 * @see README.md for full documentation and examples
 */
export declare function DialogLayerProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Re-export Dialog composition components from design-system
 */
export declare const Dialog: {
    Header: typeof import("../../design-system/Dialog").DialogHeader;
    Body: typeof import("../../design-system/Dialog").DialogBody;
    Footer: typeof import("../../design-system/Dialog").DialogFooter;
};
