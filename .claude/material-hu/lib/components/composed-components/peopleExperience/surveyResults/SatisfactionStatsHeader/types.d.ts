import { type StackProps } from '@mui/material/Stack';
import { type SatisfactionChartProps } from '../SatifactionChart/types';
import { type ScoreDifferencePopoverProps } from '../ScoreDifferencePopover/types';
export type StatHeaderProps = {
    title: string;
    score: number | null;
    scoreDisplayFallback?: string | number;
    scoreLabel?: string;
    chartMeta: {
        title: string;
        description: string;
        promoters: number;
        detractors: number;
        neutrals: number;
        getTooltipTitle?: SatisfactionChartProps['getTooltipTitle'];
    };
    differenceIndicatorMeta: {
        baseScore: number | null;
        scoreDifference: number | null;
        getScoreDifferenceDescription: (score: number) => React.ReactNode;
    } & Pick<ScoreDifferencePopoverProps, 'baseScoreLabel' | 'scoreLabel' | 'footerLabel'>;
    slotProps?: {
        root?: StackProps;
    };
};
