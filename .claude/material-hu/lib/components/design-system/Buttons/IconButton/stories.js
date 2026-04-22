import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
const meta = {
    title: 'Design System/Buttons/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    args: {
        children: _jsx(IconInfoCircle, {}),
        disabled: false,
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'tertiary-filled',
                'success',
                'error',
            ],
            table: {
                defaultValue: { summary: 'tertiary' },
            },
        },
        size: {
            control: 'radio',
            options: ['small', 'large'],
            table: {
                defaultValue: { summary: 'large' },
            },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
