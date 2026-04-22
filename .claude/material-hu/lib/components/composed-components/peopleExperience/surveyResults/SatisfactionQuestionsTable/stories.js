import SatisfactionQuestionsTable from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SatisfactionQuestionsTable',
    component: SatisfactionQuestionsTable,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        questionsHeading: {
            control: 'text',
            description: 'Heading for the questions column',
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
        questionsCount: {
            control: 'number',
            description: 'Total count of questions to display in heading',
        },
        noAnswerLabel: {
            control: 'text',
            description: 'Label shown when question has no answers',
        },
        openCommentLabel: {
            control: 'text',
            description: 'Label for open comment questions',
        },
        noScoreMessage: {
            control: 'text',
            description: 'Tooltip message when score is not available',
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
// Sample data for LIKERT questions
const sampleLikertQuestions = [
    {
        id: 1,
        statement: 'How satisfied are you with your work environment?',
        topicLabel: 'Work Environment',
        answersLabel: '150 answers',
        commentsLabel: '12 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 8.5,
        scoreDifference: null,
        baseScore: null,
        promoters: 65,
        detractors: 10,
        neutrals: 25,
    },
    {
        id: 2,
        statement: 'Do you feel valued by your team?',
        topicLabel: 'Team Culture',
        answersLabel: '145 answers',
        commentsLabel: '8 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 7.2,
        scoreDifference: null,
        baseScore: null,
        promoters: 45,
        detractors: 20,
        neutrals: 35,
    },
    {
        id: 3,
        statement: 'How would you rate the communication in your department?',
        topicLabel: 'Communication',
        answersLabel: '8 answers',
        commentsLabel: '2 comments',
        type: 'LIKERT',
        hasThresholdPassed: false,
        score: null,
        scoreDifference: null,
        baseScore: null,
        promoters: 0,
        detractors: 0,
        neutrals: 0,
    },
];
// Sample data with score differences
const sampleQuestionsWithDifference = [
    {
        id: 1,
        statement: 'How satisfied are you with your work environment?',
        topicLabel: 'Work Environment',
        answersLabel: '150 answers',
        commentsLabel: '12 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 8.5,
        scoreDifference: 1.2,
        baseScore: 7.3,
        promoters: 65,
        detractors: 10,
        neutrals: 25,
    },
    {
        id: 2,
        statement: 'Do you feel valued by your team?',
        topicLabel: 'Team Culture',
        answersLabel: '145 answers',
        commentsLabel: '8 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 7.2,
        scoreDifference: -0.5,
        baseScore: 7.7,
        promoters: 45,
        detractors: 20,
        neutrals: 35,
    },
    {
        id: 3,
        statement: 'How would you rate the leadership in your organization?',
        topicLabel: 'Leadership',
        answersLabel: '138 answers',
        commentsLabel: '15 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 6.8,
        scoreDifference: 0.3,
        baseScore: 6.5,
        promoters: 40,
        detractors: 25,
        neutrals: 35,
    },
];
// Sample data with mixed question types
const sampleMixedQuestions = [
    {
        id: 1,
        statement: 'How satisfied are you with your work environment?',
        topicLabel: 'Work Environment',
        answersLabel: '150 answers',
        commentsLabel: '12 comments',
        type: 'LIKERT',
        hasThresholdPassed: true,
        score: 8.5,
        scoreDifference: null,
        baseScore: null,
        promoters: 65,
        detractors: 10,
        neutrals: 25,
    },
    {
        id: 2,
        statement: 'What improvements would you suggest?',
        topicLabel: 'Feedback',
        answersLabel: '89 answers',
        commentsLabel: '89 comments',
        type: 'TEXT',
        hasThresholdPassed: true,
        score: null,
        scoreDifference: null,
        baseScore: null,
    },
    {
        id: 3,
        statement: 'Which benefit is most important to you?',
        topicLabel: 'Benefits',
        answersLabel: '142 answers',
        commentsLabel: '5 comments',
        type: 'SELECT',
        hasThresholdPassed: true,
        score: null,
        scoreDifference: null,
        baseScore: null,
        scorePercentage: 68,
        answer: 'Health Insurance',
    },
    {
        id: 4,
        statement: 'Do you have access to the tools you need?',
        topicLabel: 'Resources',
        answersLabel: '7 answers',
        commentsLabel: '1 comment',
        type: 'LIKERT',
        hasThresholdPassed: false,
        score: null,
        scoreDifference: null,
        baseScore: null,
        promoters: 0,
        detractors: 0,
        neutrals: 0,
    },
];
export const Default = {
    args: {
        questions: sampleLikertQuestions,
        questionsCount: 3,
        questionsHeading: 'Questions',
        distributionHeading: 'Distribution',
        scoreHeading: 'Score',
        scoreDifferenceHeading: 'Difference',
        noAnswerLabel: 'No answers',
        openCommentLabel: 'Open comment',
        tooltipLabels: {
            promoters: 'Promoters',
            detractors: 'Detractors',
            neutrals: 'Neutrals',
        },
        noScoreMessage: 'Score not available for this question type',
        onRowClick: row => alert(`Clicked on question: ${row.statement}`),
        loading: false,
        differenceIndicatorMeta: {
            scoreLabel: 'Current Score',
            baseScoreLabel: 'Previous Score',
            footerLabel: 'Compared to previous period',
            getScoreDifferenceDescription: row => {
                if (row.type === 'LIKERT' && row.scoreDifference !== null) {
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
        questions: sampleQuestionsWithDifference,
        questionsCount: 3,
    },
};
export const MixedQuestionTypes = {
    args: {
        ...Default.args,
        questions: sampleMixedQuestions,
        questionsCount: 4,
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
        questions: [],
        questionsCount: 0,
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
        questionsHeading: 'Survey Items',
        distributionHeading: 'Response Distribution',
        scoreHeading: 'NPS Score',
        scoreDifferenceHeading: 'Change',
        noAnswerLabel: 'Insufficient responses',
        openCommentLabel: 'Text response',
        tooltipLabels: {
            promoters: 'Highly Satisfied',
            detractors: 'Dissatisfied',
            neutrals: 'Neutral',
        },
        noScoreMessage: 'This question type does not have a numerical score',
    },
};
