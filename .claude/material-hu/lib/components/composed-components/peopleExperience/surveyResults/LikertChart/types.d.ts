import { type ReactNode } from 'react';
import { type CardContainerProps } from '../../../../design-system/CardContainer';
import { type StackProps } from '@mui/material';
export declare enum SentimentType {
    POSITIVE = "POSITIVE",
    NEGATIVE = "NEGATIVE",
    NEUTRAL = "NEUTRAL"
}
export type LikertChartDataItem = {
    label: string;
    percentage: number;
    sentimentType: SentimentType;
};
export type LikertChartProps = {
    data: LikertChartDataItem[];
    onBarClick?: (index: number) => void;
    footer?: ReactNode;
    slotProps?: {
        cardContainer?: CardContainerProps;
        stack?: StackProps;
    };
};
