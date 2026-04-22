import { jsx as _jsx } from "react/jsx-runtime";
import DonutChart from '../../../design-system/Charts/DonutChart';
import { Stack } from '@mui/material';
const PieChart = ({ values, colors, labels, legend = 'none', }) => {
    const props = {
        type: 'doughnut',
        data: {
            labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderRadius: 4,
                    borderWidth: 0,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            spacing: 2,
            plugins: {
                legend: {
                    display: legend !== 'none',
                    position: legend === 'none' ? 'top' : legend,
                },
            },
        },
    };
    return (_jsx(Stack, { className: "PieChart-root", children: _jsx(DonutChart, { ...props }) }));
};
export default PieChart;
