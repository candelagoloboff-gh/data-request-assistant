import { jsx as _jsx } from "react/jsx-runtime";
import SingleStackedBarChart from '.';
const meta = {
    component: SingleStackedBarChart,
    title: 'Composed Components/Charts/SingleStackedBarChart',
    tags: ['autodocs'],
    args: {
        data: [
            { label: 'Green', value: 10, color: 'oklch(79.2% 0.209 151.711)' },
            { label: 'Blue', value: 20, color: 'oklch(70.7% 0.165 254.624)' },
            { label: 'Red', value: 30, color: 'oklch(63.7% 0.237 25.331)' },
        ],
        height: 50,
        showTooltipPercentage: true,
    },
};
export default meta;
export const Default = {
    render: args => {
        return _jsx(SingleStackedBarChart, { ...args });
    },
};
