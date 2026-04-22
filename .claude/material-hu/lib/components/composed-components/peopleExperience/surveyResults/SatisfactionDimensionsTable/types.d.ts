import { type ReactNode } from 'react';
import { type TableContainerProps } from '../../../../design-system/Table/components/TableContainer';
import { type ScoreDifferencePopoverProps } from '../ScoreDifferencePopover/types';
import { type NpsSegmentType } from '../types';
export type DimensionDatum = {
    id: number;
    name: string;
    questionsLabel: string;
    score: number | null;
    scoreDifference: number | null;
    baseScore: number | null;
    hasThresholdPassed: boolean;
    hasQuestions: boolean;
    promoters: number;
    detractors: number;
    neutrals: number;
};
export type TableColumn = {
    id: string;
    heading: string | ((count: number) => string);
    width?: string | number;
    renderCell: (row: DimensionDatum) => ReactNode;
};
export type SatisfactionDimensionsTableProps = {
    dimensions: DimensionDatum[];
    dimensionsCount: number;
    dimensionsHeading: string;
    scoreHeading: string;
    scoreDifferenceHeading: string;
    tooltipLabels: {
        promoters: string;
        detractors: string;
        neutrals: string;
    };
    getTooltipTitle?: (key: NpsSegmentType, value: number) => string;
    distributionHeading: string;
    noAnswerLabel: string;
    noQuestionsLabel: string;
    onClickRow: (row: DimensionDatum) => void;
    slotProps?: {
        tableContainer?: TableContainerProps;
    };
    loading?: boolean;
    loadingMore?: boolean;
    differenceIndicatorMeta: Pick<ScoreDifferencePopoverProps, 'scoreLabel' | 'baseScoreLabel' | 'footerLabel'> & {
        getScoreDifferenceDescription: (row: DimensionDatum) => React.ReactNode;
    };
};
