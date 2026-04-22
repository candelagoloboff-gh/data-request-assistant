import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormRadioCustomGroup from '.';
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
    title: 'Deprecated/FormRadioCustomGroup',
    component: FormRadioCustomGroup,
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
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRadioCustomGroup, { ...props }) }));
    },
};
export default meta;
export const Default = {
    args: {},
};
