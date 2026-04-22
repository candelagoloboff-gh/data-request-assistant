import { type ReactNode } from 'react';
import { useDrawerLayer, useDrawerLayerItem } from './hooks';
export { useDrawerLayer, useDrawerLayerItem };
/**
 * Context provider for managing drawers globally.
 *
 * Manages a stack of drawers that can be opened from anywhere in the app.
 * Supports Simple API (props-based) and Composition Components API (custom layouts).
 *
 * @see README.md for full documentation and examples
 */
export declare function DrawerLayerProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Re-export Drawer composition components from design-system
 */
export declare const Drawer: {
    Header: typeof import("../../design-system/Drawer/components/Header").DrawerHeader;
    Body: typeof import("../../design-system/Drawer/components/Body").DrawerBody;
    DoubleLayout: typeof import("../../design-system/Drawer/components/DoubleLayout").DrawerDoubleLayout;
    Footer: typeof import("../../design-system/Drawer/components/Footer").DrawerFooter;
    Actions: typeof import("../../design-system/Drawer/components/Actions").DrawerActions;
    Content: typeof import("../../design-system/Drawer/components/Content").DrawerContent;
};
