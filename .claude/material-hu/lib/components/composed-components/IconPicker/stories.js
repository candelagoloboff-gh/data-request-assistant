import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack, Typography } from '@mui/material';
import FormIconPicker from './form';
import { DEFAULT_VALUE, DEMO_OPTIONS, DEMO_TEXT, EMOJI_DEFAULT_VALUE, SPANISH_TEXT, } from './mocks';
import { IconPickerTab } from './types';
import IconPicker from '.';
const meta = {
    component: IconPicker,
    title: 'Composed Components/IconPicker',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A controlled picker that lets the user select an image icon or emoji. Supports custom image grids, emoji browsing, and optional file upload with built-in cropping.',
            },
        },
    },
    argTypes: {
        value: {
            description: 'Currently selected icon (`IconInterface | null`).',
            control: false,
        },
        onChange: {
            description: 'Callback fired when the selection changes.',
            action: 'onChange',
        },
        imageOptions: {
            description: 'Array of `ImageIconOption` objects for the images tab.',
            control: false,
        },
        onUpload: {
            description: 'Optional callback receiving the cropped `File` after the user uploads a custom icon.',
            action: 'onUpload',
        },
        text: {
            description: 'Translated strings for tabs and cropping modal (required, provided by host app).',
            control: 'object',
        },
        tabs: {
            description: 'Which tabs to show. Defaults to `["icons", "emojis"]`.',
            options: [
                [IconPickerTab.ICONS, IconPickerTab.EMOJIS],
                [IconPickerTab.ICONS],
                [IconPickerTab.EMOJIS],
            ],
            control: { type: 'select' },
        },
        disabled: {
            description: 'Disables the trigger button.',
            control: 'boolean',
        },
        sx: {
            description: 'Styles applied to the trigger button root element.',
            control: false,
        },
        slotProps: {
            description: 'Props forwarded to internal subcomponents (menu).',
            control: false,
        },
    },
    args: {
        imageOptions: DEMO_OPTIONS,
        text: DEMO_TEXT,
        disabled: false,
    },
};
export default meta;
export const Default = {
    render: args => {
        const [value, setValue] = useState(DEFAULT_VALUE);
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(IconPicker, { ...args, value: value, onChange: icon => {
                        setValue(icon);
                        args.onChange?.(icon);
                    } }), _jsxs(Typography, { variant: "globalXS", children: ["Selected: ", value?.type, " \u2014 ", value?.value?.slice(0, 50)] })] }));
    },
};
export const EmojisOnly = {
    render: args => {
        const [value, setValue] = useState(EMOJI_DEFAULT_VALUE);
        return (_jsx(IconPicker, { ...args, tabs: [IconPickerTab.EMOJIS], value: value, onChange: icon => {
                setValue(icon);
                args.onChange?.(icon);
            } }));
    },
};
export const ImagesOnly = {
    render: args => {
        const [value, setValue] = useState(DEFAULT_VALUE);
        return (_jsx(IconPicker, { ...args, tabs: [IconPickerTab.ICONS], value: value, onChange: icon => {
                setValue(icon);
                args.onChange?.(icon);
            }, onUpload: file => {
                console.log('Uploaded file:', file.name);
                args.onUpload?.(file);
            } }));
    },
};
export const Disabled = {
    render: args => (_jsx(IconPicker, { ...args, value: DEFAULT_VALUE, onChange: () => console.debug('[IconPicker] Disabled | onChange'), disabled: true })),
};
export const SpanishText = {
    render: args => {
        const [value, setValue] = useState(DEFAULT_VALUE);
        return (_jsx(IconPicker, { ...args, value: value, onChange: setValue, text: SPANISH_TEXT, onUpload: file => console.log('Upload:', file.name) }));
    },
};
export const WithForm = {
    render: args => {
        const form = useForm({
            defaultValues: { icon: DEFAULT_VALUE },
        });
        return (_jsx(FormProvider, { ...form, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormIconPicker, { name: "icon", inputProps: {
                            text: DEMO_TEXT,
                            imageOptions: args.imageOptions,
                            onUpload: file => console.log('Upload:', file.name),
                        } }), _jsxs(Typography, { variant: "globalXS", children: ["Form value: ", JSON.stringify(form.watch('icon'))] })] }) }));
    },
};
