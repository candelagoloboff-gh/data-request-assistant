import { type CardContainerProps } from '../../../../../design-system/CardContainer';
type EnpsChartDataItem = {
    label: string;
    value: number | null;
};
type EnpsChartProps = {
    data: EnpsChartDataItem[];
    differenceData?: EnpsChartDataItem[];
    titleSlot?: React.ReactNode;
    headerSlot?: React.ReactNode;
    navigationSlot: React.ReactNode;
    loading?: boolean;
    isPreviousData?: boolean;
    nullDataMessage?: string;
    filteredTooltipPrefix?: string;
    totalTooltipPrefix?: string;
    enpsTooltipPrefix?: string;
    emptyStateSlot: React.ReactNode;
    slotProps?: {
        root?: CardContainerProps;
    };
};
export type { EnpsChartDataItem, EnpsChartProps };
