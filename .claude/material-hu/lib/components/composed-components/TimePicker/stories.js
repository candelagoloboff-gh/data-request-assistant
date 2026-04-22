import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Divider, Stack } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormTimePicker from './form';
import TimePicker from './index';
const meta = {
    title: 'Composed Components/Inputs/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
    args: {
        label: 'Label',
        helperText: 'Helper',
        placeholder: 'hh:mm',
        value: null,
    },
    render: props => {
        const [value, setValue] = useState(props.value);
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(TimePicker, { ...props, value: value, onChange: setValue }) }));
    },
};
export default meta;
export const Default = {
    args: {
        label: 'Label',
        helperText: 'Helper',
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
};
export const Timezone = {
    args: {
        label: 'Label',
        helperText: 'Helper',
        placeholder: 'hh:mm',
        timezone: 'Asia/Anadyr',
        disablePast: true,
        sx: { width: 300 },
    },
};
export const WithValue = {
    args: {
        label: 'Select time',
        helperText: 'Choose a time',
        placeholder: 'hh:mm',
        value: new Date(2024, 0, 1, 14, 30),
    },
};
export const Small = {
    args: {
        label: 'Small time picker',
        size: 'small',
        placeholder: 'hh:mm',
    },
};
export const Disabled = {
    args: {
        label: 'Disabled time picker',
        disabled: true,
        placeholder: 'hh:mm',
    },
};
export const Error = {
    args: {
        label: 'Time with error',
        errorText: 'This field is required',
        error: true,
        placeholder: 'hh:mm',
    },
};
export const FullWidth = {
    args: {
        label: 'Full width',
        helperText: 'Helper text',
        fullWidth: true,
        placeholder: 'hh:mm',
    },
};
export const MinutesStep5 = {
    args: {
        label: 'Minutes step: 5 (default)',
        helperText: 'Minutes go from 5 to 5 (0, 5, 10, 15, 20...)',
        minutesStep: 5,
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
};
export const NoIcon = {
    args: {
        label: 'Without clock icon',
        helperText: 'Only manual input, no dropdown',
        placeholder: 'hh:mm',
        noIcon: true,
        sx: { width: 300 },
    },
};
export const FormTimePickerDefault = {
    render: () => {
        const form = useForm({
            defaultValues: {
                time: null,
            },
        });
        const { watch } = form;
        return (_jsxs(LocalizationProvider, { dateAdapter: AdapterDateFns, children: [_jsx("span", { children: "Form:" }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsx(FormTimePicker, { name: "time", inputProps: {
                            label: 'Label',
                            helperText: 'Helper',
                            placeholder: 'hh:mm',
                            sx: { width: 300 },
                        } }) })] }));
    },
};
export const FormTimePickerWithReferenceDate = {
    render: () => {
        const form = useForm({
            defaultValues: {
                time: null,
            },
        });
        const { watch } = form;
        const referenceDate = new Date('2025-10-01T00:00:00');
        return (_jsxs(LocalizationProvider, { dateAdapter: AdapterDateFns, children: [_jsx("span", { children: "Form:" }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsx(FormTimePicker, { name: "time", inputProps: {
                            label: 'Select time',
                            helperText: 'Reference date: 01/10/2025',
                            placeholder: 'hh:mm',
                            referenceDate,
                        } }) })] }));
    },
};
const currentDateAt14hs = () => {
    const date = new Date();
    date.setHours(14, 0, 0, 0);
    return date;
};
export const FormTimePickerError = {
    render: () => {
        const form = useForm({
            defaultValues: {
                time: null,
            },
            mode: 'onChange',
        });
        const { watch } = form;
        return (_jsxs(LocalizationProvider, { dateAdapter: AdapterDateFns, children: [_jsx("pre", { children: JSON.stringify(watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: { flexDirection: 'row', gap: 2 }, children: [_jsx(FormTimePicker, { name: "time", inputProps: {
                                    label: 'With error text',
                                    placeholder: 'hh:mm',
                                    helperText: 'Chose an hour before 14:00',
                                }, rules: {
                                    validate: {
                                        timeBefore14hs: (value) => value < currentDateAt14hs() || 'Hour must be before 14:00',
                                    },
                                } }), _jsx(FormTimePicker, { name: "time", inputProps: {
                                    label: 'Without error text',
                                    placeholder: 'hh:mm',
                                    helperText: 'Chose an hour before 14:00',
                                    hideErrorText: true,
                                }, rules: {
                                    validate: {
                                        timeBefore14hs: (value) => value < currentDateAt14hs() || 'Hour must be before 14:00',
                                    },
                                } })] }) })] }));
    },
};
