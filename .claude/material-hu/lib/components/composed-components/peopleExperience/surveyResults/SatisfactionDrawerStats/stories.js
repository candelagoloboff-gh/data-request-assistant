import { jsx as _jsx } from "react/jsx-runtime";
import ScoreDifferenceIndicator from '../ScoreDifferenceIndicator';
import SatisfactionDrawerStats from './index';
const meta = {
    title: 'Composed Components/People Experience/SatisfactionDrawerStats',
    component: SatisfactionDrawerStats,
    parameters: {
        layout: 'centered',
    },
    args: {
        score: 85,
        scoreDifferenceIndicator: null,
        answers: 1234,
        comments: 456,
        format: 'Likert Scale',
    },
};
export default meta;
export const Default = {
    args: {
        ...meta.args,
    },
};
export const WithCustomLabels = {
    args: {
        ...meta.args,
        scoreLabel: 'Puntuación',
        answersLabel: 'Respuestas',
        commentsLabel: 'Comentarios',
        formatLabel: 'Formato',
    },
};
export const LowNumbers = {
    args: {
        ...meta.args,
        score: 42,
        answers: 50,
        comments: 12,
        format: 'Multiple Choice',
    },
};
export const HighNumbers = {
    args: {
        ...meta.args,
        score: 98,
        answers: 12345,
        comments: 6789,
        format: 'Rating Scale',
    },
};
export const NoComments = {
    args: {
        ...meta.args,
        score: 75,
        answers: 500,
        comments: 0,
        format: 'Yes/No',
    },
};
export const VeryHighNumbers = {
    args: {
        ...meta.args,
        score: 100,
        answers: 1234567,
        comments: 987654,
        format: 'Open Text',
    },
};
export const NeutralScore = {
    args: {
        ...meta.args,
        score: 50,
        answers: 2500,
        comments: 350,
        format: 'Matrix',
    },
};
export const WithPositiveScoreDifference = {
    args: {
        ...meta.args,
        score: 78,
        scoreDifferenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 12, popoverMeta: {
                score: 78,
                baseScore: 66,
                scoreLabel: 'Current Score',
                baseScoreLabel: 'Previous Score',
                footerLabel: 'Comparison with previous period',
                scoreDifferenceDescription: 'The score increased by 12 points',
            } })),
        answers: 1500,
        comments: 320,
        format: 'Likert Scale',
    },
};
export const WithNegativeScoreDifference = {
    args: {
        ...meta.args,
        score: 65,
        scoreDifferenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -8, popoverMeta: {
                score: 65,
                baseScore: 73,
                scoreLabel: 'Current Score',
                baseScoreLabel: 'Previous Score',
                footerLabel: 'Comparison with previous period',
                scoreDifferenceDescription: 'The score decreased by 8 points',
            } })),
        answers: 2000,
        comments: 450,
        format: 'Rating Scale',
    },
};
export const WithZeroScoreDifference = {
    args: {
        ...meta.args,
        score: 72,
        scoreDifferenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 0, popoverMeta: {
                score: 72,
                baseScore: 72,
                scoreLabel: 'Current Score',
                baseScoreLabel: 'Previous Score',
                footerLabel: 'Comparison with previous period',
                scoreDifferenceDescription: 'The score remained the same',
            } })),
        answers: 1800,
        comments: 280,
        format: 'Multiple Choice',
    },
};
export const WithNullScoreDifference = {
    args: {
        ...meta.args,
        score: 68,
        scoreDifferenceIndicator: null,
        answers: 950,
        comments: 175,
        format: 'Open Text',
    },
};
