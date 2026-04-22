import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import ProgressBar from '.';
const meta = {
    component: ProgressBar,
    title: 'Design System/Progress Indicators/ProgressBar',
    tags: ['autodocs'],
    args: {
        current: 25,
        variant: 'indeterminate',
        title: 'Title here',
        description: 'Some description',
    },
    argTypes: {
        variant: {
            options: ['determinate', 'indeterminate'],
            control: { type: 'radio' },
        },
        hasPercentage: {
            control: { type: 'boolean' },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Determinate = {
    args: {
        variant: 'determinate',
    },
};
export const DeterminateHeight = {
    args: {
        variant: 'determinate',
        progressHeight: 8,
    },
};
export const Percentage = {
    args: {
        hasPercentage: true,
        variant: 'determinate',
    },
};
export const HelperAsString = {
    args: {
        helper: 'Some extra help',
    },
};
export const HelperAsComponent = {
    args: {
        helper: (_jsxs(Stack, { sx: { gap: 0.5, flexDirection: 'row', alignItems: 'center' }, children: [_jsx(Typography, { variant: "globalXXS", children: "Typography component" }), _jsx(Typography, { variant: "globalXXS", fontWeight: "fontWeightSemiBold", children: "Typography component with bold text" })] })),
    },
};
export const NoText = {
    args: {
        title: undefined,
        description: undefined,
    },
};
