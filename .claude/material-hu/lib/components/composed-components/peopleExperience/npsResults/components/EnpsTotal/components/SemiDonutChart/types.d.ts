import { type StackProps } from '@mui/material';
export type SemiDonutChartProps = {
    value: number | null;
    nullValueTooltip?: string;
    slotProps?: {
        root?: StackProps;
    };
};
