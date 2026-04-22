import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Divider, Stack } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormInputTime from './form';
import InputTime from '.';
const meta = {
    component: InputTime,
    title: 'Design System/Inputs/Time',
    tags: ['autodocs'],
    args: {
        label: 'Label',
        helperText: 'Helper text',
        placeholder: 'hh:mm',
        value: null,
    },
    parameters: {
        docs: {
            description: {
                component: 'Time input component for selecting a timestamp (HH:mm). Supports both manual ' +
                    'keyboard entry and dropdown selection via `MultiSectionDigitalClock`. Wraps MUI ' +
                    '`TimePicker` with design-system styling, custom icons, and optional AM/PM toggle. ' +
                    'Includes a `FormInputTime` variant for react-hook-form integration.',
            },
        },
    },
    argTypes: {
        value: {
            description: 'The currently selected time.',
            control: false,
            table: { type: { summary: 'Date | null' } },
        },
        onChange: {
            description: 'Callback fired when the value changes.',
            control: false,
            table: {
                type: {
                    summary: '(value: Date | null, context: PickerChangeHandlerContext<TimeValidationError>) => void',
                },
            },
        },
        label: {
            description: 'Label displayed above the input.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        helperText: {
            description: 'Helper text shown below the input.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        errorText: {
            description: 'Error message shown when `error` is true.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        error: {
            description: 'Applies error styling and shows errorText.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            description: 'Prevents user interaction.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        size: {
            description: 'Input size variant.',
            control: { type: 'select' },
            options: ['small', 'medium'],
            table: {
                type: { summary: "'small' | 'medium'" },
                defaultValue: { summary: "'medium'" },
            },
        },
        placeholder: {
            description: 'Placeholder text when the input is empty.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        noIcon: {
            description: 'Hides the clock icon. When true, the dropdown can only be opened programmatically.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        ampm: {
            description: 'Enables 12-hour format with AM/PM toggle in the dropdown.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        minutesStep: {
            description: 'Step interval for minute options in the dropdown.',
            control: { type: 'number' },
            table: { type: { summary: 'number' }, defaultValue: { summary: '5' } },
        },
        fullWidth: {
            description: 'Makes the input expand to fill its container width.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        hideErrorText: {
            description: 'Hides the error message even when `error` is true.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        referenceDate: {
            description: 'Date used to combine year-month-day with the selected time. The output Date preserves this reference.',
            control: false,
            table: {
                type: { summary: 'Date' },
                defaultValue: { summary: 'new Date()' },
            },
        },
        minTime: {
            description: 'Minimum selectable time. Disables options before this time in the dropdown.',
            control: false,
            table: { type: { summary: 'Date' } },
        },
        maxTime: {
            description: 'Maximum selectable time. Disables options after this time in the dropdown.',
            control: false,
            table: { type: { summary: 'Date' } },
        },
        timezone: {
            description: 'IANA timezone string used for `disablePast`/`disableFuture` calculations.',
            control: false,
            table: { type: { summary: 'string' } },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root `FormControl`.',
            control: false,
            table: { type: { summary: 'SxProps' } },
        },
        slotProps: {
            description: 'Props forwarded to the underlying MUI TimePicker slot components.',
            control: false,
            table: { type: { summary: "TimePickerProps['slotProps']" } },
        },
    },
    render: props => {
        const [value, setValue] = useState(props.value);
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(InputTime, { ...props, value: value, onChange: setValue }) }));
    },
    decorators: [
        Story => (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        label: 'Label',
        helperText: 'Helper text',
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Default state with label, helper text, and placeholder.',
            },
        },
    },
};
export const WithValue = {
    args: {
        label: 'Select time',
        helperText: 'Choose a time',
        placeholder: 'hh:mm',
        value: new Date(2024, 0, 1, 14, 30),
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Pre-filled with 14:30. The input shows the formatted time and the clear button appears on focus.',
            },
        },
    },
};
export const Small = {
    args: {
        label: 'Small',
        size: 'small',
        placeholder: 'hh:mm',
        sx: { width: 200 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Compact variant with reduced height and icon sizes. Helper text is hidden in small size.',
            },
        },
    },
};
export const Disabled = {
    args: {
        label: 'Disabled',
        disabled: true,
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Disabled state. The input is not interactive and has a muted background.',
            },
        },
    },
};
export const WithError = {
    args: {
        label: 'Time with error',
        error: true,
        errorText: 'This field is required',
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Error state with a red border and error message. An exclamation icon appears in the end adornment.',
            },
        },
    },
};
export const FullWidth = {
    args: {
        label: 'Full width',
        helperText: 'Helper text',
        fullWidth: true,
        placeholder: 'hh:mm',
    },
    parameters: {
        docs: {
            description: {
                story: 'Expands to fill the parent container width. The dropdown matches the input width.',
            },
        },
    },
};
export const MinutesStep1 = {
    args: {
        label: 'Minutes step: 1',
        helperText: 'Every minute is selectable',
        minutesStep: 1,
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Minute options show every minute (00–59) instead of the default 5-minute intervals.',
            },
        },
    },
};
export const NoIcon = {
    args: {
        label: 'Without clock icon',
        helperText: 'Manual input only, no dropdown',
        noIcon: true,
        placeholder: 'hh:mm',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Hides the clock icon. The user can only type the time manually. No dropdown is accessible.',
            },
        },
    },
};
export const WithAmPm = {
    args: {
        label: 'Time (12h)',
        helperText: 'AM/PM selector at the top of the dropdown',
        ampm: true,
        placeholder: 'hh:mm aa',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: '12-hour format with a ButtonGroup toggle for AM/PM at the top of the dropdown. ' +
                    'Hours range from 01–12.',
            },
        },
    },
};
export const WithAmPmAndValue = {
    args: {
        label: 'Time (12h)',
        helperText: '2:30 PM pre-filled',
        ampm: true,
        value: new Date(2024, 0, 1, 14, 30),
        placeholder: 'hh:mm aa',
        sx: { width: 300 },
    },
    parameters: {
        docs: {
            description: {
                story: '12-hour format pre-filled with 2:30 PM. The PM button is selected in the dropdown.',
            },
        },
    },
};
const FormStoryTemplate = ({ defaultValues, inputTimeProps, }) => {
    const form = useForm({
        defaultValues: defaultValues || { time: null },
        mode: 'onChange',
    });
    return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(form.watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsx(FormInputTime, { ...inputTimeProps }) })] }));
};
export const FormDefault = {
    render: () => (_jsx(FormStoryTemplate, { inputTimeProps: {
            name: 'time',
            inputProps: {
                label: 'Label',
                helperText: 'Helper text',
                placeholder: 'hh:mm',
                sx: { width: 300 },
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Integration with react-hook-form via `FormInputTime` and `Controller`.',
            },
        },
    },
};
export const FormWithReferenceDate = {
    render: () => (_jsx(FormStoryTemplate, { inputTimeProps: {
            name: 'time',
            inputProps: {
                label: 'Select time',
                helperText: 'Reference date: 01/10/2025',
                placeholder: 'hh:mm',
                referenceDate: new Date('2025-10-01T00:00:00'),
                sx: { width: 300 },
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'The output Date combines the selected time with a custom `referenceDate` (Oct 1, 2025).',
            },
        },
    },
};
const currentDateAt14hs = () => {
    const date = new Date();
    date.setHours(14, 0, 0, 0);
    return date;
};
export const FormError = {
    render: () => {
        const form = useForm({
            defaultValues: { time: null },
            mode: 'onChange',
        });
        return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(form.watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: { flexDirection: 'row', gap: 2 }, children: [_jsx(FormInputTime, { name: "time", inputProps: {
                                    label: 'With error text',
                                    placeholder: 'hh:mm',
                                    helperText: 'Choose an hour before 14:00',
                                }, rules: {
                                    validate: {
                                        timeBefore14hs: (value) => value < currentDateAt14hs() || 'Hour must be before 14:00',
                                    },
                                } }), _jsx(FormInputTime, { name: "time", inputProps: {
                                    label: 'Without error text',
                                    placeholder: 'hh:mm',
                                    helperText: 'Choose an hour before 14:00',
                                    hideErrorText: true,
                                }, rules: {
                                    validate: {
                                        timeBefore14hs: (value) => value < currentDateAt14hs() || 'Hour must be before 14:00',
                                    },
                                } })] }) })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Validation example: times after 14:00 trigger an error. Left shows the error message, ' +
                    'right hides it with `hideErrorText`.',
            },
        },
    },
};
