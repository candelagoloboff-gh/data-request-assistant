import IndividualSummaryCard from './index';
const meta = {
    component: IndividualSummaryCard,
    title: 'Composed Components/Audience/Cards/Summary/IndividualSummaryCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Summary card variant for individual collaborator selections. Displays a users icon with a fixed translated title and a caller-supplied description listing the selected people.',
            },
        },
    },
    argTypes: {
        description: {
            description: 'Comma-separated list of selected collaborator names shown below the title.',
            table: {
                type: { summary: 'string' },
            },
            control: { type: 'text' },
        },
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
        description: 'Agustina Ini, Guido Princ',
        onEdit: () => alert('[IndividualSummaryCard] onEdit'),
        onDelete: () => alert('[IndividualSummaryCard] onDelete'),
    },
};
export default meta;
export const Default = {
    args: {},
};
