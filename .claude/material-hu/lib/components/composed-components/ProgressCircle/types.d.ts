import { type ProgressCircleChartProps } from '../charts/ProgressCircleChart/types';
import { type TitleProps } from '../../design-system/Title/types';
import { type StackProps, type SxProps } from '@mui/material';
export type ProgressCircleProps = Pick<ProgressCircleChartProps, 'decimalPrecision' | 'color'> & {
    /** The current value out of the total */
    current?: number;
    /** The total - defaults to 100 */
    total?: number;
    /** Text to show as copetin */
    copetin?: string;
    /** Text to show as title */
    title?: string;
    /** Text to show as description */
    description?: string;
    /** Component styles */
    sx?: SxProps;
    /** Whether the component is in loading state */
    loading?: boolean;
    /** Props for inner components */
    slotProps?: {
        title?: TitleProps;
        chart?: ProgressCircleChartProps;
        root?: StackProps;
        skeleton?: ProgressCircleSkeletonProps;
    };
};
export type ProgressCircleSkeletonProps = {
    /** Component styles */
    sx?: SxProps;
};
