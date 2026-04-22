import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DatePickerWithOptions from '.';
const meta = {
    component: DatePickerWithOptions,
    title: 'Composed Components/DatePickerWithOptions',
    tags: ['autodocs'],
    argTypes: {
        options: { control: 'object' },
        startDatePicker: { control: 'object' },
        endDatePicker: { control: 'object' },
        cardContainerProps: { control: 'object' },
        optionsGap: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
        datePickersGap: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
        sectionGap: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
        showDatePickers: { control: 'boolean' },
    },
};
export default meta;
export const Default = {
    render: args => {
        const form = useForm({
            defaultValues: {
                dateOptions: {
                    lastWeek: true,
                    lastMonth: false,
                    custom: false,
                },
                startDate: null,
                endDate: null,
            },
        });
        const watchCustom = form.watch('dateOptions.custom');
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsxs(FormProvider, { ...form, children: [_jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, options: [
                                { name: 'dateOptions.lastWeek', label: 'Last 7 days' },
                                { name: 'dateOptions.lastMonth', label: 'Last 30 days' },
                                { name: 'dateOptions.custom', label: 'Custom date range' },
                            ], startDatePicker: {
                                name: 'startDate',
                                label: 'From',
                                disabled: !watchCustom,
                                inputProps: { disableFuture: true },
                            }, endDatePicker: {
                                name: 'endDate',
                                label: 'Until',
                                disabled: !watchCustom,
                                inputProps: { disableFuture: true },
                            } }) }), _jsxs(Stack, { component: "details", sx: { mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }, children: [_jsx("summary", { style: { cursor: 'pointer' }, children: "Form Values" }), _jsx("pre", { style: { fontSize: 12, marginTop: 8 }, children: JSON.stringify(form.watch(), null, 2) })] })] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Full example with radio options and date pickers. The date pickers are disabled until "Custom date range" is selected.',
            },
        },
    },
};
export const OnlyDatePickers = {
    render: args => {
        const form = useForm({
            defaultValues: {
                startDate: null,
                endDate: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsxs(FormProvider, { ...form, children: [_jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, startDatePicker: {
                                name: 'startDate',
                                label: 'Start date',
                            }, endDatePicker: {
                                name: 'endDate',
                                label: 'End date',
                            } }) }), _jsxs(Stack, { component: "details", sx: { mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }, children: [_jsx("summary", { style: { cursor: 'pointer' }, children: "Form Values" }), _jsx("pre", { style: { fontSize: 12, marginTop: 8 }, children: JSON.stringify(form.watch(), null, 2) })] })] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows only date pickers without any radio options.',
            },
        },
    },
};
export const OnlyOptions = {
    render: args => {
        const form = useForm({
            defaultValues: {
                filter: {
                    today: true,
                    thisWeek: false,
                    thisMonth: false,
                    allTime: false,
                },
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsxs(FormProvider, { ...form, children: [_jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, options: [
                                { name: 'filter.today', label: 'Today' },
                                { name: 'filter.thisWeek', label: 'This week' },
                                { name: 'filter.thisMonth', label: 'This month' },
                                { name: 'filter.allTime', label: 'All time' },
                            ] }) }), _jsxs(Stack, { component: "details", sx: { mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }, children: [_jsx("summary", { style: { cursor: 'pointer' }, children: "Form Values" }), _jsx("pre", { style: { fontSize: 12, marginTop: 8 }, children: JSON.stringify(form.watch(), null, 2) })] })] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows only radio options without date pickers.',
            },
        },
    },
};
export const SingleDatePicker = {
    render: args => {
        const form = useForm({
            defaultValues: {
                selectedDate: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsxs(FormProvider, { ...form, children: [_jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, startDatePicker: {
                                name: 'selectedDate',
                                label: 'Select a date',
                                inputProps: { disablePast: true },
                            } }) }), _jsxs(Stack, { component: "details", sx: { mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }, children: [_jsx("summary", { style: { cursor: 'pointer' }, children: "Form Values" }), _jsx("pre", { style: { fontSize: 12, marginTop: 8 }, children: JSON.stringify(form.watch(), null, 2) })] })] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows only a single date picker.',
            },
        },
    },
};
export const CustomCardStyling = {
    render: args => {
        const form = useForm({
            defaultValues: {
                period: {
                    option1: true,
                    option2: false,
                },
                from: null,
                to: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, options: [
                            { name: 'period.option1', label: 'Last quarter' },
                            { name: 'period.option2', label: 'Custom period' },
                        ], startDatePicker: {
                            name: 'from',
                            label: 'From',
                        }, endDatePicker: {
                            name: 'to',
                            label: 'To',
                        }, cardContainerProps: {
                            fullWidth: true,
                            color: 'grey',
                            hasShadow: true,
                            padding: 24,
                        } }) }) }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates custom CardContainer styling with grey background, shadow, and larger padding.',
            },
        },
    },
};
export const WithoutCardContainer = {
    render: args => {
        const form = useForm({
            defaultValues: {
                dateType: {
                    recent: true,
                    custom: false,
                },
                startDate: null,
                endDate: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: { maxWidth: 400, p: 2, border: '1px dashed #ccc' }, children: _jsx(DatePickerWithOptions, { ...args, cardContainerProps: null, options: [
                            { name: 'dateType.recent', label: 'Most recent' },
                            { name: 'dateType.custom', label: 'Custom range' },
                        ], startDatePicker: {
                            name: 'startDate',
                            label: 'Start',
                        }, endDatePicker: {
                            name: 'endDate',
                            label: 'End',
                        } }) }) }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Renders without the CardContainer wrapper by passing `cardContainerProps={null}`. Useful when embedding in custom containers.',
            },
        },
    },
};
export const CustomSpacing = {
    render: args => {
        const form = useForm({
            defaultValues: {
                spacing: {
                    opt1: false,
                    opt2: true,
                    opt3: false,
                },
                dateFrom: null,
                dateTo: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, options: [
                            { name: 'spacing.opt1', label: 'Option A' },
                            { name: 'spacing.opt2', label: 'Option B' },
                            { name: 'spacing.opt3', label: 'Option C' },
                        ], startDatePicker: {
                            name: 'dateFrom',
                            label: 'Date from',
                        }, endDatePicker: {
                            name: 'dateTo',
                            label: 'Date to',
                        }, optionsGap: 3, datePickersGap: 2, sectionGap: 4 }) }) }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates custom spacing between options (3), date pickers (2), and sections (4).',
            },
        },
    },
};
export const WithRadioDescriptions = {
    render: args => {
        const form = useForm({
            defaultValues: {
                reportPeriod: {
                    daily: false,
                    weekly: true,
                    monthly: false,
                },
                rangeStart: null,
                rangeEnd: null,
            },
        });
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: { maxWidth: 450 }, children: _jsx(DatePickerWithOptions, { ...args, options: [
                            {
                                name: 'reportPeriod.daily',
                                label: 'Daily report',
                                radioButtonProps: {
                                    description: 'Get reports every day at 9:00 AM',
                                },
                            },
                            {
                                name: 'reportPeriod.weekly',
                                label: 'Weekly report',
                                radioButtonProps: {
                                    description: 'Get reports every Monday at 9:00 AM',
                                },
                            },
                            {
                                name: 'reportPeriod.monthly',
                                label: 'Monthly report',
                                radioButtonProps: {
                                    description: 'Get reports on the first day of each month',
                                },
                            },
                        ], startDatePicker: {
                            name: 'rangeStart',
                            label: 'Report start date',
                        }, endDatePicker: {
                            name: 'rangeEnd',
                            label: 'Report end date',
                        } }) }) }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows radio options with descriptions using the `radioButtonProps` configuration.',
            },
        },
    },
};
export const WithLabel = {
    render: args => {
        const form = useForm({
            defaultValues: {
                dateOptions: {
                    lastWeek: true,
                    lastMonth: false,
                    last6Months: false,
                    lastYear: false,
                    custom: false,
                },
                startDate: null,
                endDate: null,
            },
        });
        const watchCustom = form.watch('dateOptions.custom');
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(FormProvider, { ...form, children: _jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(DatePickerWithOptions, { ...args, label: "Creation date", options: [
                            { name: 'dateOptions.lastWeek', label: 'Last 7 days' },
                            { name: 'dateOptions.lastMonth', label: 'Last 30 days' },
                            { name: 'dateOptions.last6Months', label: 'Last 6 months' },
                            { name: 'dateOptions.lastYear', label: 'Last year' },
                            { name: 'dateOptions.custom', label: 'Custom date range' },
                        ], startDatePicker: {
                            name: 'startDate',
                            label: 'From',
                            disabled: !watchCustom,
                        }, endDatePicker: {
                            name: 'endDate',
                            label: 'Until',
                            disabled: !watchCustom,
                        } }) }) }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the component with a label displayed above the options and date pickers.',
            },
        },
    },
};
