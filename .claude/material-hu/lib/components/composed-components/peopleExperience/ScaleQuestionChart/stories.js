import ScaleQuestionChart from '.';
const meta = {
    component: ScaleQuestionChart,
    title: 'Composed Components/peopleExperience/ScaleQuestionChart',
    tags: ['autodocs'],
    args: {
        data: [
            { label: 'Positive', value: 70, type: 'POSITIVE' },
            { label: 'Neutral', value: 20, type: 'NEUTRAL' },
            { label: 'Negative', value: 10, type: 'NEGATIVE' },
        ],
        onSelectItem: (item) => {
            // eslint-disable-next-line no-console
            console.log('Selected item:', item);
        },
        helperText: 'This is a helper text',
        noDataText: 'No data available',
    },
};
export default meta;
export const Default = {};
export const EmptyResults = {
    args: {
        data: undefined,
    },
};
