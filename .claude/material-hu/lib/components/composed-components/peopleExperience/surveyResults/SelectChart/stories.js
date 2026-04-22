import SelectChart from './index';
const meta = {
    title: 'Composed Components/People Experience/SelectChart',
    component: SelectChart,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: [
            { label: 'Option A', value: 45 },
            { label: 'Option B', value: 30 },
            { label: 'Option C', value: 15 },
            { label: 'Option D', value: 10 },
        ],
    },
};
export default meta;
export const Default = {
    args: {
        ...meta.args,
    },
};
export const FewOptions = {
    args: {
        data: [
            { label: 'Yes', value: 75 },
            { label: 'No', value: 25 },
        ],
    },
};
export const ManyOptions = {
    args: {
        data: [
            { label: 'Option 1', value: 12 },
            { label: 'Option 2', value: 10 },
            { label: 'Option 3', value: 9 },
            { label: 'Option 4', value: 8 },
            { label: 'Option 5', value: 7 },
            { label: 'Option 6', value: 6 },
            { label: 'Option 7', value: 6 },
            { label: 'Option 8', value: 5 },
            { label: 'Option 9', value: 5 },
            { label: 'Option 10', value: 5 },
            { label: 'Option 11', value: 4 },
            { label: 'Option 12', value: 4 },
            { label: 'Option 13', value: 4 },
            { label: 'Option 14', value: 4 },
            { label: 'Option 15', value: 3 },
            { label: 'Option 16', value: 3 },
            { label: 'Option 17', value: 3 },
            { label: 'Option 18', value: 2 },
        ],
    },
};
export const LongLabels = {
    args: {
        data: [
            {
                label: 'This is a very long label that should be truncated at 30 characters',
                value: 40,
            },
            {
                label: 'Another extremely long option label exceeding the maximum length',
                value: 30,
            },
            { label: 'Short label', value: 20 },
            { label: 'Medium length label here', value: 10 },
        ],
    },
};
export const WithSegmentClick = {
    args: {
        ...meta.args,
        onSegmentClick: (index) => alert(`Clicked segment index: ${index}`),
    },
};
export const WithFooter = {
    args: {
        ...meta.args,
        footer: 'Total responses: 100',
    },
};
