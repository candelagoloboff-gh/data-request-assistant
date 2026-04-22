import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormRadioGroup from './form';
const OPTIONS = [
    {
        value: 'ninguna',
        label: 'Ninguna',
        helperText: '',
    },
    {
        value: 'opcion-1',
        label: 'Opción 1',
    },
    {
        value: 'opcion-2',
        label: 'Opción 2',
        helperText: 'Lorem ipsum',
    },
    {
        value: 'opcion-3',
        label: 'Opción 3 (disabled)',
        helperText: 'Lorem ipsum',
        disabled: true,
    },
];
const meta = {
    title: 'Composed Components/Inputs/FormRadioGroup',
    component: FormRadioGroup,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: 'El valor de la opción seleccionada se setea bajo el "name" del field indicado',
            },
        },
    },
    args: {
        name: 'selection',
        options: OPTIONS,
    },
    render: props => {
        const form = useForm({
            defaultValues: {
                selection: 'ninguna',
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRadioGroup, { ...props }) }));
    },
};
export default meta;
export const Default = {};
export const ForcedWidth = {
    args: {
        slotProps: {
            selectionCard: {
                sx: {
                    width: '150px',
                },
            },
        },
    },
};
export const Columns = {
    args: {
        slotProps: {
            root: {
                flexDirection: 'row',
            },
        },
    },
};
