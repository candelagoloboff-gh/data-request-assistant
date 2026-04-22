export type SatisfactionDrawerStatsProps = {
    scoreLabel?: string;
    answersLabel?: string;
    commentsLabel?: string;
    formatLabel?: string;
    scoreInfo?: string;
    hideScore?: boolean;
    score: number;
    answers: number;
    comments: number;
    format: string;
    scoreDifferenceIndicator: React.ReactNode;
};
