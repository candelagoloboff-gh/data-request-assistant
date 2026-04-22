import { type CardContainerProps } from '../../../../../design-system/CardContainer/types';
export type Stat = {
    type: 'promoter' | 'detractor' | 'neutral';
    title: string;
    value: React.ReactNode;
    differenceIndicator?: React.ReactNode;
};
export type DistributionStatsProps = {
    title: string;
    stats: Stat[];
    loading?: boolean;
    sx?: CardContainerProps['sx'];
};
