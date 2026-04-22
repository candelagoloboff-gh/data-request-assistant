import { type StackProps } from '@mui/material';
export type ProgressBarProps = {
    /** Current progress value */
    current?: number;
    /** Total (maximum) value used to compute the percentage */
    total?: number;
    /** Label displayed above the progress bar */
    title?: string;
    /** Secondary text displayed below the title */
    description?: string;
    /** Helper text or node shown below the progress bar */
    helper?: string | React.ReactNode;
    /** Shows the computed percentage value next to the bar */
    hasPercentage?: boolean;
    /** Truncates overflowing text with an ellipsis */
    withEllipsis?: boolean;
    /** Whether the bar animates indefinitely or reflects a concrete value */
    variant?: 'determinate' | 'indeterminate';
    /** Height of the progress bar track in pixels */
    progressHeight?: number;
    /** Number of decimal places shown in the percentage */
    decimalPrecision?: 0 | 1 | 2;
    /** Additional styles applied to the root Stack */
    sx?: StackProps['sx'];
};
