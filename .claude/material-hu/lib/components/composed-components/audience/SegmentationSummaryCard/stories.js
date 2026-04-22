import SegmentationSummaryCard from './index';
const meta = {
    component: SegmentationSummaryCard,
    title: 'Composed Components/Audience/Cards/Summary/SegmentationSummaryCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Summary card variant for segmentation-based audience selections. Displays a group icon with a fixed translated title and a caller-supplied description of the applied segmentation rules.',
            },
        },
    },
    argTypes: {
        description: {
            description: 'Human-readable summary of the segmentation rules applied to the audience.',
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
        description: 'País: México / Área: Operaciones / Sede: OaxacaPaís: México / Área: Operaciones / Sede: OaxacaPaís: México / Área: Operaciones / Sede: OaxacaPaís: México / Área: Operaciones / Sede: OaxacaPaís: México / País: México / Área: Operaciones / Sede: OaxacaPaís: México / Área: Operaciones, + 35',
        onEdit: () => alert('[SegmentationSummaryCard] onEdit'),
        onDelete: () => alert('[SegmentationSummaryCard] onDelete'),
    },
};
export default meta;
export const Default = {
    args: {},
};
