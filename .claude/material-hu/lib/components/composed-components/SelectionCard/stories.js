import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Checkbox, Radio, Stack, Typography } from '@mui/material';
import DesignCheckbox from '../../design-system/Checkbox/Checkbox';
import RadioButton from '../../design-system/RadioButton/RadioButton';
import SelectionCard from './';
import FormSelectionCard from './form';
const meta = {
    component: SelectionCard,
    title: 'Composed Components/Cards/SelectionCard',
    tags: ['autodocs'],
    args: {},
    render: props => {
        const [checked, setChecked] = useState(false);
        return (_jsx(SelectionCard, { ...props, checked: checked, onClick: setChecked, fullWidth: true, children: _jsx(Typography, { variant: "globalS", color: theme => theme.palette.new.text.neutral.default, children: checked ? 'Seleccionado' : 'No seleccionado' }) }));
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const FormSelectionCardDefaultStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: false,
            },
        });
        const { myInput } = form.watch();
        return (_jsx(FormProvider, { ...form, children: _jsx(FormSelectionCard, { name: "myInput", children: myInput ? 'selecionado' : 'no seleccionado' }) }));
    },
};
export const FormSelectionCardRadioButtonStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: false,
            },
        });
        const { myInput } = form.watch();
        return (_jsx(FormProvider, { ...form, children: _jsx(FormSelectionCard, { name: "myInput", children: _jsx(Radio, { checked: myInput }) }) }));
    },
};
export const FormSelectionCardCheckBoxStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myInput: false,
            },
        });
        const { myInput } = form.watch();
        return (_jsx(FormProvider, { ...form, children: _jsx(FormSelectionCard, { name: "myInput", children: _jsx(Checkbox, { checked: myInput }) }) }));
    },
};
export const FormSelectionCardOnlyOneOptionStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                mainRoute: {
                    myInput1: false,
                    myInput2: false,
                },
            },
        });
        const { mainRoute } = form.watch();
        return (_jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(FormSelectionCard, { name: "mainRoute.myInput1", isOnlyOption: true, children: _jsx(Checkbox, { checked: mainRoute.myInput1 }) }), _jsx(FormSelectionCard, { name: "mainRoute.myInput2", isOnlyOption: true, children: _jsx(Checkbox, { checked: mainRoute.myInput2 }) })] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'La prop isOnlyOption deshabilita todas las opciónes marcadas, menos la clickeada. Para su uso correcto es necesario aplicarlo para cada elemento (FormSelectionCard)',
            },
        },
    },
};
const radioOptions = [
    { id: 1, label: 'Opción A' },
    { id: 2, label: 'Opción B' },
    { id: 3, label: 'Opción C' },
    { id: 4, label: 'Opción D' },
];
export const DisabledRadioListStory = {
    render: () => {
        const selectedId = 2;
        return (_jsx(Stack, { sx: { gap: 1, width: '100%' }, children: radioOptions.map(option => {
                const isSelected = option.id === selectedId;
                return (_jsx(SelectionCard, { checked: isSelected, disabled: !isSelected, fullWidth: true, children: _jsx("span", { style: { pointerEvents: 'none' }, children: _jsx(RadioButton, { checked: isSelected, isActive: isSelected, disabled: true, label: option.label }) }) }, option.id));
            }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Lista de SelectionCards con RadioButtons en estado disabled, simulando el comportamiento de InputSelectableListItem con selección única.',
            },
        },
    },
};
const checkboxOptions = [
    { id: 1, label: 'Opción 1' },
    { id: 2, label: 'Opción 2' },
    { id: 3, label: 'Opción 3' },
    { id: 4, label: 'Opción 4' },
];
export const DisabledCheckboxListStory = {
    render: () => {
        const selectedIds = [1, 3];
        return (_jsx(Stack, { sx: { gap: 1, width: '100%' }, children: checkboxOptions.map(option => {
                const isSelected = selectedIds.includes(option.id);
                return (_jsx(SelectionCard, { checked: isSelected, disabled: !isSelected, fullWidth: true, children: _jsx("span", { style: { pointerEvents: 'none' }, children: _jsx(DesignCheckbox, { checked: isSelected, disabled: true, label: option.label }) }) }, option.id));
            }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Lista de SelectionCards con Checkboxes en estado disabled, simulando el comportamiento de InputSelectableListItem con selección múltiple.',
            },
        },
    },
};
