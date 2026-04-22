import { type Theme } from '@mui/material/styles';
import { type SxProps } from '@mui/system';
/**
 * Compose sx values into a SINGLE SxProps value.
 * Safe to pass directly to `sx={...}`.
 */
export declare function composeSx(...sx: Array<SxProps<Theme> | undefined>): SxProps<Theme>;
