import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useMemo, useState } from 'react';
import BarChart from '../../../../../design-system/Charts/BarChart';
import Title from '../../../../../design-system/Title';
import { Box, CircularProgress, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart, } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { generateNullAnnotations } from './utils';
Chart.register(annotationPlugin);
const CHART_HEIGHT = 360;
const AXIS_WIDTH = 35;
const EnpsChart = ({ data, titleSlot, differenceData, headerSlot, navigationSlot, loading, isPreviousData = false, nullDataMessage = 'No data', filteredTooltipPrefix = 'Filtered', totalTooltipPrefix = 'Total', enpsTooltipPrefix = 'eNPS', emptyStateSlot, }) => {
    const theme = useTheme();
    const [footerEl, setFooterEl] = useState(null);
    const [footerWidth, setFooterWidth] = useState(0);
    useLayoutEffect(() => {
        if (!footerEl)
            return;
        const observer = new ResizeObserver(entries => {
            setFooterWidth(entries[0].target.scrollWidth);
        });
        observer.observe(footerEl);
        return () => observer.disconnect();
    }, [footerEl]);
    const annotations = useMemo(() => generateNullAnnotations(data, theme, nullDataMessage), [data, theme, nullDataMessage]);
    const hasDifferenceData = !!differenceData && !!differenceData.length;
    const handleLegendClick = (_event, legendItem, legend) => {
        const clickedIndex = legendItem.datasetIndex ?? 0;
        const chart = legend.chart;
        const datasetCount = chart.data.datasets.length;
        chart.setDatasetVisibility(clickedIndex, !chart.isDatasetVisible(clickedIndex));
        const allHidden = Array.from({ length: datasetCount }, (_, index) => index).every(i => !chart.isDatasetVisible(i));
        if (allHidden) {
            for (let i = 0; i < datasetCount; i++) {
                if (i !== clickedIndex)
                    chart.setDatasetVisibility(i, true);
            }
        }
        chart.update();
    };
    const chartOptions = {
        animation: {
            duration: 0,
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: hasDifferenceData,
                position: 'top',
                align: 'start',
                onClick: handleLegendClick,
            },
            tooltip: {
                displayColors: false,
                yAlign: 'bottom',
                filter: tooltipItem => data[tooltipItem.dataIndex].value !== null,
                callbacks: {
                    title: () => '',
                    label: ctx => {
                        const datasetIndex = ctx.datasetIndex;
                        const dataIndex = ctx.dataIndex;
                        const originalValue = datasetIndex === 0
                            ? data[dataIndex].value
                            : (differenceData?.[dataIndex].value ?? ctx.parsed.y);
                        if (originalValue === null)
                            return nullDataMessage;
                        if (!differenceData || differenceData.length === 0)
                            return `${enpsTooltipPrefix}: ${originalValue}`;
                        return `${datasetIndex === 0 ? filteredTooltipPrefix : totalTooltipPrefix}: ${originalValue}`;
                    },
                },
            },
            annotation: {
                annotations,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: true,
                min: -100,
                max: 100,
                ticks: {
                    stepSize: 50,
                    display: false,
                },
                border: {
                    dash: [4, 4],
                },
                grid: {
                    display: true,
                    drawTicks: false,
                    color: ctx => ctx.tick.value === 0
                        ? theme.palette.new.text.neutral.default
                        : theme.palette.new.border.neutral.default,
                },
            },
        },
    };
    const shadowChartOptions = {
        animation: {
            duration: 0,
        },
        layout: {
            padding: {
                top: hasDifferenceData ? 42 : 0,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                afterFit: ctx => {
                    ctx.width = AXIS_WIDTH;
                },
                min: -100,
                max: 100,
                ticks: {
                    stepSize: 50,
                },
                border: {
                    dash: [4, 4],
                },
                grid: {
                    color: ctx => ctx.tick.value === 0
                        ? theme.palette.new.text.neutral.default
                        : theme.palette.new.border.neutral.default,
                },
            },
        },
    };
    const datasets = useMemo(() => {
        const finalDatasets = [
            {
                label: hasDifferenceData ? filteredTooltipPrefix : totalTooltipPrefix,
                data: data.map(item => {
                    if (item.value === null)
                        return 0;
                    if (item.value === 0)
                        return 1;
                    return item.value;
                }),
                backgroundColor: theme.palette.newBase?.brand[500],
                borderRadius: 4,
                borderSkipped: 'start',
            },
        ];
        if (differenceData) {
            finalDatasets.push({
                label: totalTooltipPrefix,
                data: differenceData.map((item, index) => {
                    if (data[index].value === null)
                        return 0;
                    if (item.value === null)
                        return 0;
                    if (item.value === 0)
                        return 1;
                    return item.value;
                }),
                backgroundColor: theme.palette.newBase?.skyBlue[600],
                borderRadius: 4,
                borderSkipped: 'start',
            });
        }
        return finalDatasets;
    }, [data, differenceData, theme, filteredTooltipPrefix, totalTooltipPrefix]);
    const shadowDataset = useMemo(() => {
        const finalDatasets = [
            {
                data: data.map(item => item.value),
            },
        ];
        if (differenceData) {
            finalDatasets.push({
                data: differenceData.map(item => item.value),
            });
        }
        return finalDatasets;
    }, [data, differenceData]);
    const chartData = {
        labels: data.map(item => item.label),
        datasets,
    };
    const shadowChartData = {
        labels: data.map(item => item.label),
        datasets: shadowDataset,
    };
    return (_jsxs(Stack, { sx: {
            width: '100%',
            p: 2,
            gap: 2,
            border: `1px solid ${theme.palette.new.border.neutral.default}`,
            backgroundColor: theme.palette.new.background.layout.tertiary,
            borderRadius: 2,
        }, children: [titleSlot && (_jsx(Title, { title: titleSlot, variant: "L" })), headerSlot, loading && (_jsx(Stack, { sx: {
                    height: CHART_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                }, children: _jsx(CircularProgress, {}) })), !loading && data.length === 0 && emptyStateSlot, !loading && data.length > 0 && (_jsxs(Stack, { sx: {
                    height: '100%',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'flex-start',
                    overflowX: 'auto',
                    backgroundColor: theme.palette.new.background.layout.tertiary,
                    opacity: isPreviousData ? 0.5 : 1,
                    transition: theme.transitions.create(['opacity'], {
                        duration: theme.transitions.duration.short,
                    }),
                }, children: [_jsx(Box, { sx: {
                            position: 'sticky',
                            left: 0,
                            top: 0,
                            backgroundColor: theme.palette.new.background.layout.tertiary,
                            zIndex: 1,
                            height: CHART_HEIGHT,
                            width: AXIS_WIDTH,
                        }, children: _jsx(BarChart, { type: "bar", data: shadowChartData, options: shadowChartOptions }) }), _jsxs(Stack, { sx: {
                            width: '100%',
                        }, children: [_jsx(Box, { sx: {
                                    height: CHART_HEIGHT,
                                    width: footerWidth || undefined,
                                }, children: _jsx(BarChart, { type: "bar", data: chartData, options: chartOptions, plugins: [annotationPlugin] }) }), _jsx(Box, { ref: setFooterEl, sx: { py: 1.5 }, children: navigationSlot })] })] }))] }));
};
export default EnpsChart;
