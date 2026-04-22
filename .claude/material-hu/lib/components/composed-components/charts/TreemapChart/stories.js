import { jsx as _jsx } from "react/jsx-runtime";
import { colorPalette } from '../../../../theme/hugo/colors';
import TreemapChart from '.';
const meta = {
    component: TreemapChart,
    title: 'Composed Components/Charts/TreemapChart',
    tags: ['autodocs'],
    args: {
        data: {
            datasets: [
                {
                    label: 'Products',
                    tree: [
                        { label: 'Product A', value: 45 },
                        { label: 'Product B', value: 30 },
                        { label: 'Product C', value: 15 },
                        { label: 'Product D', value: 10 },
                    ],
                    key: 'value',
                    groups: ['label'],
                    spacing: 1,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.skyBlue[500],
                        ];
                        return colors[ctx.dataIndex % colors.length];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => ctx.raw?.label || '',
                        color: '#fff',
                        font: { size: 14, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
        options: {
            plugins: {
                legend: { display: false },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (items) => items[0]?.raw?.label || '',
                        label: (item) => `Value: ${item.raw?.value || 0}`,
                    },
                },
            },
        },
    },
};
export default meta;
export const Default = {
    render: args => _jsx(TreemapChart, { ...args }),
};
export const WithCustomColors = {
    args: {
        data: {
            datasets: [
                {
                    label: 'Departments',
                    tree: [
                        { label: 'Sales', value: 120 },
                        { label: 'Marketing', value: 80 },
                        { label: 'Engineering', value: 150 },
                        { label: 'Support', value: 50 },
                    ],
                    key: 'value',
                    groups: ['label'],
                    spacing: 1,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.skyBlue[500],
                        ];
                        return colors[ctx.dataIndex];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => ctx.raw?.label || '',
                        color: '#fff',
                        font: { size: 14, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
    },
};
export const LargeDataset = {
    args: {
        data: {
            datasets: [
                {
                    label: 'Categories',
                    tree: Array.from({ length: 12 }, (_, i) => ({
                        label: `Category ${i + 1}`,
                        value: Math.floor(Math.random() * 100) + 20,
                    })),
                    key: 'value',
                    groups: ['label'],
                    spacing: 1,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.skyBlue[500],
                            colorPalette.newBase.sunshine[500],
                            colorPalette.newBase.pink[500],
                        ];
                        return colors[ctx.dataIndex % colors.length];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => ctx.raw?.label || '',
                        color: '#fff',
                        font: { size: 12, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
        },
    },
};
export const WithPercentageLabels = {
    args: {
        data: {
            datasets: [
                {
                    label: 'Products',
                    tree: [
                        { label: 'Product A', value: 45 },
                        { label: 'Product B', value: 30 },
                        { label: 'Product C', value: 15 },
                        { label: 'Product D', value: 10 },
                    ],
                    key: 'value',
                    groups: ['label'],
                    spacing: 1,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.skyBlue[500],
                        ];
                        return colors[ctx.dataIndex % colors.length];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => {
                            if (!ctx.raw)
                                return '';
                            const total = 100;
                            const percentage = Math.round((ctx.raw.value / total) * 100);
                            return `${ctx.raw.label}\n${percentage}%`;
                        },
                        color: '#fff',
                        font: { size: 14, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
        options: {
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (items) => items[0]?.raw?.label || '',
                        label: (item) => {
                            const total = 100;
                            const value = item.raw?.value || 0;
                            const percentage = Math.round((value / total) * 100);
                            return `${percentage}% (${value})`;
                        },
                    },
                },
            },
        },
    },
};
export const CompactSpacing = {
    args: {
        data: {
            datasets: [
                {
                    label: 'Products',
                    tree: [
                        { label: 'Product A', value: 45 },
                        { label: 'Product B', value: 30 },
                        { label: 'Product C', value: 15 },
                        { label: 'Product D', value: 10 },
                    ],
                    key: 'value',
                    groups: ['label'],
                    spacing: 0,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.skyBlue[500],
                        ];
                        return colors[ctx.dataIndex % colors.length];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => ctx.raw?.label || '',
                        color: '#fff',
                        font: { size: 14, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
    },
};
export const LargeSpacing = {
    args: {
        data: {
            datasets: [
                {
                    label: 'Products',
                    tree: [
                        { label: 'Product A', value: 45 },
                        { label: 'Product B', value: 30 },
                        { label: 'Product C', value: 15 },
                        { label: 'Product D', value: 10 },
                    ],
                    key: 'value',
                    groups: ['label'],
                    spacing: 8,
                    borderWidth: 0,
                    borderRadius: 4,
                    backgroundColor: (ctx) => {
                        if (!ctx.raw)
                            return colorPalette.newBase.brand[500];
                        const colors = [
                            colorPalette.newBase.brand[500],
                            colorPalette.newBase.purple[500],
                            colorPalette.newBase.green[500],
                            colorPalette.newBase.skyBlue[500],
                        ];
                        return colors[ctx.dataIndex % colors.length];
                    },
                    labels: {
                        display: true,
                        formatter: (ctx) => ctx.raw?.label || '',
                        color: '#fff',
                        font: { size: 14, weight: 'bold' },
                        position: 'top',
                    },
                },
            ],
        },
    },
};
