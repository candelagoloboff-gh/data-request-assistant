import { jsx as _jsx } from "react/jsx-runtime";
import ScoreDifferenceIndicator from '../../../../peopleExperience/surveyResults/ScoreDifferenceIndicator';
import DistributionStats from '.';
const meta = {
    title: 'Composed Components/peopleExperience/DistributionStats',
    component: DistributionStats,
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'NPS Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '70%' },
            { type: 'neutral', title: 'Neutrals', value: '20%' },
            { type: 'detractor', title: 'Detractors', value: '10%' },
        ],
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Net Promoter Score Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '70%' },
            { type: 'neutral', title: 'Neutrals', value: '20%' },
            { type: 'detractor', title: 'Detractors', value: '10%' },
        ],
    },
};
export const ExcellentScore = {
    args: {
        title: 'Customer Loyalty Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '85%' },
            { type: 'neutral', title: 'Neutrals', value: '13%' },
            { type: 'detractor', title: 'Detractors', value: '2%' },
        ],
    },
};
export const PoorScore = {
    args: {
        title: 'Employee Satisfaction Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '20%' },
            { type: 'neutral', title: 'Neutrals', value: '20%' },
            { type: 'detractor', title: 'Detractors', value: '60%' },
        ],
    },
};
export const Balanced = {
    args: {
        title: 'Balanced Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '33%' },
            { type: 'neutral', title: 'Neutrals', value: '34%' },
            { type: 'detractor', title: 'Detractors', value: '33%' },
        ],
    },
};
export const NoResponses = {
    args: {
        title: 'Survey Results Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '0%' },
            { type: 'neutral', title: 'Neutrals', value: '0%' },
            { type: 'detractor', title: 'Detractors', value: '0%' },
        ],
    },
};
export const HighNeutrals = {
    args: {
        title: 'Neutral-Heavy Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '25%' },
            { type: 'neutral', title: 'Neutrals', value: '60%' },
            { type: 'detractor', title: 'Detractors', value: '15%' },
        ],
    },
};
export const LowDetractors = {
    args: {
        title: 'Strong Performance Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '75%' },
            { type: 'neutral', title: 'Neutrals', value: '22%' },
            { type: 'detractor', title: 'Detractors', value: '3%' },
        ],
    },
};
export const ModeratePerformance = {
    args: {
        title: 'Moderate Distribution',
        stats: [
            { type: 'promoter', title: 'Promoters', value: '55%' },
            { type: 'neutral', title: 'Neutrals', value: '30%' },
            { type: 'detractor', title: 'Detractors', value: '15%' },
        ],
    },
};
export const WithPositiveDifferences = {
    args: {
        title: 'Improving Performance',
        stats: [
            {
                type: 'promoter',
                title: 'Promoters',
                value: '75%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 10, popoverMeta: {
                        score: 75,
                        baseScore: 65,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '+10% vs previous period',
                    } })),
            },
            {
                type: 'neutral',
                title: 'Neutrals',
                value: '20%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 5, popoverMeta: {
                        score: 20,
                        baseScore: 15,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '+5% vs previous period',
                    } })),
            },
            {
                type: 'detractor',
                title: 'Detractors',
                value: '5%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 2, popoverMeta: {
                        score: 5,
                        baseScore: 3,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '+2% vs previous period',
                    } })),
            },
        ],
    },
};
export const WithNegativeDifferences = {
    args: {
        title: 'Declining Performance',
        stats: [
            {
                type: 'promoter',
                title: 'Promoters',
                value: '55%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -8, popoverMeta: {
                        score: 55,
                        baseScore: 63,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '-8% vs previous period',
                    } })),
            },
            {
                type: 'neutral',
                title: 'Neutrals',
                value: '30%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -3, popoverMeta: {
                        score: 30,
                        baseScore: 33,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '-3% vs previous period',
                    } })),
            },
            {
                type: 'detractor',
                title: 'Detractors',
                value: '15%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -5, popoverMeta: {
                        score: 15,
                        baseScore: 20,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '-5% vs previous period',
                    } })),
            },
        ],
    },
};
export const WithMixedDifferences = {
    args: {
        title: 'Mixed Performance Changes',
        stats: [
            {
                type: 'promoter',
                title: 'Promoters',
                value: '70%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 5, popoverMeta: {
                        score: 70,
                        baseScore: 65,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '+5% vs previous period',
                    } })),
            },
            {
                type: 'neutral',
                title: 'Neutrals',
                value: '20%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -2, popoverMeta: {
                        score: 20,
                        baseScore: 22,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '-2% vs previous period',
                    } })),
            },
            {
                type: 'detractor',
                title: 'Detractors',
                value: '10%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 0, popoverMeta: {
                        score: 10,
                        baseScore: 10,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '0% vs previous period',
                    } })),
            },
        ],
    },
};
export const WithPartialDifferences = {
    args: {
        title: 'Partial Comparison Data',
        stats: [
            {
                type: 'promoter',
                title: 'Promoters',
                value: '65%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: 7, popoverMeta: {
                        score: 65,
                        baseScore: 58,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '+7% vs previous period',
                    } })),
            },
            { type: 'neutral', title: 'Neutrals', value: '25%' },
            {
                type: 'detractor',
                title: 'Detractors',
                value: '10%',
                differenceIndicator: (_jsx(ScoreDifferenceIndicator, { difference: -3, popoverMeta: {
                        score: 10,
                        baseScore: 13,
                        scorePostFix: '%',
                        scoreLabel: 'current period',
                        baseScoreLabel: 'previous period',
                        footerLabel: 'vs last quarter',
                        scoreDifferenceDescription: '-3% vs previous period',
                    } })),
            },
        ],
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
