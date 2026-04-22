import { type ReactNode } from 'react';
import { type DialogProps as DesignSystemDialogProps } from '../../design-system/Dialog';
import { type DialogProps as MuiDialogProps } from '@mui/material';
export type DialogCloseReason = 'backdropClick' | 'escapeKeyDown';
/**
 * Props for opening a dialog using the simple API (uses the design-system Dialog component)
 */
export type SimpleDialogProps = Omit<DesignSystemDialogProps, 'onClose'>;
/**
 * Props for opening a dialog using composition components
 */
export type CompositionDialogProps = {
    /** Custom content using Dialog composition components (Dialog.Header, Dialog.Body, Dialog.Footer) */
    content: ReactNode;
};
/**
 * Configuration for opening a dialog
 */
export type OpenDialogArgs = {
    /** Optional props to pass to the MUI Dialog wrapper */
    dialogProps?: Omit<MuiDialogProps, 'open' | 'onClose'>;
    /** If true, the dialog will not be closed when the backdrop is clicked */
    disableCloseOnBackdropClick?: boolean;
    /** If true, the dialog will not be closed when the escape key is pressed */
    disableCloseOnEscapeKeyDown?: boolean;
    /** Callback function called when attempting closing */
    onClose?: (reason?: DialogCloseReason) => void;
} & (SimpleDialogProps | CompositionDialogProps);
/**
 * Individual dialog level in the stack
 */
export type DialogLevel = {
    /** Unique identifier for this dialog level */
    id: string;
    /** Configuration for the dialog */
    config: OpenDialogArgs;
    /** Whether this dialog is currently open (controls animation) */
    isOpen: boolean;
};
/**
 * Context value provided by DialogLayerProvider
 */
export type DialogLayerContextValue = {
    /**
     * Opens a new dialog. Can be stacked on top of existing dialogs.
     * @param args - Configuration object for the dialog
     * @param dialogId - Optional unique identifier for the dialog
     */
    openDialog: (args: OpenDialogArgs, dialogId?: string) => void;
    /**
     * Closes a dialog. If no dialogId is provided, closes the topmost dialog.
     * @param dialogId - Optional ID of the dialog to close
     * @param immediate - If true, closes the dialog immediately without animation
     */
    closeDialog: (dialogId?: string, immediate?: boolean) => void;
    /**
     * Returns a list of the current Dialog's stack.
     */
    getDialogs: () => DialogLevel[];
    /**
     * Updates the config of a Dialog in the Stack that matches the provided ID.
     * @param dialogId - The ID of the dialog to be updated.
     * @param newConfigSetter - Function that receives current config and returns new config.
     */
    updateDialogConfig: (dialogId: string, newConfigSetter: (currentConfig: DialogLevel['config']) => DialogLevel['config']) => void;
};
