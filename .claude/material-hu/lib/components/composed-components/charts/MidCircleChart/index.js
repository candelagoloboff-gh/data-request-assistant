import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DonutChart from '../../../design-system/Charts/DonutChart';
import { Stack, Typography, useTheme } from '@mui/material';
const MidCircleChart = ({ value, color, decimalPrecision = 0, }) => {
    const { palette } = useTheme();
    const props = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [value, 100 - value],
                    backgroundColor: [
                        color || palette.new.action.button.background.primary.hover,
                        palette.new.background.layout.brand,
                    ],
                    borderColor: [
                        color || palette.new.action.button.background.primary.hover,
                        palette.new.background.layout.brand,
                    ],
                    borderRadius: 4,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            rotation: -90,
            circumference: 180,
            events: [],
            cutout: '80%',
            spacing: value === 0 ? 0 : 6,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
            },
        },
    };
    return (_jsxs(Stack, { sx: { position: 'relative' }, className: "MidCircleChart-root", children: [_jsx(DonutChart, { ...props }), _jsxs(Typography, { variant: "globalL", fontWeight: "fontWeightSemiBold", sx: {
                    position: 'absolute',
                    top: '80%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }, children: [Number(value).toFixed(decimalPrecision), "%"] })] }));
};
export default MidCircleChart;
