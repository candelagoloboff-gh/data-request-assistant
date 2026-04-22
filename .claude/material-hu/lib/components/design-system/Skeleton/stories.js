import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import Skeleton from '.';
const meta = {
    component: Skeleton,
    title: 'Design System/Skeleton',
    tags: ['autodocs'],
    args: {
        children: (_jsx(Typography, { p: 1, children: "Lorem ipsum odor amet, consectetuer adipiscing elit." })),
        // Default component values manually set here to show the default values in the controls table
        isLoading: true,
        variant: 'rounded',
    },
    argTypes: {
        children: { control: { disable: true } },
        isLoading: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        variant: {
            control: 'radio',
            options: ['rectangular', 'circular', 'rounded', 'text'],
            table: {
                defaultValue: { summary: 'rounded' },
            },
        },
        width: {
            control: 'number',
            min: 0,
            table: {
                type: { summary: 'number' },
            },
        },
        height: {
            control: 'number',
            min: 0,
            table: {
                type: { summary: 'number' },
            },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const NotLoading = {
    args: {
        isLoading: false,
    },
};
export const Rectangular = {
    args: {
        variant: 'rectangular',
    },
};
export const CircularWithFixedDimensions = {
    args: {
        variant: 'circular',
        width: 60,
        height: 60,
    },
};
export const RoundedWithFixedDimensions = {
    args: {
        variant: 'rounded',
        width: 210,
        height: 60,
    },
};
