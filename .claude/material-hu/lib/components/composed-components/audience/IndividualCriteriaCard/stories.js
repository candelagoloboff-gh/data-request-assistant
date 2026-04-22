import IndividualCriteriaCard from './index';
const meta = {
    component: IndividualCriteriaCard,
    title: 'Composed Components/Audience/Cards/Criteria/IndividualCriteriaCard',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Criteria card variant for selecting specific collaborators. Renders a users icon with a fixed translated title and description. Clicking the card typically opens the individual collaborator selection flow.',
            },
        },
    },
    argTypes: {
        onClick: {
            description: 'Callback fired when the card is clicked. Typically opens the individual collaborator selection flow.',
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
        onClick: () => alert('[IndividualCriteriaCard] onClick'),
    },
};
export default meta;
export const Default = {
    args: {},
};
