import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import FormInputPhone from './form';
import InputPhone from '.';
const meta = {
    title: 'Design System/Inputs/Phone',
    component: InputPhone,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        defaultCountry: {
            type: 'string',
            description: 'The default country code',
            control: 'select',
            options: [
                'AR',
                'MX',
                'US',
                'BR',
                'CL',
                'UY',
                'PY',
                'BO',
                'PE',
                'EC',
                'CO',
                'VE',
            ],
        },
        fullWidth: {
            table: {
                disable: true,
            },
        },
        value: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        preferredCountries: {
            table: {
                disable: true,
            },
        },
    },
    render: args => {
        const [value, setValue] = useState(args.value || '');
        return (_jsx(InputPhone, { ...args, value: value, onChange: newValue => setValue(newValue) }));
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithDefaultValue = {
    args: {
        value: '1123456789',
        defaultCountry: 'MX',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const WithError = {
    args: {
        label: 'Enter your phone number',
        error: true,
        helperText: 'Invalid phone number',
    },
};
export const Valid = {
    args: {
        label: 'Enter your phone number',
        success: true,
        helperText: 'Valid phone number',
    },
};
export const WithLabelAndHelperText = {
    args: {
        label: 'Enter your phone number',
        helperText: "Make sure it's yours, don't lie!",
    },
};
export const WithFormControl = {
    render: () => {
        const form = useForm({
            defaultValues: {
                phoneNumber: '',
            },
        });
        const onSubmit = form.handleSubmit(() => { });
        return (_jsx(FormProvider, { ...form, children: _jsxs("form", { onSubmit: onSubmit, children: [_jsx(FormInputPhone, { name: "phoneNumber", inputProps: {
                            showErrors: true,
                        }, rules: { required: 'Número requerido' } }), _jsx(Button, { type: "submit", children: "Submit empty to see required error" })] }) }));
    },
};
export const WithFormControlNoSuccessOnSubmitted = {
    render: () => {
        const form = useForm({
            defaultValues: {
                phoneNumber: '',
            },
        });
        const onSubmit = form.handleSubmit(() => { });
        return (_jsx(FormProvider, { ...form, children: _jsxs("form", { onSubmit: onSubmit, children: [_jsx(FormInputPhone, { name: "phoneNumber", inputProps: {
                            showErrors: true,
                            showSuccessOnSubmitted: false,
                        }, rules: { required: 'Número requerido' } }), _jsx(Button, { type: "submit", children: "Submit with a valid number: no green success styling" })] }) }));
    },
};
