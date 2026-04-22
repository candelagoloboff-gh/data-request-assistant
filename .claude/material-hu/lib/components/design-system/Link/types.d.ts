import { type LinkProps as MuiLinkProps } from '@mui/material';
export type LinkProps = {
    /** Whether to display an arrow icon next to the link text */
    hasIcon?: boolean;
    /** Size in pixels of the accompanying icon */
    iconSize?: number;
    /** Disables the link interaction and applies a muted style */
    disabled?: boolean;
} & MuiLinkProps;
