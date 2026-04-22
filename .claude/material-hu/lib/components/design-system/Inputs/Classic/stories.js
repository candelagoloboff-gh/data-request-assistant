import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Stack, Typography } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import FormInputClassic from './form';
import InputClassic from '.';
const meta = {
    component: InputClassic,
    title: 'Design System/Inputs/Classic',
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
        hasHelperBullet: { control: 'boolean' },
        hideErrorText: { control: 'boolean' },
        showClear: { control: 'boolean' },
        startAdormentPosition: {
            control: 'radio',
            options: ['start', 'center', 'end'],
        },
        startAdornment: { control: false },
        transform: { control: false },
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
export const LongError = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Long error text to test styles',
        value: 'value!',
        error: true,
        fullWidth: false,
        sx: { width: '200px' },
    },
};
export const ErrorNoHelperText = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        hideErrorText: true,
        errorText: 'Error text',
        value: 'value!',
        error: true,
        fullWidth: false,
        sx: { width: '200px' },
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
export const WithBullet = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Rule helper text',
        hasHelperBullet: true,
    },
};
export const WithLabelTooltip = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        labelTooltip: 'This is a tooltip for the label',
        slotProps: {
            labelTooltip: {
                placement: 'top',
                arrow: true,
            },
        },
    },
};
export const FormInputClassicStory = {
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
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: args.placeholder,
                    label: args.label,
                    helperText: args.helperText,
                    hasCounter: args.hasCounter,
                    errorText: args.errorText,
                    disabled: args.disabled,
                    autoComplete: 'email',
                    type: 'email',
                }, rules: { required: true }, name: "myInput" }) }));
    },
};
export const FormInputClassicErrorStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'Helper text',
                    error: true,
                    errorText: 'Custom error message',
                }, name: "myInput" }) }));
    },
};
export const FormInputSmallStory = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        errorText: 'Error text',
        value: 'value!',
        disabled: false,
        error: false,
        size: 'small',
    },
    render: args => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
            mode: 'onChange',
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: args.placeholder,
                    label: args.label,
                    helperText: args.helperText,
                    hasCounter: args.hasCounter,
                    errorText: args.errorText,
                    disabled: args.disabled,
                    size: args.size,
                }, rules: { required: true }, name: "myInput" }) }));
    },
};
export const FormInputClassicMultilineStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'Helper text',
                    hasCounter: true,
                    multiline: true,
                }, name: "myInput" }) }));
    },
};
export const FormInputClassicWithStartAdorment = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'Helper text',
                    startAdornment: _jsx(IconSearch, {}),
                }, name: "myInput" }) }));
    },
};
export const FormInputClassicWithStartAdormentMultiline = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'Helper text',
                    multiline: true,
                    showClear: false,
                    minRows: 1,
                    maxRows: 5,
                    startAdormentPosition: 'end',
                    startAdornment: _jsx(IconSearch, {}),
                }, name: "myInput" }) }));
    },
};
export const FormInputClassicWithMask = {
    render: () => {
        const form = useForm({
            defaultValues: {
                unmaskedInput: '',
            },
        });
        const { watch } = form;
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormInputClassic, { inputProps: {
                            maxLength: 12,
                            transform: {
                                input: value => value.replace(/\s/g, ''),
                                output: value => {
                                    // Strip spaces first to avoid taking them as input
                                    const stripped = value.replace(/\s/g, '');
                                    return stripped.replace(/(.{4})(?=.)/g, '$1 ');
                                },
                            },
                        }, name: "unmaskedInput" }) }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) })] }));
    },
};
export const FormInputRename = {
    args: {
        placeholder: 'Placeholder',
        size: 'small',
        hasCounter: false,
    },
    render: args => {
        const [rename, setRename] = useState(false);
        const form = useForm({
            defaultValues: {
                name: args.value || '',
            },
            mode: 'onChange',
        });
        const handleSave = () => {
            setRename(false);
            form.setValue('name', form.getValues('name'));
        };
        return (_jsxs(_Fragment, { children: [rename && (_jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: {
                            alignItems: 'left',
                            gap: 2,
                        }, children: [_jsx(FormInputClassic, { inputProps: {
                                    placeholder: args.placeholder,
                                    label: args.label,
                                    helperText: args.helperText,
                                    hasCounter: args.hasCounter,
                                    errorText: args.errorText,
                                    disabled: args.disabled,
                                    size: args.size,
                                    onKeyDown: e => e.key === 'Enter' && handleSave(),
                                    onBlur: handleSave,
                                    autoFocus: true,
                                    sx: { width: '20%', px: 'auto' },
                                }, rules: { required: true }, name: "name" }), _jsx(Button, { disabled: true, variant: "primary", size: "medium", sx: { width: '20%', px: 'auto' }, children: "Rename" })] }) })), !rename && (_jsxs(Stack, { sx: {
                        alignItems: 'left',
                        gap: 2,
                    }, children: [_jsx(Typography, { variant: "globalM", children: form.watch('name') }), _jsx(Button, { onClick: () => setRename(true), variant: "primary", size: "medium", sx: { width: '20%', px: 'auto' }, children: "Rename" })] }))] }));
    },
};
