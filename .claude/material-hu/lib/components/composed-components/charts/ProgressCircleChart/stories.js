import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography } from '@mui/material';
import ProgressCircleChart from '.';
const meta = {
    component: ProgressCircleChart,
    title: 'Composed Components/Charts/ProgressCircleChart',
    tags: ['autodocs'],
    args: {
        value: 75,
    },
};
export default meta;
export const Default = {
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const LowProgress = {
    args: {
        value: 15,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const MediumProgress = {
    args: {
        value: 50,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const HighProgress = {
    args: {
        value: 85,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const Complete = {
    args: {
        value: 100,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const CustomColor = {
    args: {
        value: 65,
        color: '#9C27B0',
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const WithOneDecimal = {
    args: {
        value: 33.3,
        decimalPrecision: 1,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const WithTwoDecimals = {
    args: {
        value: 66.67,
        decimalPrecision: 2,
    },
    render: args => {
        return _jsx(ProgressCircleChart, { ...args });
    },
};
export const MultipleCharts = {
    render: () => {
        const data = [
            { label: 'Tasks Completed', value: 72, color: '#4CAF50' },
            { label: 'Goals Achieved', value: 45, color: '#2196F3' },
            { label: 'Time Spent', value: 88, color: '#FF9800' },
            { label: 'Budget Used', value: 33, color: '#9C27B0' },
        ];
        return (_jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 4, children: data.map(item => (_jsxs(Box, { sx: {
                    textAlign: 'center',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }, children: [_jsx(ProgressCircleChart, { value: item.value, color: item.color }), _jsx(Typography, { variant: "body2", children: item.label })] }, item.label))) }));
    },
};
export const ColorVariations = {
    render: () => {
        const colors = [
            { name: 'Success', color: '#4CAF50' },
            { name: 'Info', color: '#2196F3' },
            { name: 'Warning', color: '#FF9800' },
            { name: 'Error', color: '#F44336' },
            { name: 'Purple', color: '#9C27B0' },
            { name: 'Teal', color: '#009688' },
        ];
        return (_jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 4, children: colors.map(item => (_jsxs(Box, { sx: {
                    textAlign: 'center',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }, children: [_jsx(ProgressCircleChart, { value: 75, color: item.color }), _jsx(Typography, { variant: "body2", children: item.name })] }, item.name))) }));
    },
};
