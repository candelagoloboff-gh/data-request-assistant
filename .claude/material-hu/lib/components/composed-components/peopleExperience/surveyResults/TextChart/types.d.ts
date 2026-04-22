import { type ReactNode } from 'react';
export type TextChartDataItem = {
    label: string;
    value: number;
};
export type TextChartProps = {
    data: TextChartDataItem[];
    onItemClick?: (index: number) => void;
    footer?: ReactNode;
    slotProps?: {
        cardContainer?: any;
        root?: any;
    };
};
