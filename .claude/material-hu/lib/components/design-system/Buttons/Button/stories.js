import { jsx as _jsx } from "react/jsx-runtime";
import { IconInfoCircle } from '@tabler/icons-react';
import Button from '.';
const meta = {
    title: 'Design System/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
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
        startIcon: {
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        endIcon: {
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Shows loading spinner',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Icons = {
    args: {
        startIcon: _jsx(IconInfoCircle, {}),
        endIcon: _jsx(IconInfoCircle, {}),
        variant: 'primary',
    },
};
export const Loading = {
    args: {
        loading: true,
        variant: 'primary',
        children: 'Loading...',
    },
};
export const DisabledPrimary = {
    args: {
        disabled: true,
        variant: 'primary',
        children: 'Disabled',
    },
};
export const DisabledSecondary = {
    args: {
        disabled: true,
        variant: 'secondary',
        children: 'Disabled',
    },
};
export const DisabledTertiary = {
    args: {
        disabled: true,
        variant: 'tertiary',
        children: 'Disabled',
    },
};
export const DisabledTertiaryFilled = {
    args: {
        disabled: true,
        variant: 'tertiary-filled',
        children: 'Disabled',
    },
};
export const DisabledSuccess = {
    args: {
        disabled: true,
        variant: 'success',
        children: 'Disabled',
    },
};
export const DisabledError = {
    args: {
        disabled: true,
        variant: 'error',
        children: 'Disabled',
    },
};
