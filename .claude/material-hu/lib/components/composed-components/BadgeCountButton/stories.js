import BadgeCountButton from '.';
const meta = {
    component: BadgeCountButton,
    title: 'Composed Components/BadgeCountButton',
    tags: ['autodocs'],
    args: {
        children: 'Filter',
        count: 4,
        buttonProps: {
            variant: 'secondary',
            size: 'small',
            onClick: () => alert('click on button'),
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
