import { type ReactNode } from 'react';
import { type TableContainerProps } from '../../../../design-system/Table/components/TableContainer';
import { type ScoreDifferencePopoverProps } from '../ScoreDifferencePopover/types';
import { type NpsSegmentType } from '../types';
export type BaseQuestionDatum = {
    id: number;
    statement: string;
    topicLabel: string;
    answersLabel: string;
    commentsLabel: string;
    type: string;
    hasThresholdPassed: boolean;
    score: number | null;
    scoreDifference: number | null;
    baseScore: number | null;
};
export type NpsQuestionDatum = BaseQuestionDatum & {
    type: 'LIKERT';
    promoters: number;
    detractors: number;
    neutrals: number;
};
export type SelectQuestionDatum = BaseQuestionDatum & {
    type: 'SELECT';
    scorePercentage: number;
    answer: string;
};
export type TextQuestionDatum = BaseQuestionDatum & {
    type: 'TEXT';
};
export type QuestionDatum = NpsQuestionDatum | SelectQuestionDatum | TextQuestionDatum;
export type TableColumn<TQuestion extends QuestionDatum = QuestionDatum> = {
    id: string;
    heading: string | ((count: number) => string);
    width?: string | number;
    renderCell: (row: TQuestion) => ReactNode;
};
export type SatisfactionQuestionsTableProps<TQuestion extends QuestionDatum = QuestionDatum> = {
    questions: TQuestion[];
    questionsCount: number;
    questionsHeading: string;
    distributionHeading: string;
    scoreHeading: string;
    scoreDifferenceHeading: string;
    noAnswerLabel: string;
    openCommentLabel: string;
    tooltipLabels: {
        promoters: string;
        detractors: string;
        neutrals: string;
    };
    getTooltipTitle?: (key: NpsSegmentType, value: number) => string;
    noScoreMessage: string;
    onRowClick: (row: TQuestion) => void;
    slotProps?: {
        tableContainer?: TableContainerProps;
    };
    loading?: boolean;
    differenceIndicatorMeta: Pick<ScoreDifferencePopoverProps, 'scoreLabel' | 'baseScoreLabel' | 'footerLabel'> & {
        getScoreDifferenceDescription: (row: NpsQuestionDatum) => React.ReactNode;
    };
    loadingMore?: boolean;
};
