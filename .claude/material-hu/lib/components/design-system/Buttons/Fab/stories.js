import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Fab } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
const children = (_jsxs(_Fragment, { children: ["Nuevo ", _jsx(IconPlus, {})] }));
const meta = {
    title: 'Design System/Buttons/Fab',
    component: Fab,
    tags: ['autodocs'],
    args: {
        children,
        disabled: false,
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['circular'],
            table: {
                defaultValue: { summary: 'circular' },
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
export const NoTextSmall = {
    args: {
        children: _jsx(IconPlus, {}),
        size: 'small',
    },
};
export const NoTextSmallDisabled = {
    args: {
        children: _jsx(IconPlus, {}),
        size: 'small',
        disabled: true,
    },
};
export const NoTextLarge = {
    args: {
        children: _jsx(IconPlus, {}),
    },
};
export const NoTextLargeDisabled = {
    args: {
        children: _jsx(IconPlus, {}),
        disabled: true,
    },
};
