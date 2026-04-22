import { type ReactNode } from 'react';
import { type DrawerProps as DesignSystemDrawerProps } from '../../design-system/Drawer';
import { type DrawerProps as MuiDrawerProps } from '@mui/material';
export type DrawerCloseReason = 'backdropClick' | 'escapeKeyDown' | 'dismissButton' | 'cancelButton' | 'backButton' | 'submitButton';
/**
 * Props for opening a drawer using the simple API (uses the design-system Drawer component)
 */
export type SimpleDrawerProps = DesignSystemDrawerProps;
/**
 * Props for opening a drawer using composition components.
 */
export type CompositionDrawerProps = {
    /** Custom content using Drawer composition components (Drawer.Header, Drawer.Body, etc.) */
    content: ReactNode;
};
/** Props for the MUI Drawer wrapper (PaperProps, SlideProps, anchor, sx, etc.). Pass via `wrapperProps` in OpenDrawerArgs. */
export type DrawerWrapperProps = Omit<MuiDrawerProps, 'open' | 'onClose'>;
/**
 * Configuration for opening a drawer.
 * - **Simple API:** design-system Drawer props (title, children, primaryButtonProps, etc.).
 * - **Composition API:** `content` (ReactNode) with your composed layout.
 * - **Both:** optional `wrapperProps` for the MUI Drawer wrapper (PaperProps, SlideProps, anchor, etc.).
 */
export type OpenDrawerArgs = {
    /** Callback when the drawer requests to close (e.g. backdrop, escape, dismiss button). */
    onClose?: (reason?: DrawerCloseReason) => void;
    /** Optional props for the MUI Drawer wrapper (PaperProps, SlideProps, anchor, sx, etc.). */
    wrapperProps?: DrawerWrapperProps;
} & (SimpleDrawerProps | CompositionDrawerProps);
/**
 * Individual drawer level in the stack
 */
export type DrawerLevel = {
    /** Unique identifier for this drawer level */
    id: string;
    /** Configuration for the drawer */
    config: OpenDrawerArgs;
    /** Whether this drawer is currently open (controls animation) */
    isOpen: boolean;
};
/**
 * Context value provided by DrawerLayerProvider
 */
export type DrawerLayerContextValue = {
    /**
     * Opens a new drawer. If a drawer is already open, it will be replaced.
     * @param args - Configuration object for the drawer
     */
    openDrawer: (args: OpenDrawerArgs, drawerId?: string) => void;
    /**
     * Closes the current drawer.
     * @param immediate - If true, closes the drawer immediately without animation
     */
    closeDrawer: (drawerId?: string, immediate?: boolean) => void;
    /**
     * Returns a list of the current Drawer's stack.
     */
    getDrawers: () => DrawerLevel[];
    /**
     * Updates the config of a Drawer in the Stack that matches the provided ID.
     * @param drawerId - The ID of the drawer to be updated.
     * @param newConfig - The new config object to be applied to the Drawer.
     */
    updateDrawerConfig: (drawerId: string, newConfigSetter: (currentConfig: DrawerLevel['config']) => DrawerLevel['config']) => void;
};
