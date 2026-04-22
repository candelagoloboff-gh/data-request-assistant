import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInputMoney from './form';
import InputMoney from '.';
const meta = {
    component: InputMoney,
    title: 'Design System/Inputs/Money',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'object',
        },
    },
    render: args => {
        const [value, setValue] = useState(args.value);
        return (_jsx(InputMoney, { ...args, value: value, onChange: newValue => setValue(newValue) }));
    },
};
export default meta;
export const Default = {
    args: {
        value: { currencyCode: 'USD', amount: '1234567.89' },
        placeholder: 'Placeholder',
        onChange: () => { },
    },
};
export const WithError = {
    args: {
        ...Default.args,
        error: true,
        label: 'Amount with Error',
        errorText: 'This is an error message',
        value: { currencyCode: 'USD', amount: '9999999.99' },
    },
};
export const WithSuccess = {
    args: {
        ...Default.args,
        success: true,
        label: 'Amount with Success',
        helperText: 'The amount has been validated successfully',
        value: { currencyCode: 'USD', amount: '1000.00' },
    },
};
export const WithHelperText = {
    args: {
        ...Default.args,
        label: 'Amount with Helper Text',
        helperText: 'This is a helpful message',
    },
};
export const Disabled = {
    args: {
        ...Default.args,
        label: 'Disabled Input',
        helperText: 'This input is disabled',
        disabled: true,
    },
};
export const EmptyCurrency = {
    args: {
        ...Default.args,
        label: 'Amount without currency',
        helperText: 'This input has no currency',
        value: {
            amount: '1234567.89',
        },
    },
};
export const IntegerValue = {
    args: {
        ...Default.args,
        label: 'Amount without decimals',
        helperText: 'This input doesnt allow decimals',
        preventDecimals: true,
        value: {
            amount: '1234567.89',
        },
    },
};
export const FormInputMoneyStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                moneyInput: { currencyCode: 'ARS', amount: '1234567.89' },
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputMoney, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'Helper Text',
                }, name: "moneyInput" }) }));
    },
};
