import Toggle from '.';
const meta = {
    component: Toggle,
    title: 'Design System/Switches/Toggle',
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        onChange: { control: false },
    },
    args: {
        disabled: false,
    },
};
export default meta;
export const Default = {
    args: { disabled: false },
};
export const Disabled = {
    args: { disabled: true },
};
export const CheckedDisabled = {
    args: { disabled: true, checked: true },
};
export const UncheckedDisabled = {
    args: { disabled: true, checked: false },
};
