import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Divider } from '@mui/material';
import { addMonths, format } from 'date-fns';
import es from 'date-fns/locale/es';
import FormRangeDatePicker from './form';
import RangeDatePicker from '.';
const INITIAL_VALUE = {
    fromDate: null,
    toDate: null,
};
const meta = {
    component: RangeDatePicker,
    title: 'Design System/Inputs/DatePickers/Range',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        helperText: { control: 'text' },
        datePlaceholder: { control: 'text' },
        disabled: { control: 'boolean' },
        error: { control: 'boolean' },
        errorText: { control: 'text' },
        enableClear: { control: 'boolean' },
        minMaxDatesDifference: { control: 'number' },
        value: { control: false },
        onChange: { control: false },
        dateFormatter: { control: false },
        minDate: { control: false },
        maxDate: { control: false },
        slotProps: { control: false },
    },
    args: {
        label: 'Label',
        helperText: 'Helper Text',
        datePlaceholder: 'DD/MM/YYYY',
        dateFormatter: (date, pattern = 'dd/MM/yyyy') => {
            const dateToFormat = new Date(date);
            try {
                return format(dateToFormat, pattern, { locale: es });
            }
            catch (err) {
                return '';
            }
        },
        slotProps: {
            CalendarHeader: {
                previousMonthText: 'Previous Month',
                nextMonthText: 'Next Month',
                changeMonthText: 'Change Month',
            },
            RangeSelector: {
                clearDatesText: 'Clear',
                applyDatesText: 'Apply',
            },
        },
        enableClear: false,
    },
};
export default meta;
const DateValueDisplay = ({ fromDate, toDate, }) => (_jsxs(_Fragment, { children: [_jsxs("pre", { children: ["From Date: ", fromDate?.toISOString() || 'null', _jsx("br", {}), "To Date: ", toDate?.toISOString() || 'null'] }), _jsx(Divider, { sx: { mb: 2 } })] }));
export const Default = {
    render: args => {
        const [value, setValue] = useState({ ...INITIAL_VALUE });
        return (_jsxs(_Fragment, { children: [_jsx(DateValueDisplay, { fromDate: value.fromDate, toDate: value.toDate }), _jsx(RangeDatePicker, { ...args, value: value, onChange: setValue })] }));
    },
};
export const LimitedFixedRange = {
    render: args => {
        const [value, setValue] = useState({ ...INITIAL_VALUE });
        return (_jsxs(_Fragment, { children: [_jsx(DateValueDisplay, { fromDate: value.fromDate, toDate: value.toDate }), _jsx(RangeDatePicker, { ...args, value: value, onChange: setValue, minDate: new Date(), maxDate: addMonths(new Date(), 1) })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'RangeDatePicker with limited range (today to 1 month from today)',
            },
        },
    },
};
export const LimitedDynamicRange = {
    render: args => {
        const [value, setValue] = useState({ ...INITIAL_VALUE });
        return (_jsxs(_Fragment, { children: [_jsx(DateValueDisplay, { fromDate: value.fromDate, toDate: value.toDate }), _jsx(RangeDatePicker, { ...args, value: value, onChange: setValue, minMaxDatesDifference: 14 })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'RangeDatePicker with limited dynamic range (range cannot span more than 14 days)',
            },
        },
    },
};
export const Form = {
    render: args => {
        const form = useForm({
            defaultValues: { dateRange: INITIAL_VALUE },
        });
        const { fromDate, toDate } = useWatch({
            name: 'dateRange',
            control: form.control,
        });
        return (_jsxs(_Fragment, { children: [_jsx(DateValueDisplay, { fromDate: fromDate, toDate: toDate }), _jsx(FormProvider, { ...form, children: _jsx(FormRangeDatePicker, { name: "dateRange", inputProps: {
                            ...args,
                        } }) })] }));
    },
};
export const Disabled = {
    render: args => {
        const [value, setValue] = useState({ ...INITIAL_VALUE });
        return (_jsxs(_Fragment, { children: [_jsxs("p", { children: ["From Date: ", value.fromDate?.toISOString() || 'null'] }), _jsxs("p", { children: ["To Date: ", value.toDate?.toISOString() || 'null'] }), _jsx(RangeDatePicker, { ...args, value: value, onChange: setValue, disabled: true })] }));
    },
};
export const Error = {
    render: args => {
        const [value, setValue] = useState({ ...INITIAL_VALUE });
        return (_jsxs(_Fragment, { children: [_jsx(DateValueDisplay, { fromDate: value.fromDate, toDate: value.toDate }), _jsx(RangeDatePicker, { ...args, value: value, onChange: setValue, error: true, errorText: "Please select a valid date range" })] }));
    },
};
