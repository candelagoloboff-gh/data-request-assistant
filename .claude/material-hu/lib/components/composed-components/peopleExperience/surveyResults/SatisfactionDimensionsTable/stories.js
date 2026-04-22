import SatisfactionDimensionsTable from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SatisfactionDimensionsTable',
    component: SatisfactionDimensionsTable,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        dimensionsHeading: {
            control: 'text',
            description: 'Heading for the dimensions column',
        },
        distributionHeading: {
            control: 'text',
            description: 'Heading for the distribution column',
        },
        scoreHeading: {
            control: 'text',
            description: 'Heading for the score column',
        },
        scoreDifferenceHeading: {
            control: 'text',
            description: 'Heading for the score difference column',
        },
        dimensionsCount: {
            control: 'number',
            description: 'Total count of dimensions to display in heading',
        },
        noAnswerLabel: {
            control: 'text',
            description: 'Label shown when dimension has no answers',
        },
        noQuestionsLabel: {
            control: 'text',
            description: 'Label shown when dimension has no questions',
        },
        loading: {
            control: 'boolean',
            description: 'Shows loading skeleton when true',
        },
        getTooltipTitle: {
            description: 'Optional function to customize tooltip text for NPS chart segments. Receives the segment key and value. Falls back to `tooltipLabels` when not provided.',
        },
    },
};
export default meta;
const sampleDimensions = [
    {
        id: 1,
        name: 'Work Environment',
        questionsLabel: '5 questions',
        score: 8.2,
        scoreDifference: null,
        baseScore: null,
        hasThresholdPassed: true,
        promoters: 60,
        detractors: 10,
        neutrals: 30,
        hasQuestions: true,
    },
    {
        id: 2,
        name: 'Team Culture',
        questionsLabel: '4 questions',
        score: 7.5,
        scoreDifference: null,
        baseScore: null,
        hasThresholdPassed: true,
        promoters: 52,
        detractors: 18,
        neutrals: 30,
        hasQuestions: true,
    },
    {
        id: 3,
        name: 'Career Growth',
        questionsLabel: '3 questions',
        score: null,
        scoreDifference: null,
        baseScore: null,
        hasThresholdPassed: false,
        promoters: 0,
        detractors: 0,
        neutrals: 0,
        hasQuestions: true,
    },
];
const sampleDimensionsWithDifference = [
    {
        id: 1,
        name: 'Work Environment',
        questionsLabel: '5 questions',
        score: 8.2,
        scoreDifference: 1.2,
        baseScore: 7.0,
        hasThresholdPassed: true,
        promoters: 60,
        detractors: 10,
        neutrals: 30,
        hasQuestions: true,
    },
    {
        id: 2,
        name: 'Team Culture',
        questionsLabel: '4 questions',
        score: 7.5,
        scoreDifference: -0.5,
        baseScore: 8.0,
        hasThresholdPassed: true,
        promoters: 52,
        detractors: 18,
        neutrals: 30,
        hasQuestions: true,
    },
    {
        id: 3,
        name: 'Career Growth',
        questionsLabel: '6 questions',
        score: 6.8,
        scoreDifference: 0.3,
        baseScore: 6.5,
        hasThresholdPassed: true,
        promoters: 40,
        detractors: 25,
        neutrals: 35,
        hasQuestions: true,
    },
    {
        id: 4,
        name: 'Leadership',
        questionsLabel: '0 questions',
        score: null,
        scoreDifference: null,
        baseScore: null,
        hasThresholdPassed: true,
        promoters: 0,
        detractors: 0,
        neutrals: 0,
        hasQuestions: false,
    },
    {
        id: 5,
        name: 'Communication',
        questionsLabel: '3 questions',
        score: null,
        scoreDifference: null,
        baseScore: null,
        hasThresholdPassed: false,
        promoters: 0,
        detractors: 0,
        neutrals: 0,
        hasQuestions: true,
    },
];
export const Default = {
    args: {
        dimensions: sampleDimensions,
        dimensionsCount: 3,
        dimensionsHeading: 'Dimensions',
        distributionHeading: 'Distribution',
        scoreHeading: 'Score',
        scoreDifferenceHeading: 'Difference',
        noAnswerLabel: 'No answers',
        noQuestionsLabel: 'No scored questions',
        tooltipLabels: {
            promoters: 'Promoters',
            detractors: 'Detractors',
            neutrals: 'Neutrals',
        },
        onClickRow: row => alert(`Clicked on dimension: ${row.name}`),
        loading: false,
        differenceIndicatorMeta: {
            scoreLabel: 'Current Score',
            baseScoreLabel: 'Previous Score',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: row => {
                if (row.scoreDifference !== null) {
                    if (row.scoreDifference === 0)
                        return 'Scores are equal';
                    const direction = row.scoreDifference > 0 ? 'increased' : 'decreased';
                    return `Score ${direction} by ${Math.abs(row.scoreDifference)} points`;
                }
                return null;
            },
        },
    },
};
export const WithScoreDifferences = {
    args: {
        ...Default.args,
        dimensions: sampleDimensionsWithDifference,
        dimensionsCount: 5,
    },
};
export const Loading = {
    args: {
        ...Default.args,
        loading: true,
    },
};
export const EmptyState = {
    args: {
        ...Default.args,
        dimensions: [],
        dimensionsCount: 0,
    },
};
export const CustomTooltipTitle = {
    args: {
        ...Default.args,
        getTooltipTitle: (key, value) => {
            const labels = {
                promoters: `😊 Promoters: ${value}%`,
                neutrals: `😐 Neutrals: ${value}%`,
                detractors: `😞 Detractors: ${value}%`,
            };
            return labels[key];
        },
    },
};
export const CustomLabels = {
    args: {
        ...Default.args,
        dimensionsHeading: 'Survey Dimensions',
        distributionHeading: 'Response Distribution',
        scoreHeading: 'NPS Score',
        scoreDifferenceHeading: 'Change',
        noAnswerLabel: 'Insufficient responses',
        noQuestionsLabel: 'No questions with score',
        tooltipLabels: {
            promoters: 'Highly Satisfied',
            detractors: 'Dissatisfied',
            neutrals: 'Neutral',
        },
    },
};
