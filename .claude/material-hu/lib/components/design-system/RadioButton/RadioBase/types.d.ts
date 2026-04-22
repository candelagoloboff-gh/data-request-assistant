import { type RadioProps } from '@mui/material';
export type RadioBaseProps = {
    /** Shows the radio in an error state with a red border */
    error?: boolean;
    /** Prevents interaction and applies a muted style */
    disabled?: boolean;
    /** Whether the radio is currently selected */
    checked?: boolean;
} & Omit<RadioProps, 'label' | 'onClick' | 'color'>;
