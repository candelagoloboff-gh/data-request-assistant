import { jsx as _jsx } from "react/jsx-runtime";
import RadioBase from '.';
export default {
    title: 'Design System/Radio Button/RadioBase',
    tags: ['autodocs'],
    component: RadioBase,
    argTypes: {
        error: {
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        checked: {
            control: {
                type: 'boolean',
            },
        },
    },
};
const Template = args => _jsx(RadioBase, { ...args });
export const ErrorState = Template.bind({});
ErrorState.args = {
    error: true,
};
export const DisabledState = Template.bind({});
DisabledState.args = {
    disabled: true,
};
export const ActiveDisabled = Template.bind({});
ActiveDisabled.args = {
    checked: true,
    disabled: true,
};
