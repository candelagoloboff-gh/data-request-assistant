import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Divider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormInputTimeRange from './form';
import InputTimeRange from '.';
const meta = {
    component: InputTimeRange,
    title: 'Design System/Inputs/TimeRange',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Two `InputTime` fields connected by a translated separator ("to" / "a"). ' +
                    'Shares a single label, helper text, and error state across both inputs. ' +
                    'Value is a tuple `[Date | null, Date | null]`. Includes a `FormInputTimeRange` ' +
                    'variant for react-hook-form integration.',
            },
        },
    },
    argTypes: {
        value: {
            description: 'Tuple of start and end times.',
            control: false,
            table: { type: { summary: '[Date | null, Date | null]' } },
        },
        onChange: {
            description: 'Callback fired when either time changes.',
            control: false,
            table: { type: { summary: '(value: TimeRangeValue) => void' } },
        },
        label: {
            description: 'Label displayed above both inputs.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        helperText: {
            description: 'Helper text shown below the inputs.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        errorText: {
            description: 'Error message shown when `error` is true.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        error: {
            description: 'Applies error styling to both inputs.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            description: 'Disables both inputs.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        fullWidth: {
            description: 'Makes the component expand to fill its container width.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        startProps: {
            description: 'Props forwarded to the start `InputTime` (overrides shared props).',
            control: false,
            table: { type: { summary: 'SharedInputTimeProps' } },
        },
        endProps: {
            description: 'Props forwarded to the end `InputTime` (overrides shared props).',
            control: false,
            table: { type: { summary: 'SharedInputTimeProps' } },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root `FormControl`.',
            control: false,
            table: { type: { summary: 'SxProps' } },
        },
    },
    render: props => {
        const [value, setValue] = useState(props.value);
        return (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(InputTimeRange, { ...props, value: value, onChange: setValue }) }));
    },
    decorators: [
        Story => (_jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        label: 'Time range',
        helperText: 'Select start and end time',
        value: [null, null],
        sx: { width: 400 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Default state with empty start and end times.',
            },
        },
    },
};
export const WithValues = {
    args: {
        label: 'Working hours',
        helperText: '9:00 to 17:00',
        value: [new Date(2024, 0, 1, 9, 0), new Date(2024, 0, 1, 17, 0)],
        sx: { width: 400 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Pre-filled with a 9:00–17:00 range.',
            },
        },
    },
};
export const WithError = {
    args: {
        label: 'Time range',
        error: true,
        errorText: 'End time must be after start time',
        value: [null, null],
        sx: { width: 400 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Error state with error message below both inputs.',
            },
        },
    },
};
export const Disabled = {
    args: {
        label: 'Time range',
        helperText: 'Disabled state',
        disabled: true,
        value: [new Date(2024, 0, 1, 8, 0), new Date(2024, 0, 1, 16, 0)],
        sx: { width: 400 },
    },
    parameters: {
        docs: {
            description: {
                story: 'Both inputs disabled with pre-filled values.',
            },
        },
    },
};
export const FullWidth = {
    args: {
        label: 'Time range',
        helperText: 'Full width',
        fullWidth: true,
        value: [null, null],
    },
    parameters: {
        docs: {
            description: {
                story: 'Expands to fill the parent container width.',
            },
        },
    },
};
const FormStoryTemplate = ({ defaultValues, inputTimeRangeProps, }) => {
    const form = useForm({
        defaultValues: defaultValues || { timeRange: [null, null] },
        mode: 'onChange',
    });
    return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(form.watch(), null, 2) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(FormProvider, { ...form, children: _jsx(FormInputTimeRange, { ...inputTimeRangeProps }) })] }));
};
export const FormDefault = {
    render: () => (_jsx(FormStoryTemplate, { inputTimeRangeProps: {
            name: 'timeRange',
            inputProps: {
                label: 'Time range',
                helperText: 'Select a time range',
                sx: { width: 400 },
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Integration with react-hook-form via `FormInputTimeRange` and `Controller`.',
            },
        },
    },
};
export const FormWithValidation = {
    render: () => (_jsx(FormStoryTemplate, { inputTimeRangeProps: {
            name: 'timeRange',
            inputProps: {
                label: 'Time range',
                helperText: 'Both times are required',
                sx: { width: 400 },
            },
            rules: {
                validate: {
                    bothRequired: (value) => (value[0] !== null && value[1] !== null) ||
                        'Both start and end times are required',
                },
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Validation example: both start and end times must be selected. ' +
                    'Error message appears when submitting with a missing time.',
            },
        },
    },
};
