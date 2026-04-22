import { type SxProps } from '@mui/material';
export type PieChartProps = {
    values: number[];
    labels: string[];
    colors?: string[];
    legend?: 'none' | 'bottom' | 'top' | 'right' | 'left';
    sx?: SxProps;
};
