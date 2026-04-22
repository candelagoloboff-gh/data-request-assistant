import { type PropsWithChildren, type ReactNode } from 'react';
import { type ButtonProps, type SxProps } from '@mui/material';
export type DropdownProps = PropsWithChildren<{
    /** Label for the dropdown Button */
    label: ReactNode;
    /** Wether the menu is open (controlled mode) */
    open?: boolean;
    /** Callback fired on open */
    onOpen?: () => void;
    /** Callback fired on close */
    onClose?: () => void;
    /** Variant of the Button */
    buttonVariant?: Extract<ButtonProps['variant'], 'primary' | 'secondary' | 'tertiary'>;
    /** Size of the Button */
    buttonSize?: ButtonProps['size'];
    /** Position of the menu */
    position?: 'left' | 'right' | 'center';
    /** Wether to show the chevron icon */
    hasIcon?: boolean;
    /** Callback fired on click */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Custom styles */
    sx?: SxProps;
    /** Props of the Button */
    buttonProps?: ButtonProps;
}>;
