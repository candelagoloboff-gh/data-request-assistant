import AllSummaryCard from './index';
const meta = {
    component: AllSummaryCard,
    title: 'Composed Components/Audience/Cards/Summary/AllSummaryCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Summary card variant for the "all community" audience selection. Displays a building icon with a fixed translated title and description, requiring only edit and delete callbacks.',
            },
        },
    },
    argTypes: {
        onEdit: {
            description: 'Callback fired when the edit button is clicked. If omitted the button is not rendered.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        onDelete: {
            description: 'Callback fired when the delete button is clicked. If omitted the button is not rendered.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
    },
    args: {
        onEdit: () => alert('[AllSummaryCard] onEdit'),
        onDelete: () => alert('[AllSummaryCard] onDelete'),
    },
};
export default meta;
export const Default = {
    args: {},
};
