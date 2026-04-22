import { type QuestionDatum, type SatisfactionQuestionsTableProps } from './types';
declare const SatisfactionQuestionsTable: <TQuestion extends QuestionDatum = QuestionDatum>({ questions, questionsCount, questionsHeading, distributionHeading, scoreHeading, scoreDifferenceHeading, noAnswerLabel, openCommentLabel, tooltipLabels, getTooltipTitle, noScoreMessage, onRowClick, slotProps, loading, loadingMore, differenceIndicatorMeta, }: SatisfactionQuestionsTableProps<TQuestion>) => import("react/jsx-runtime").JSX.Element;
export default SatisfactionQuestionsTable;
