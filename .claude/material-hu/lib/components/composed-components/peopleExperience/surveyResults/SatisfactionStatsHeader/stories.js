import SatisfactionStatsHeader from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SatisfactionStatsHeader',
    component: SatisfactionStatsHeader,
    parameters: {
        layout: 'centered',
    },
    args: {
        chartMeta: {
            title: 'NPS distribution',
            description: 'Distribution of promoters, detractors, and neutrals.',
            promoters: 70,
            detractors: 10,
            neutrals: 20,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: '',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
    },
};
export default meta;
const labels = {
    promoters: 'Promoters',
    detractors: 'Detractors',
    neutrals: 'Neutrals',
};
export const Default = {
    args: {
        title: 'Net Promoter Score',
        score: 65,
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: 'Good',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const PoorScore = {
    args: {
        title: 'Employee Satisfaction',
        score: 35,
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: 'Poor',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
        chartMeta: {
            title: 'Satisfaction breakdown',
            description: 'More detractors than promoters.',
            promoters: 20,
            detractors: 60,
            neutrals: 20,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const ExcellentScore = {
    args: {
        title: 'Customer Loyalty',
        score: 90,
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: 'Excellent',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
        chartMeta: {
            title: 'Loyalty index',
            description: 'High number of promoters and almost no detractors.',
            neutrals: 13,
            promoters: 85,
            detractors: 2,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const NoResponses = {
    args: {
        title: 'Survey Results',
        score: 0,
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: 'No Data',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
        chartMeta: {
            title: 'No responses',
            description: 'No promoters, detractors, or neutrals recorded.',
            promoters: 0,
            detractors: 0,
            neutrals: 0,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const WithPositiveScoreDifference = {
    args: {
        title: 'Net Promoter Score',
        score: 72,
        differenceIndicatorMeta: {
            baseScore: 64,
            scoreDifference: 8,
            scoreLabel: 'Good',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return `Increased by ${score} points`;
                if (score < 0)
                    return `Decreased by ${Math.abs(score)} points`;
                return 'No change';
            },
        },
        chartMeta: {
            title: 'NPS distribution',
            description: 'Improved performance from last period.',
            promoters: 75,
            detractors: 8,
            neutrals: 17,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const WithNegativeScoreDifference = {
    args: {
        title: 'Employee Satisfaction',
        score: 58,
        differenceIndicatorMeta: {
            baseScore: 70,
            scoreDifference: -12,
            scoreLabel: 'Fair',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return `Increased by ${score} points`;
                if (score < 0)
                    return `Decreased by ${Math.abs(score)} points`;
                return 'No change';
            },
        },
        chartMeta: {
            title: 'Satisfaction breakdown',
            description: 'Declined performance from last period.',
            promoters: 45,
            detractors: 30,
            neutrals: 25,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const WithZeroScoreDifference = {
    args: {
        title: 'Customer Loyalty',
        score: 65,
        differenceIndicatorMeta: {
            baseScore: 65,
            scoreDifference: 0,
            scoreLabel: 'Good',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return `Increased by ${score} points`;
                if (score < 0)
                    return `Decreased by ${Math.abs(score)} points`;
                return 'No change from previous period';
            },
        },
        chartMeta: {
            title: 'Loyalty index',
            description: 'No change from last period.',
            promoters: 70,
            detractors: 10,
            neutrals: 20,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export const WithNullScoreDifference = {
    args: {
        title: 'Survey Results',
        score: 68,
        differenceIndicatorMeta: {
            baseScore: null,
            scoreDifference: null,
            scoreLabel: 'Good',
            baseScoreLabel: 'Previous period',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: (score) => {
                if (score > 0)
                    return 'Improvement';
                if (score < 0)
                    return 'Decline';
                return 'No change';
            },
        },
        chartMeta: {
            title: 'Survey distribution',
            description: 'No previous data for comparison.',
            promoters: 72,
            detractors: 12,
            neutrals: 16,
            getTooltipTitle: (key, value) => `${labels[key]}: ${value}`,
        },
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
