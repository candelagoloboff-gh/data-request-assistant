import { jsx as _jsx } from "react/jsx-runtime";
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const SingleStackedBarChart = ({ data: rawData, showMarkers, showLegend, height, showDataLabel, showTooltipPercentage, showDataLabelPercentage, sx, }) => {
    const data = rawData.filter(d => d.value);
    const total = data.reduce((sum, { value }) => sum + value, 0);
    const BAR_THICKNESS = Math.max(1, height);
    const MIN_CANVAS_HEIGHT = 28; // ensure enough space for tooltip rendering
    const TOOLTIP_CANVAS_PADDING = Math.max(0, MIN_CANVAS_HEIGHT - BAR_THICKNESS);
    const CANVAS_HEIGHT = BAR_THICKNESS + TOOLTIP_CANVAS_PADDING;
    const labels = [''];
    const lightenColor = (hex, amount = 0.15) => {
        const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!match)
            return hex;
        const [r, g, b] = [1, 2, 3].map(i => parseInt(match[i], 16));
        const lighten = (c) => Math.min(255, Math.round(c + (255 - c) * amount));
        return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
    };
    const getBorderRadiusForIndex = (i) => {
        if (data.length === 1) {
            return {
                topLeft: 4,
                topRight: 4,
                bottomLeft: 4,
                bottomRight: 4,
            };
        }
        if (i === 0) {
            return { topLeft: 4, bottomLeft: 4 };
        }
        if (i === data.length - 1) {
            return { topRight: 4, bottomRight: 4 };
        }
        return 0;
    };
    const datasets = data.map((d, i) => ({
        label: d.label,
        data: [d.value],
        backgroundColor: d.color,
        hoverBackgroundColor: lightenColor(d.color, 0.18),
        borderColor: '#fff',
        borderWidth: 1,
        borderSkipped: false,
        barThickness: BAR_THICKNESS,
        borderRadius: getBorderRadiusForIndex(i),
    }));
    const options = {
        indexAxis: 'y',
        responsive: true,
        resizeDelay: 0,
        maintainAspectRatio: false,
        animation: false,
        layout: { padding: 0 },
        scales: {
            x: {
                stacked: true,
                display: false,
                grid: { display: false },
                border: { display: false },
            },
            y: {
                stacked: true,
                display: false,
                grid: { display: false },
                border: { display: false },
            },
        },
        plugins: {
            legend: {
                display: Boolean(showLegend),
                position: 'bottom',
                labels: {
                    boxWidth: showMarkers ? 12 : 0,
                    boxHeight: showMarkers ? 12 : 0,
                },
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    title: () => '',
                    label: ctx => {
                        const value = ctx.parsed?.x || 0;
                        const labelPrefix = ctx.dataset?.label
                            ? `${ctx.dataset.label}: `
                            : '';
                        if (!total)
                            return `${labelPrefix}${String(value)}`;
                        const text = showTooltipPercentage
                            ? `${Math.floor((100 * value) / total)}%`
                            : String(value);
                        return `${labelPrefix}${text}`;
                    },
                },
            },
            datalabels: {
                display: Boolean(showDataLabel),
                formatter: (_val, ctx) => {
                    const v = ctx.dataset.data?.[0] || 0;
                    if (!total)
                        return String(v);
                    return showDataLabelPercentage
                        ? `${Math.floor((100 * v) / total)}%`
                        : String(v);
                },
                anchor: 'center',
                align: 'center',
                color: '#111',
                clip: false,
            },
        },
        elements: {
            bar: {
                borderSkipped: false,
            },
        },
    };
    const chartData = {
        labels,
        datasets: datasets,
    };
    return (_jsx(Box, { sx: { width: '100%', minWidth: 0, flex: '1 1 0%', ...sx }, children: _jsx(Bar, { options: options, data: chartData, height: CANVAS_HEIGHT, plugins: [ChartDataLabels] }) }));
};
export default SingleStackedBarChart;
