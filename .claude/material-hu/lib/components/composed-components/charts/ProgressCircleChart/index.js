import { jsx as _jsx } from "react/jsx-runtime";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Box, useTheme } from '@mui/material';
const ProgressCircleChart = ({ value, color, decimalPrecision = 0, sx = {}, size = 160, fontSize = '24px', }) => {
    const { palette, typography } = useTheme();
    const fillColor = color || palette.new.action.button.background.primary.hover;
    const trackColor = palette.new.background.layout.brand;
    const isComplete = value >= 100;
    const isEmpty = value <= 0;
    const isSingleSegment = isComplete || isEmpty;
    const getChartData = () => {
        if (isComplete)
            return [100];
        if (isEmpty)
            return [100];
        return [value, 100 - value];
    };
    const getBackgroundColors = () => {
        if (isComplete)
            return [fillColor];
        if (isEmpty)
            return [trackColor];
        return [fillColor, trackColor];
    };
    const data = {
        datasets: [
            {
                data: getChartData(),
                backgroundColor: getBackgroundColors(),
                hoverBackgroundColor: getBackgroundColors(),
                borderWidth: 0,
                borderRadius: isSingleSegment ? 0 : 50,
                spacing: 0,
            },
        ],
    };
    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw: chart => {
            const { ctx, width, height } = chart;
            const cutoutPercentage = 0.8; // matches the 80% cutout
            const radius = (Math.min(width, height) / 2) * cutoutPercentage;
            ctx.save();
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = palette.new.background.layout.tertiary;
            ctx.fill();
            ctx.restore();
        },
        afterDraw: chart => {
            const { ctx, width, height } = chart;
            ctx.save();
            const text = `${Number(value).toFixed(decimalPrecision)}%`;
            const globalLTypography = typography.globalL || {};
            const fontFamily = globalLTypography.fontFamily || typography.fontFamily;
            const fontWeight = typography.fontWeightSemiBold ||
                globalLTypography.fontWeight ||
                600;
            ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = palette.text.primary;
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.fillText(text, centerX, centerY);
            ctx.restore();
        },
    };
    const options = {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: true,
        rotation: 0,
        circumference: 360,
        events: [],
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        animation: {
            animateRotate: true,
            animateScale: false,
        },
    };
    return (_jsx(Box, { className: "ProgressCircleChart-root", sx: {
            width: size,
            height: size,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...sx,
        }, children: _jsx(Doughnut, { data: data, options: options, plugins: [centerTextPlugin] }) }));
};
export default ProgressCircleChart;
