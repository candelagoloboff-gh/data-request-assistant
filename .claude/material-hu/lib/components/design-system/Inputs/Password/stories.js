import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormInputPassword from './form';
import InputPassword from '.';
const meta = {
    component: InputPassword,
    title: 'Design System/Inputs/Password',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        errorText: { control: 'text' },
        labelTooltip: { control: 'text' },
        error: { control: 'boolean' },
        success: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        hasCounter: { control: 'boolean' },
        hideErrorText: { control: 'boolean' },
        startAdornment: { control: false },
        onKeyDown: { control: false },
        onBlur: { control: false },
        slotProps: { control: false },
        sx: { control: false },
    },
    args: {
        value: 'value!',
    },
};
export default meta;
export const NoLabel = {
    args: {
        placeholder: 'Placeholder',
    },
};
export const DefaultWithHelper = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper',
    },
};
export const InputSmall = {
    args: {
        placeholder: 'Placeholder',
        size: 'small',
    },
};
export const Error = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        value: 'value!',
        error: true,
    },
};
export const Success = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        value: 'value!',
        success: true,
    },
};
export const Disabled = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        value: 'value!',
        disabled: true,
    },
};
export const FormInputPasswordStory = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        value: 'value!',
        disabled: false,
        error: false,
    },
    render: args => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
            mode: 'onChange',
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputPassword, { inputProps: {
                    placeholder: args.placeholder,
                    label: args.label,
                    helperText: args.helperText,
                    hasCounter: args.hasCounter,
                    errorText: args.errorText,
                    disabled: args.disabled,
                }, rules: { required: true }, name: "myInput" }) }));
    },
};
