import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import FormLikertSlider from './form';
import LikertSlider from '.';
const meta = {
    component: LikertSlider,
    title: 'Composed Components/Inputs/LikertSlider',
    tags: ['autodocs'],
    argTypes: {
        min: {
            control: { type: 'number' },
            description: 'Minimum value of the slider (inclusive)',
            defaultValue: 1,
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '1' },
            },
        },
        max: {
            control: { type: 'number' },
            description: 'Maximum value of the slider (inclusive)',
            defaultValue: 10,
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '10' },
            },
        },
        value: {
            control: { type: 'object' },
            description: 'Current value of the slider (number or [number, number] for range). Range means it has a neutral value in between.',
            table: {
                type: { summary: 'number | [number, number]' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Callback fired when the value changes',
            table: {
                type: { summary: '(event, value, activeThumb) => void' },
            },
        },
        invert: {
            control: { type: 'boolean' },
            description: 'Invert positive and negative positions',
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the slider is disabled',
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    render: args => (_jsx(Stack, { sx: { width: 520, alignItems: 'center', margin: '0 auto' }, children: _jsx(LikertSlider, { ...args }) })),
};
export default meta;
export const Default = {
    args: {},
    render: args => {
        const [value, setValue] = useState([4, 6]);
        return (_jsx(Stack, { sx: { width: 520, alignItems: 'center', margin: '0 auto' }, children: _jsx(LikertSlider, { ...args, value: value, onChange: (_event, nextValue) => setValue(nextValue) }) }));
    },
};
export const SingleScale = {
    render: args => {
        const [value, setValue] = useState(5);
        return (_jsx(Stack, { sx: { width: 520, alignItems: 'center', margin: '0 auto' }, children: _jsx(LikertSlider, { ...args, value: value, onChange: (_event, nextValue) => setValue(nextValue) }) }));
    },
};
export const FiveScale = {
    args: {
        min: 1,
        max: 5,
        value: 3,
    },
};
export const BinaryScale = {
    args: {
        min: 1,
        max: 2,
        value: 1,
    },
};
export const FormStory = {
    render: args => {
        const methods = useForm({
            defaultValues: {
                likert: [4, 6],
            },
        });
        const onSubmit = (data) => {
            alert(JSON.stringify(data, null, 2));
        };
        return (_jsx(FormProvider, { ...methods, children: _jsx("form", { onSubmit: methods.handleSubmit(onSubmit), children: _jsxs(Stack, { sx: { width: 520, alignItems: 'center', margin: '0 auto', gap: 2 }, children: [_jsx(FormLikertSlider, { name: "likert", ...args }), _jsx(Button, { type: "submit", children: "Submit" })] }) }) }));
    },
};
