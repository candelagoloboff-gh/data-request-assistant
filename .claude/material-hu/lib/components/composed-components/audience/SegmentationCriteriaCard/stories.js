import SegmentationCriteriaCard from './index';
const meta = {
    component: SegmentationCriteriaCard,
    title: 'Composed Components/Audience/Cards/Criteria/SegmentationCriteriaCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Criteria card variant for selecting audiences by segmentation groups. Renders a group icon with a fixed translated title, description and an "automatic update" info pill. Clicking the card typically opens the segmentation group selection flow.',
            },
        },
    },
    argTypes: {
        onClick: {
            description: 'Callback fired when the card is clicked. Typically opens the segmentation group selection flow.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        withArrow: {
            description: 'When `true`, renders a chevron arrow on the right side of the card.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root container.',
            control: false,
            table: {
                type: { summary: 'SxProps' },
            },
        },
    },
    args: {
        onClick: () => alert('[SegmentationCriteriaCard] onClick'),
    },
};
export default meta;
export const Default = {
    args: {},
};
