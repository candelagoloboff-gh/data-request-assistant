import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormRadioInput from './form';
const OPTIONS = [
    {
        value: 'opcion-1',
        label: 'Opción 1',
    },
    {
        value: 'opcion-2',
        label: 'Opción 2',
    },
    {
        value: 'opcion-3',
        label: 'Opción 3 (disabled)',
        disabled: true,
    },
];
const INPUT_PROPS = {
    label: 'Label',
    options: OPTIONS,
};
const meta = {
    title: 'Composed Components/Inputs/FormRadioInput',
    component: FormRadioInput,
    tags: ['autodocs'],
    args: {
        name: 'selection',
        inputProps: INPUT_PROPS,
    },
    render: props => {
        const form = useForm({
            defaultValues: {
                selection: 'ninguna',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRadioInput, { ...props }) }));
    },
};
export default meta;
export const Default = {};
export const Disabled = {
    args: {
        inputProps: {
            ...INPUT_PROPS,
            disabled: true,
        },
    },
};
