import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormInputSearch from './form';
import InputSearch from '.';
const meta = {
    component: InputSearch,
    title: 'Design System/Search',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['classic', 'custom'],
            table: { defaultValue: { summary: 'classic' } },
        },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        errorText: { control: 'text' },
        error: { control: 'boolean' },
        success: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        sx: { control: false },
    },
    args: {
        variant: 'classic',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Custom = {
    args: {
        variant: 'custom',
    },
};
export const Error = {
    args: {
        helperText: 'HelperText',
        errorText: 'Error text',
        value: 'value!',
        error: true,
    },
};
export const Success = {
    args: {
        helperText: 'HelperText',
        errorText: 'Error text',
        value: 'value!',
        success: true,
    },
};
export const Disabled = {
    args: {
        helperText: 'HelperText',
        errorText: 'Error text',
        disabled: true,
    },
};
export const FormSearchStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputSearch, { name: "myInput" }) }));
    },
};
