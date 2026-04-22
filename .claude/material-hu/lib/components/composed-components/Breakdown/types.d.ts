import { type BreakdownChartProps } from '../charts/BreakdownChart/types';
import { type StackProps, type SxProps } from '@mui/material';
export type BreakdownItemWithColor = BreakdownItem & {
    color: string;
};
export type BreakdownItem = {
    value: number;
    label: string;
};
export type BreakdownProps = {
    /** An array of items with value and configuration */
    items?: BreakdownItem[] | BreakdownItemWithColor[];
    /** Component styles */
    sx?: SxProps;
    /** Whether the component is in loading state */
    loading?: boolean;
    /** Props for inner components */
    slotProps?: {
        root?: StackProps;
        chart?: BreakdownChartProps;
        skeleton?: BreakdownSkeletonProps;
    };
};
export type BreakdownSkeletonProps = {
    /** Component styles */
    sx?: SxProps;
};
