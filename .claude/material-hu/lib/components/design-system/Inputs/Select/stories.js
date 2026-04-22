import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import FormInputSelect from './form';
import InputSelect from '.';
const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
];
const meta = {
    component: InputSelect,
    title: 'Design System/Inputs/Select',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        errorText: { control: 'text' },
        error: { control: 'boolean' },
        success: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        options: { control: false },
        onChange: { control: false },
        renderOption: { control: false },
        sx: { control: false },
    },
    parameters: {
        docs: {
            description: {
                component: '⚠️ **DEPRECATED**: This component is not aligned with Hugo. Use the `Autocomplete` component instead.',
            },
        },
    },
    args: {
        options,
        placeholder: 'Placeholder',
        value: '',
        onChange: () => { },
    },
};
export default meta;
export const NoLabel = {
    args: {},
};
export const DefaultWithHelper = {
    args: {
        label: 'Label',
        helperText: 'Helper',
        value: '',
    },
};
export const Disabled = {
    args: {
        label: 'Label',
        value: '',
        disabled: true,
    },
};
export const Error = {
    args: {
        label: 'Label',
        helperText: 'HelperText',
        errorText: 'Error text',
        value: options[0].value,
        error: true,
    },
};
const ColorBox = ({ color }) => {
    return (_jsx(Box, { sx: { width: 20, height: 20, backgroundColor: color, borderRadius: 100 } }));
};
export const ColorSelector = {
    render: () => {
        const defaultInstanceColor = '#E4A0F7';
        const form = useForm({
            defaultValues: { color: defaultInstanceColor },
        });
        const colorsOptions = [
            { label: '[Color de tu comunidad]', value: defaultInstanceColor },
            { label: 'Azul claro', value: '#D6E4FF' },
            { label: 'Azul oscuro', value: '#1C3D7C' },
            { label: 'Beige claro', value: '#FFF4E5' },
            { label: 'Beige oscuro', value: '#8B4513' },
        ];
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputSelect, { inputProps: {
                    label: 'Color',
                    options: colorsOptions,
                    placeholder: 'Selecciona un color',
                    helperText: value => `El color seleccionado es ${value}`,
                    renderOption: option => (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 2 }, children: [_jsx(ColorBox, { color: option.value }), option.label] })),
                }, name: "color" }) }));
    },
};
export const FormInputClassicStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: '',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormInputSelect, { inputProps: {
                    placeholder: 'Placeholder',
                    label: 'Label',
                    helperText: 'HelperText',
                    options,
                    allowClear: true,
                }, name: "myInput" }) }));
    },
};
