import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import ProgressCircle from '.';
const meta = {
    component: ProgressCircle,
    title: 'Composed Components/Charts/ProgressCircle',
    tags: ['autodocs'],
    args: {
        current: 25,
        copetin: 'Copetin',
        title: 'Title here',
        description: 'Some description',
    },
    argTypes: {
        color: {
            control: { type: 'color' },
        },
        decimalPrecision: {
            options: [0, 1, 2],
            control: { type: 'radio' },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const NoText = {
    args: {
        copetin: undefined,
        title: undefined,
        description: undefined,
    },
};
export const DecimalPrecision = {
    args: {
        decimalPrecision: 2,
    },
};
export const Color = {
    render: args => {
        const theme = useTheme();
        return (_jsx(ProgressCircle, { ...args, color: theme.palette.newBase?.green[600] }));
    },
    args: {},
};
export const Loading = {
    args: {
        loading: true,
    },
};
