import { type Nullable, ScoreType } from '../../types';
type HeatScoreCellProps = {
    score: Nullable<number>;
    difference: Nullable<number>;
    baseScore: Nullable<number>;
    scoreType: ScoreType;
    isTotal?: boolean;
};
declare const HeatScoreCell: ({ score, difference, isTotal, scoreType, baseScore, }: HeatScoreCellProps) => import("react/jsx-runtime").JSX.Element;
export default HeatScoreCell;
