import { type MidCircleChartProps } from '../charts/MidCircleChart/types';
import { type TitleProps } from '../../design-system/Title/types';
import { type StackProps, type SxProps } from '@mui/material';
export type MidCircleProps = Pick<MidCircleChartProps, 'decimalPrecision' | 'color'> & {
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
        root?: StackProps;
        title?: TitleProps;
        chart?: MidCircleChartProps;
        skeleton?: MidCircleSkeletonProps;
    };
};
export type MidCircleSkeletonProps = Pick<MidCircleProps, 'copetin' | 'title' | 'description'> & {
    /** Component styles */
    sx?: SxProps;
};
