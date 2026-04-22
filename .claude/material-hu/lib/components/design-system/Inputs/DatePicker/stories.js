import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import FormDatePicker from './form';
import DatePicker from '.';
const meta = {
    component: DatePicker,
    title: 'Design System/Inputs/DatePickers/Date',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        helperText: { control: 'text' },
        disabled: { control: 'boolean' },
        disableFuture: { control: 'boolean' },
        disablePast: { control: 'boolean' },
        enableClear: { control: 'boolean' },
        timezone: { control: 'text' },
        value: { control: false },
        onChange: { control: false },
        slotProps: { control: false },
        sx: { control: false },
    },
    args: {
        label: 'Label',
        helperText: 'Helper Text',
    },
    decorators: [
        Story => (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    render: args => {
        return _jsx(DatePicker, { ...args });
    },
};
const FormStoryTemplate = ({ defaultValues, formOptions, datePickerProps, }) => {
    const form = useForm({
        defaultValues: defaultValues || { myDatePicker: new Date() },
        ...formOptions,
    });
    const watchedValues = form.watch();
    return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(watchedValues) }), _jsx(FormProvider, { ...form, children: _jsx(FormDatePicker, { ...datePickerProps }) })] }));
};
export const FormDatePickerDefault = {
    render: () => (_jsx(FormStoryTemplate, { datePickerProps: {
            inputProps: {},
            name: 'myDatePicker',
        } })),
};
export const FormDatePickerSmall = {
    render: () => (_jsx(FormStoryTemplate, { datePickerProps: {
            inputProps: {
                size: 'small',
                sx: {
                    width: '150px',
                },
            },
            name: 'myDatePicker',
        } })),
};
export const Disabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myDatePicker: null,
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormDatePicker, { inputProps: {
                    disabled: true,
                }, name: "myDatePicker" }) }));
    },
};
export const DisableFuture = {
    render: () => (_jsx(FormStoryTemplate, { datePickerProps: {
            inputProps: {
                label: 'Choose date',
                disableFuture: true,
            },
            name: 'myDatePicker',
        } })),
};
export const DisablePast = {
    render: () => (_jsx(FormStoryTemplate, { datePickerProps: {
            inputProps: {
                label: 'Choose date',
                disablePast: true,
            },
            name: 'myDatePicker',
        } })),
};
export const Timezone = {
    render: () => (_jsx(_Fragment, { children: _jsx(FormStoryTemplate, { datePickerProps: {
                inputProps: {
                    label: 'Choose date',
                    timezone: 'Asia/Anadyr',
                    disablePast: true,
                },
                name: 'myDatePicker',
            } }) })),
};
export const ClearableField = {
    render: () => (_jsx(FormStoryTemplate, { datePickerProps: {
            inputProps: {
                helperText: 'Date picker with clearable field',
                label: 'Choose date (optional)',
                enableClear: true,
            },
            name: 'myDatePicker',
        } })),
};
export const Errors = {
    render: () => {
        const form = useForm({
            defaultValues: {
                start: null,
                end: null,
            },
        });
        const endDate = form.watch('end');
        const startDate = form.watch('start');
        useEffect(() => {
            if (endDate && isNaN(endDate.getTime())) {
                form.setError('end', {
                    type: 'validate',
                    message: 'Invalid date',
                });
            }
            else {
                if (startDate && endDate && startDate > endDate) {
                    form.setError('end', {
                        type: 'validate',
                        message: 'End date must be after start date',
                    });
                }
                else {
                    form.clearErrors('end');
                }
            }
        }, [startDate, endDate]);
        return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(form.getValues()) }), _jsx("pre", { children: JSON.stringify(form.formState.errors, null, 2) }), _jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormDatePicker, { inputProps: {
                                    label: 'From',
                                }, name: "start" }), _jsx(FormDatePicker, { inputProps: {
                                    label: 'To',
                                }, name: "end" })] }) })] }));
    },
};
const MOCK_HOLIDAYS = [
    new Date(2026, 0, 1),
    new Date(2026, 2, 24),
    new Date(2026, 3, 2),
    new Date(2026, 3, 3),
    new Date(2026, 3, 10),
    new Date(2026, 4, 25),
    new Date(2026, 5, 20),
    new Date(2026, 6, 20),
    new Date(2026, 7, 20),
    new Date(2026, 8, 20),
    new Date(2026, 9, 20),
    new Date(2026, 10, 20),
    new Date(2026, 11, 20),
    new Date(2027, 0, 1),
    new Date(2027, 2, 24),
    new Date(2027, 3, 2),
    new Date(2027, 3, 3),
    new Date(2027, 3, 10),
    new Date(2027, 4, 25),
    new Date(2027, 5, 20),
    new Date(2027, 6, 20),
];
// Simulate a request to the backend to get the holidays for a given year
const fetchHolidaysByYear = (year) => new Promise(resolve => setTimeout(() => resolve(MOCK_HOLIDAYS.filter(d => d.getFullYear() === year)), 600));
export const DisabledDates = {
    render: () => {
        const [visibleYear, setVisibleYear] = useState(() => new Date().getFullYear());
        const [holidays, setHolidays] = useState([]);
        useEffect(() => {
            fetchHolidaysByYear(visibleYear).then(setHolidays);
        }, [visibleYear]);
        const shouldDisableDate = useCallback((day) => holidays.some(h => isSameDay(h, day)), [holidays]);
        return (_jsx(FormStoryTemplate, { datePickerProps: {
                inputProps: {
                    label: 'Choose date',
                    helperText: 'Disabled specific dates',
                    shouldDisableDate,
                    onYearChange: date => setVisibleYear(date.getFullYear()),
                },
                name: 'myDatePicker',
            } }));
    },
};
const HOLIDAY_SATURDAY = new Date(2026, 3, 4);
const SUNDAY = 0;
const SATURDAY = 6;
export const AllowedWeekendDays = {
    render: () => {
        const shouldDisableDate = useCallback((day) => {
            const dayOfWeek = day.getDay();
            if (dayOfWeek !== SUNDAY && dayOfWeek !== SATURDAY)
                return true;
            if (isSameDay(day, HOLIDAY_SATURDAY))
                return true;
            return false;
        }, []);
        return (_jsx(FormStoryTemplate, { datePickerProps: {
                inputProps: { shouldDisableDate },
                name: 'myDatePicker',
            } }));
    },
};
const TIMEOFF_HOLIDAYS = [
    new Date(2026, 3, 6), // Monday,
    new Date(2026, 3, 20), //Monday,
    new Date(2026, 3, 21), //Tuesday,
];
export const FirstAvailableFromMonday = {
    render: () => {
        const shouldDisableDate = useCallback((day) => {
            const dayOfWeek = day.getDay();
            if (dayOfWeek === SUNDAY || dayOfWeek === SATURDAY)
                return true;
            const monday = startOfWeek(day, { weekStartsOn: 1 });
            const firstAvailable = Array.from({ length: 5 }, (_, i) => addDays(monday, i)).find(candidate => !TIMEOFF_HOLIDAYS.some(h => isSameDay(h, candidate)));
            return firstAvailable ? !isSameDay(day, firstAvailable) : true;
        }, []);
        return (_jsx(FormStoryTemplate, { datePickerProps: {
                inputProps: {
                    label: 'Fecha de inicio',
                    helperText: 'Solo lunes hábiles (o siguiente día hábil si es feriado)',
                    shouldDisableDate,
                    disablePast: true,
                },
                name: 'myDatePicker',
            } }));
    },
};
export const SlotPropsOverride = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myDatePicker: null,
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormDatePicker, { inputProps: {
                    slotProps: {
                        day: {
                            sx: {
                                color: '#2C2C2C',
                                '&.Mui-selected, &.Mui-selected.Mui-focusVisible': {
                                    backgroundColor: '#2C2C2C!important',
                                    color: '#FFFFFF',
                                },
                                '&.MuiPickersDay-today': {
                                    borderColor: '#2C2C2C',
                                },
                            },
                        },
                        actionBar: {
                            sx: {
                                '& .MuiButton-root': {
                                    color: '#2C2C2C',
                                },
                            },
                        },
                    },
                }, name: "myDatePicker" }) }));
    },
};
