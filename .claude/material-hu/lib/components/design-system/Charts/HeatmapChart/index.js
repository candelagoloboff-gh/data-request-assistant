import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { Stack, Typography, useTheme } from '@mui/material';
import { CategoryScale, Chart as ChartJS, Tooltip as ChartTooltip, Legend, LinearScale, } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
ChartJS.register(LinearScale, CategoryScale, ChartTooltip, Legend, MatrixController, MatrixElement);
const HeatmapChart = ({ rows = 3, cols = 3, colors, xLabels = [], yLabels = [], xAxisTitle, yAxisTitle, height = 600, children, }) => {
    const containerRef = useRef(null);
    const chartRef = useRef(null);
    const theme = useTheme();
    const [isReady, setIsReady] = useState(false);
    const [renderKey, setRenderKey] = useState(0);
    const forceUpdate = useCallback(() => setRenderKey(prev => prev + 1), []);
    // Generate matrix data - one entry per cell
    // chartjs-chart-matrix uses {x, y, v} where x/y are category indices
    const matrixData = useMemo(() => {
        const data = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                data.push({
                    x: xLabels[col] || String(col),
                    y: yLabels[row] || String(row),
                    v: row * cols + col,
                });
            }
        }
        return data;
    }, [rows, cols, xLabels, yLabels]);
    const colorMap = useMemo(() => {
        const map = {};
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const value = row * cols + col;
                map[value] =
                    colors[row]?.[col] || theme.palette.new.background.layout.default;
            }
        }
        return map;
    }, [colors, rows, cols]);
    // Get pixel position from grid coordinates (0 to rows/cols)
    const getPixelPosition = useCallback((x, y) => {
        const chart = chartRef.current;
        if (!chart || !chart.chartArea) {
            return { left: 0, top: 0 };
        }
        const { chartArea } = chart;
        // Calculate pixel positions from chartArea
        // x: 0 = left, 3 = right
        // y: 0 = bottom, 3 = top (canvas Y is inverted)
        const cellWidth = chartArea.width / cols;
        const cellHeight = chartArea.height / rows;
        const pixelX = chartArea.left + x * cellWidth;
        const pixelY = chartArea.top + (rows - y) * cellHeight;
        return { left: pixelX, top: pixelY };
    }, [cols, rows]);
    const updatePositions = useCallback(() => {
        const chart = chartRef.current;
        if (chart && chart.chartArea) {
            setIsReady(true);
            forceUpdate();
        }
    }, [forceUpdate]);
    // Setup resize observer
    useEffect(() => {
        const timeoutId = setTimeout(updatePositions, 100);
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(updatePositions);
        });
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => {
            clearTimeout(timeoutId);
            resizeObserver.disconnect();
        };
    }, [updatePositions]);
    // Plugin to draw Y-axis labels vertically (rotated 90 degrees)
    const yLabelsPlugin = useMemo(() => ({
        id: 'yLabelsVertical',
        afterDraw: (chart) => {
            const { ctx, chartArea, scales } = chart;
            const yScale = scales.y;
            if (!chartArea || !yScale)
                return;
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            yLabels.forEach((label, index) => {
                const yPos = yScale.getPixelForValue(index);
                const xPos = chartArea.left / 2;
                ctx.save();
                ctx.translate(xPos, yPos);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(label, 0, 0);
                ctx.restore();
            });
            ctx.restore();
        },
    }), [yLabels]);
    const chartData = useMemo(() => ({
        datasets: [
            {
                label: 'Heatmap',
                data: matrixData,
                backgroundColor: (ctx) => {
                    const value = ctx.raw?.v;
                    return value !== undefined
                        ? colorMap[value]
                        : theme.palette.new.background.layout.default;
                },
                borderColor: theme.palette.new.border.neutral.default,
                borderWidth: 1,
                width: ({ chart }) => {
                    const { chartArea } = chart;
                    if (!chartArea)
                        return 0;
                    return chartArea.width / cols - 2;
                },
                height: ({ chart }) => {
                    const { chartArea } = chart;
                    if (!chartArea)
                        return 0;
                    return chartArea.height / rows - 2;
                },
            },
        ],
    }), [matrixData, colorMap, cols, rows]);
    const chartOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 60,
            },
        },
        animation: {
            onComplete: updatePositions,
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                type: 'category',
                labels: xLabels,
                offset: true,
                grid: {
                    display: false,
                },
                ticks: {
                    font: { size: 14 },
                    color: theme.palette.new.text.neutral.default,
                },
            },
            y: {
                type: 'category',
                labels: yLabels,
                offset: true,
                reverse: true, // Invert Y axis so index 0 is at bottom
                grid: {
                    display: false,
                },
                ticks: {
                    display: false, // Hide native ticks, we draw them manually rotated
                },
            },
        },
    }), [xLabels, yLabels, updatePositions]);
    const helpers = {
        getPixelPosition,
        containerRef,
        isReady,
        resizeKey: renderKey,
    };
    return (_jsxs(Stack, { ref: containerRef, position: "relative", width: "100%", height: height, sx: {
            boxShadow: 3,
            borderRadius: 1,
            pl: yAxisTitle ? 9 : 2,
            pr: 2,
            pt: 2,
        }, children: [_jsxs(Stack, { sx: {
                    position: 'relative',
                    width: '100%',
                    height: `calc(100% - ${xAxisTitle ? 72 : 16}px - 16px)`,
                }, children: [_jsx(Chart, { ref: chartRef, type: "matrix", data: chartData, options: chartOptions, plugins: [yLabelsPlugin] }), children && isReady && children(helpers)] }), yAxisTitle && (_jsx(Stack, { sx: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 64,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.palette.new.border.neutral.default}`,
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderBottom: 'none',
                    backgroundColor: 'transparent',
                }, children: _jsx(Typography, { variant: "subtitle1", sx: {
                        transform: 'rotate(-90deg)',
                        whiteSpace: 'nowrap',
                        mb: 10,
                    }, children: yAxisTitle }) })), xAxisTitle && (_jsx(Stack, { sx: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.palette.new.border.neutral.default}`,
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    backgroundColor: 'transparent',
                }, children: _jsx(Typography, { variant: "subtitle1", sx: { whiteSpace: 'nowrap', ml: 7 }, children: xAxisTitle }) }))] }));
};
export default HeatmapChart;
