import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { colorPalette } from '../../../../theme/hugo/colors';
import DonutChart from '.';
const meta = {
    component: DonutChart,
    title: 'Design System/Charts/DonutChart',
    tags: ['autodocs'],
    argTypes: {
        data: { control: false },
        options: { control: false },
        plugins: { control: false },
    },
};
export default meta;
export const Default = {
    args: {
        data: {
            labels: ['Example A', 'Example B'],
            datasets: [
                {
                    data: [44, 55],
                    backgroundColor: [
                        colorPalette.base.blueBrand[200],
                        colorPalette.base.blueBrand[400],
                    ],
                },
            ],
        },
        options: {
            plugins: {
                datalabels: { display: false },
            },
        },
    },
    decorators: Story => (_jsx(Box, { width: 300, height: 300, children: _jsx(Story, {}) })),
};
