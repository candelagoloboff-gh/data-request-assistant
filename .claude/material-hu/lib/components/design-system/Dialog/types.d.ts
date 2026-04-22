import { type ReactNode } from 'react';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { type SxProps, type Theme } from '@mui/material';
export type DialogProps = {
    /** Title displayed in the dialog header */
    title?: string;
    /** Main content rendered in the dialog body */
    body?: ReactNode;
    /** Informational text shown in the action area */
    actionInfo?: string;
    /** Plain text body alternative to the `body` ReactNode */
    textBody?: string;
    /** Props forwarded to the primary action button */
    primaryButtonProps?: ButtonProps;
    /** Props forwarded to the secondary action button */
    secondaryButtonProps?: ButtonProps;
    /** Props for the footer section */
    footerProps?: {
        /** Hides the top border of the footer */
        hideBorder?: boolean;
    };
    /** Callback fired when the dialog is closed */
    onClose: () => void;
    /** Custom styles applied to the dialog root */
    sx?: SxProps<Theme>;
};
