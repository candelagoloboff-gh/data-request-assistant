import { type SxProps } from '@mui/material';
export type ProgressCircleChartProps = {
    /** The progress value to display (0-100). */
    value: number;
    /** Custom color for the progress arc. Defaults to theme primary hover color. */
    color?: string;
    /** Number of decimal places to show in the percentage text. Defaults to 0. */
    decimalPrecision?: 0 | 1 | 2;
    /** Custom styles to apply to the chart container. */
    sx?: SxProps;
    /** Size of the doughnut chart in pixels. Defaults to 160. */
    size?: number;
    /** Font size for the percentage text. Defaults to '24px'. */
    fontSize?: string;
};
