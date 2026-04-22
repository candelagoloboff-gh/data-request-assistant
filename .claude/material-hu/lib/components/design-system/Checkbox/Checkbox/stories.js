import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import FormCheckbox from './form';
import CustomCheckbox from '.';
const meta = {
    component: CustomCheckbox,
    title: 'Design System/Checkbox/Checkbox',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        labelTooltip: { control: 'text' },
        description: { control: 'text' },
        extraInfo: { control: 'text' },
        error: { control: 'boolean' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        indeterminate: { control: 'boolean' },
        onChange: { control: false },
        onClick: { control: false },
        inputRef: { control: false },
        sx: { control: false },
        slotProps: { control: false },
    },
};
export default meta;
export const WithExtraInfo = {
    args: { label: 'Label', description: 'Description', extraInfo: 'Extra Info' },
};
export const OnlyLabel = { args: { label: 'Label' } };
export const Disabled = {
    args: {
        label: 'Label',
        description: 'Description',
        disabled: true,
        checked: true,
    },
};
export const Error = {
    args: { label: 'Label', description: 'Description', error: true },
};
export const Indeterminate = {
    args: { label: 'Label', description: 'Description', indeterminate: true },
};
export const WithLabelTooltip = {
    args: {
        label: 'Label',
        labelTooltip: 'Label Tooltip',
        description: 'Description',
    },
};
export const FormCheckboxStory = {
    render: () => {
        const form = useForm({ defaultValues: { item1: true, item2: false } });
        const { item1, item2 } = form.watch();
        return (_jsxs(FormProvider, { ...form, children: [_jsx(FormCheckbox, { checkBoxProps: {
                        label: 'Option1',
                        description: 'Description',
                        checked: item1 && item2,
                        indeterminate: item1 !== item2,
                        onChange: e => {
                            form.setValue('item1', e.target.checked);
                            form.setValue('item2', e.target.checked);
                        },
                    }, name: "option1" }), _jsxs(Stack, { sx: { pl: 1 }, children: [_jsx(FormCheckbox, { checkBoxProps: { label: 'Item1', description: 'Description' }, name: "item1" }), _jsx(FormCheckbox, { checkBoxProps: { label: 'Item2', description: 'Description' }, name: "item2" })] })] }));
    },
};
