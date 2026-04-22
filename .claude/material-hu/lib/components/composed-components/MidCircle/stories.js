import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import MidCircle from '.';
const meta = {
    component: MidCircle,
    title: 'Composed Components/Charts/MidCircle',
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
        return (_jsx(MidCircle, { ...args, color: theme.palette.newBase?.green[600] }));
    },
    args: {},
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const NoTextLoading = {
    args: {
        copetin: undefined,
        title: undefined,
        description: undefined,
        loading: true,
    },
};
