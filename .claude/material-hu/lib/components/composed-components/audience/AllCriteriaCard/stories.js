import AllCriteriaCard from './index';
const meta = {
    component: AllCriteriaCard,
    title: 'Composed Components/Audience/Cards/Criteria/AllCriteriaCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Criteria card variant for selecting the entire community. Renders a building icon with a fixed translated title, description and an "automatic update" info pill. Clicking the card typically navigates to the full-community audience configuration.',
            },
        },
    },
    argTypes: {
        onClick: {
            description: 'Callback fired when the card is clicked. Typically navigates to the full-community audience configuration.',
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
        onClick: () => alert('[AllCriteriaCard] onClick'),
    },
};
export default meta;
export const Default = {
    args: {},
};
