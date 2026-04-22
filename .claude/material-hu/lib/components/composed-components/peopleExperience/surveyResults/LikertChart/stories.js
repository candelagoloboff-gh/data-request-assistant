import { SentimentType } from './types';
import LikertChart from './index';
const meta = {
    title: 'Composed Components/People Experience/LikertChart',
    component: LikertChart,
    parameters: {
        layout: 'centered',
    },
    args: {
        data: [
            {
                label: 'Strongly Agree',
                percentage: 45,
                sentimentType: SentimentType.POSITIVE,
            },
            { label: 'Agree', percentage: 30, sentimentType: SentimentType.POSITIVE },
            {
                label: 'Neutral',
                percentage: 15,
                sentimentType: SentimentType.NEUTRAL,
            },
            {
                label: 'Disagree',
                percentage: 8,
                sentimentType: SentimentType.NEGATIVE,
            },
            {
                label: 'Strongly Disagree',
                percentage: 2,
                sentimentType: SentimentType.NEGATIVE,
            },
        ],
    },
};
export default meta;
export const Default = {
    args: {
        ...meta.args,
    },
};
export const AllPositive = {
    args: {
        data: [
            {
                label: 'Excellent',
                percentage: 60,
                sentimentType: SentimentType.POSITIVE,
            },
            {
                label: 'Very Good',
                percentage: 30,
                sentimentType: SentimentType.POSITIVE,
            },
            { label: 'Good', percentage: 10, sentimentType: SentimentType.POSITIVE },
        ],
    },
};
export const AllNegative = {
    args: {
        data: [
            { label: 'Poor', percentage: 50, sentimentType: SentimentType.NEGATIVE },
            {
                label: 'Very Poor',
                percentage: 35,
                sentimentType: SentimentType.NEGATIVE,
            },
            {
                label: 'Terrible',
                percentage: 15,
                sentimentType: SentimentType.NEGATIVE,
            },
        ],
    },
};
export const Balanced = {
    args: {
        data: [
            {
                label: 'Positive Response',
                percentage: 33,
                sentimentType: SentimentType.POSITIVE,
            },
            {
                label: 'Neutral Response',
                percentage: 34,
                sentimentType: SentimentType.NEUTRAL,
            },
            {
                label: 'Negative Response',
                percentage: 33,
                sentimentType: SentimentType.NEGATIVE,
            },
        ],
    },
};
export const NPSScale = {
    args: {
        data: [
            {
                label: 'Promoters (9-10)',
                percentage: 50,
                sentimentType: SentimentType.POSITIVE,
            },
            {
                label: 'Passives (7-8)',
                percentage: 30,
                sentimentType: SentimentType.NEUTRAL,
            },
            {
                label: 'Detractors (0-6)',
                percentage: 20,
                sentimentType: SentimentType.NEGATIVE,
            },
        ],
    },
};
export const CustomCardStyle = {
    args: {
        ...meta.args,
        slotProps: {
            cardContainer: {
                color: 'white',
                sx: { border: '2px solid #1976d2' },
            },
        },
    },
};
export const CustomStackStyle = {
    args: {
        ...meta.args,
        slotProps: {
            stack: {
                sx: { maxHeight: 300 },
            },
        },
    },
};
export const WithBarClick = {
    args: {
        ...meta.args,
        onBarClick: (index) => alert(`Clicked bar index: ${index}`),
    },
};
export const WithFooter = {
    args: {
        ...meta.args,
        footer: 'Total responses: 100',
    },
};
