import { type ReactNode } from 'react';
export type SelectChartDataItem = {
    label: string;
    value: number;
};
export type SelectChartProps = {
    data: SelectChartDataItem[];
    onSegmentClick?: (index: number) => void;
    footer?: ReactNode;
    slotProps?: {
        cardContainer?: any;
        root?: any;
    };
};
