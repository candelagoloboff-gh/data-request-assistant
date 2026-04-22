import { type BoxProps } from '@mui/material';
export type SingleStackedBarChartProps = {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    showMarkers?: boolean;
    showLegend?: boolean;
    showDataLabel?: boolean;
    showTooltipPercentage?: boolean;
    showDataLabelPercentage?: boolean;
    height: number;
    sx?: BoxProps['sx'];
};
