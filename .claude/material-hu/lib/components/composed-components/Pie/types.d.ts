import { type PieChartProps } from '../charts/PieChart/types';
import { type TitleProps } from '../../design-system/Title/types';
import { type StackProps, type SxProps } from '@mui/material';
export type PieItemWithColor = PieItem & {
    color: string;
};
export type PieItem = {
    value: number;
    label: string;
};
export type PieProps = Pick<PieChartProps, 'legend'> & {
    /** An array of items with value and configuration */
    items?: PieItem[] | PieItemWithColor[];
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
        chart?: PieChartProps;
        skeleton?: PieSkeletonProps;
    };
};
export type PieSkeletonProps = Pick<PieProps, 'copetin' | 'title' | 'description' | 'legend'> & {
    /** Component styles */
    sx?: SxProps;
};
