import NavigableLabelTicks from '.';
const meta = {
    title: 'Composed Components/peopleExperience/NavigableLabelTicks',
    component: NavigableLabelTicks,
    args: {
        items: [
            { title: 'Promoters', description: '9-10 scores' },
            { title: 'Neutrals', description: '7-8 scores' },
            { title: 'Detractors', description: '0-6 scores' },
        ],
    },
};
export default meta;
export const Default = {
    args: {
        items: [
            { title: 'Promoters', description: '9-10 scores', highlighted: true },
            { title: 'Neutrals', description: '7-8 scores' },
            { title: 'Detractors', description: '0-6 scores' },
        ],
    },
};
export const WithHighlighted = {
    args: {
        items: [
            { title: 'Promoters', description: '9-10 scores', highlighted: true },
            { title: 'Neutrals', description: '7-8 scores', highlighted: false },
            { title: 'Detractors', description: '0-6 scores', highlighted: false },
        ],
    },
};
export const WithClickableItems = {
    args: {
        items: [
            {
                title: 'Promoters',
                description: '9-10 scores',
                onClick: () => alert('Promoters clicked!'),
            },
            {
                title: 'Neutrals',
                description: '7-8 scores',
                onClick: () => alert('Neutrals clicked!'),
                highlighted: true,
            },
            {
                title: 'Detractors',
                description: '0-6 scores',
                onClick: () => alert('Detractors clicked!'),
            },
        ],
    },
};
export const WithoutTitles = {
    args: {
        items: [
            { description: 'High satisfaction range' },
            { description: 'Medium satisfaction range' },
            { description: 'Low satisfaction range' },
        ],
    },
};
export const Mixed = {
    args: {
        items: [
            {
                title: 'Promoters',
                description: '9-10 scores',
                onClick: () => alert('Promoters clicked!'),
            },
            { title: 'Neutrals', description: '7-8 scores' },
            { description: 'Low satisfaction range' },
        ],
    },
};
export const TwoItems = {
    args: {
        items: [
            { title: 'Satisfied', description: 'Positive responses' },
            { title: 'Dissatisfied', description: 'Negative responses' },
        ],
    },
};
export const SingleItem = {
    args: {
        items: [{ title: 'Total Responses', description: '1,234 participants' }],
    },
};
export const LongDescriptions = {
    args: {
        items: [
            {
                title: 'Promoters',
                description: 'Users who rated 9-10 and are likely to recommend',
            },
            {
                title: 'Neutrals',
                description: 'Users who rated 7-8 and are satisfied but not enthusiastic',
            },
            {
                title: 'Detractors',
                description: 'Users who rated 0-6 and may spread negative feedback',
            },
        ],
    },
};
export const ClickableLongDescriptions = {
    args: {
        items: [
            {
                title: 'Promoters',
                description: 'Users who rated 9-10 and are likely to recommend',
                onClick: () => alert('View promoter details'),
            },
            {
                title: 'Neutrals',
                description: 'Users who rated 7-8 and are satisfied but not enthusiastic',
                onClick: () => alert('View neutral details'),
            },
            {
                title: 'Detractors',
                description: 'Users who rated 0-6 and may spread negative feedback',
                onClick: () => alert('View detractor details'),
            },
        ],
    },
};
