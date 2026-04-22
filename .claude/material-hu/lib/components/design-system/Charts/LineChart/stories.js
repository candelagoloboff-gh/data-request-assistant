import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { colorPalette } from '../../../../theme/hugo/colors';
import DonutChart from '.';
const meta = {
    component: DonutChart,
    title: 'Design System/Charts/LineChart',
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Example A',
                    data: [15, 24, 36, 23, 55, 10, 40],
                    backgroundColor: colorPalette.base.blueBrand[400],
                    borderColor: colorPalette.base.blueBrand[400],
                },
            ],
        },
    },
    decorators: Story => (_jsx(Box, { width: 500, children: _jsx(Story, {}) })),
};
