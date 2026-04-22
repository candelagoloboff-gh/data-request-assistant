import { type ReactNode } from 'react';
import { type SxProps, type Theme } from '@mui/material';
import { type DialogProps } from './types';
/**
 * Dialog.Header - Header section with title and close button
 */
export declare function DialogHeader({ title, onClose, children, sx, }: {
    title?: string;
    onClose: () => void;
    children?: ReactNode;
    sx?: SxProps<Theme>;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Dialog.Body - Content section with scroll support
 */
export declare function DialogBody({ children, textBody, sx, }: {
    children?: ReactNode;
    textBody?: string;
    sx?: SxProps<Theme>;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Dialog.Footer - Footer section for actions and info
 */
export declare function DialogFooter({ children, actionInfo, hideBorder, sx, }: {
    children?: ReactNode;
    actionInfo?: string;
    hideBorder?: boolean;
    sx?: SxProps<Theme>;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Main Dialog component - Uses composition components internally
 * Maintains backward compatibility with the existing API
 */
declare const Dialog: {
    ({ title, onClose, body, textBody, primaryButtonProps, secondaryButtonProps, actionInfo, footerProps, sx, }: DialogProps): import("react/jsx-runtime").JSX.Element;
    Header: typeof DialogHeader;
    Body: typeof DialogBody;
    Footer: typeof DialogFooter;
};
export type { DialogProps };
export default Dialog;
