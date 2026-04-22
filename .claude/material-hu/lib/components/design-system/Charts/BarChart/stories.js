import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { colorPalette } from '../../../../theme/hugo/colors';
import BarChart from '.';
const meta = {
    component: BarChart,
    title: 'Design System/Charts/BarChart',
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
                {
                    label: 'Example B',
                    data: [20, 25, 39, 24, 45, 66, 77],
                    backgroundColor: colorPalette.base.lilac[400],
                    borderColor: colorPalette.base.lilac[400],
                },
            ],
        },
    },
    decorators: Story => (_jsx(Box, { width: 500, children: _jsx(Story, {}) })),
};
