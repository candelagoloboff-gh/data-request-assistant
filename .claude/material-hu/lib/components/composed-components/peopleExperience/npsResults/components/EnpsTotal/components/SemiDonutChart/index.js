import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DonutChart from '../../../../../../../design-system/Charts/DonutChart';
import Tooltip from '../../../../../../../design-system/Tooltip';
import { Stack, Typography } from '@mui/material';
import { colorPalette } from '../../../../../../../../theme/hugo/colors';
import { calculateFillPercentage } from './utils';
const FALLBACK_NULL_VALUE = -100;
const SemiDonutChart = ({ value, nullValueTooltip, slotProps, }) => {
    const fillPercentage = calculateFillPercentage(value || FALLBACK_NULL_VALUE);
    const options = {
        rotation: -90,
        circumference: 180,
        cutout: '80%',
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
            datalabels: { display: false },
        },
        maintainAspectRatio: false,
    };
    return (_jsxs(Stack, { ...slotProps?.root, sx: {
            position: 'relative',
            height: 120,
            pb: 2,
            flexShrink: 0,
            flexGrow: 0,
            boxSizing: 'border-box',
            '& canvas:nth-of-type(2)': { position: 'absolute', top: 0 },
            ...slotProps?.root?.sx,
        }, children: [_jsx(DonutChart, { type: "doughnut", data: {
                    datasets: [
                        {
                            data: [100],
                            backgroundColor: [colorPalette.newBase.brand[100]],
                            borderWidth: 0,
                            borderRadius: 50,
                        },
                    ],
                }, options: { ...options, animation: false } }), _jsx(DonutChart, { type: "doughnut", data: {
                    datasets: [
                        {
                            data: [fillPercentage, 100 - fillPercentage],
                            backgroundColor: [colorPalette.newBase.brand[500], 'transparent'],
                            borderWidth: 0,
                            borderRadius: 50,
                        },
                    ],
                }, options: options }), _jsx(Stack, { sx: {
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }, children: _jsx(Tooltip, { description: nullValueTooltip, disableTooltip: value !== null || !nullValueTooltip, children: _jsx(Typography, { variant: "globalXL", fontWeight: "fontWeightSemiBold", children: value ?? '--' }) }) }), _jsx(Typography, { variant: "globalXS", sx: {
                    position: 'absolute',
                    left: 40,
                    bottom: -8,
                    color: theme => theme.palette.new.text.neutral.lighter,
                }, children: "-100" }), _jsx(Typography, { variant: "globalXS", sx: {
                    position: 'absolute',
                    right: 44,
                    bottom: -8,
                    color: theme => theme.palette.new.text.neutral.lighter,
                }, children: "100" })] }));
};
export default SemiDonutChart;
