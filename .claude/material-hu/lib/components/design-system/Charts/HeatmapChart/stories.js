import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { colorPalette } from '../../../../theme/hugo/colors';
import HeatmapChart from '.';
const meta = {
    component: HeatmapChart,
    title: 'Design System/Charts/HeatmapChart',
    tags: ['autodocs'],
    argTypes: {
        rows: { control: 'number' },
        cols: { control: 'number' },
        colors: { control: false },
        xLabels: { control: false },
        yLabels: { control: false },
        xAxisTitle: { control: 'text' },
        yAxisTitle: { control: 'text' },
        height: { control: 'number' },
        children: { control: false },
    },
};
export default meta;
export const Default = {
    args: {
        rows: 3,
        cols: 3,
        colors: [
            [
                colorPalette.base.blueBrand[100],
                colorPalette.base.blueBrand[200],
                colorPalette.base.blueBrand[400],
            ],
            [
                colorPalette.base.blueBrand[200],
                colorPalette.base.blueBrand[400],
                colorPalette.base.blueBrand[600],
            ],
            [
                colorPalette.base.blueBrand[400],
                colorPalette.base.blueBrand[600],
                colorPalette.base.blueBrand[800],
            ],
        ],
        xLabels: ['Low', 'Medium', 'High'],
        yLabels: ['Category A', 'Category B', 'Category C'],
        height: 400,
    },
    decorators: Story => (_jsx(Box, { width: 600, children: _jsx(Story, {}) })),
};
export const WithAxisTitles = {
    args: {
        rows: 3,
        cols: 4,
        colors: [
            [
                colorPalette.base.lilac[100],
                colorPalette.base.lilac[200],
                colorPalette.base.lilac[400],
                colorPalette.base.lilac[600],
            ],
            [
                colorPalette.base.lilac[200],
                colorPalette.base.lilac[400],
                colorPalette.base.lilac[600],
                colorPalette.base.lilac[800],
            ],
            [
                colorPalette.base.lilac[400],
                colorPalette.base.lilac[600],
                colorPalette.base.lilac[800],
                colorPalette.base.lilac[800],
            ],
        ],
        xLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
        yLabels: ['2023', '2024', '2025'],
        xAxisTitle: 'Quarter',
        yAxisTitle: 'Year',
        height: 500,
    },
    decorators: Story => (_jsx(Box, { width: 700, children: _jsx(Story, {}) })),
};
