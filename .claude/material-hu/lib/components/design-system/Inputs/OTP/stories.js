import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../Buttons/Button';
import { Stack } from '@mui/material';
import FormInputOtp from './form';
import InputOtp from '.';
const meta = {
    component: InputOtp,
    title: 'Design System/Inputs/OTP',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        helperText: { control: 'text' },
        length: { control: 'number' },
        password: { control: 'boolean' },
        rounded: { control: 'boolean' },
        error: { control: 'boolean' },
        success: { control: 'boolean' },
        disabled: { control: 'boolean' },
        autoFocus: { control: 'boolean' },
        value: { control: false },
        onChange: { control: false },
        onComplete: { control: false },
        sx: { control: false },
    },
    args: {
        label: 'Label',
    },
    render: props => {
        const [state, setState] = useState(props.value ?? '');
        return (_jsx(Stack, { sx: { width: 450 }, children: _jsx(InputOtp, { ...props, onChange: setState, value: state }) }));
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Password = {
    args: {
        password: true,
    },
};
export const Rounded = {
    args: {
        password: true,
        rounded: true,
    },
};
export const HelperText = {
    args: {
        helperText: 'Helper text',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const Success = {
    args: {
        success: true,
        helperText: 'Validated code ',
        value: '012345',
    },
};
export const Error = {
    args: {
        error: true,
        helperText: 'Code is invalid',
        value: '007',
    },
};
export const ExecWhenCompleted = {
    args: {
        onComplete: () => {
            // eslint-disable-next-line no-console
            console.info('Completed!');
        },
    },
};
export const Form = {
    render: () => {
        const form = useForm({
            defaultValues: {
                otp: '',
            },
        });
        const { watch } = form;
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormInputOtp, { name: "otp" }) }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) })] }));
    },
};
export const FormDisabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                otp: '1,2,3,4,5,6',
            },
        });
        const submit = () => {
            form.handleSubmit(data => {
                alert(JSON.stringify(data, null, 2));
            })();
        };
        return (_jsx(Stack, { sx: { gap: 2 }, children: _jsxs(FormProvider, { ...form, children: [_jsx(FormInputOtp, { name: "otp", inputOtpProps: { disabled: true } }), _jsx(Button, { onClick: submit, children: "Submit" })] }) }));
    },
};
