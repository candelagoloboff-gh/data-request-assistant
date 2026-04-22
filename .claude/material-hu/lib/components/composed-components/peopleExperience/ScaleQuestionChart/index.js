import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import CardContainer from '../../../design-system/CardContainer';
import Title from '../../../design-system/Title';
import { Box, Stack, useTheme } from '@mui/material';
import { IconBulb } from '@tabler/icons-react';
import { BarElement, CategoryScale, Chart, LinearScale, Tooltip, } from 'chart.js';
import { isEmpty, range } from 'lodash';
import { getColorFromType } from './utils';
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);
// Helper to darken a hex color by a percentage (0-1)
const darkenColor = (hex, amount) => {
    const r = Math.max(0, Math.floor(parseInt(hex.slice(1, 3), 16) * (1 - amount)));
    const g = Math.max(0, Math.floor(parseInt(hex.slice(3, 5), 16) * (1 - amount)));
    const b = Math.max(0, Math.floor(parseInt(hex.slice(5, 7), 16) * (1 - amount)));
    return `rgb(${r}, ${g}, ${b})`;
};
const ScaleQuestionChart = ({ data, onSelectItem, helperText, noDataText, }) => {
    const theme = useTheme();
    const chartRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const hasData = data && !isEmpty(data);
    const handleClick = useCallback((_event, elements) => {
        if (elements.length > 0 && hasData) {
            const dataIndex = elements[0].index;
            // Toggle selection: if clicking the same bar, deselect it
            setSelectedIndex(prev => (prev === dataIndex ? null : dataIndex));
            onSelectItem(data[dataIndex]);
        }
    }, [data, hasData, onSelectItem]);
    const labels = hasData ? data.map(item => item.label) : range(1, 11);
    const values = hasData ? data.map(item => item.value) : [];
    // When a bar is selected, darken it
    const backgroundColors = hasData
        ? data.map((item, index) => {
            const baseColor = getColorFromType(item.type);
            if (selectedIndex === null) {
                return baseColor;
            }
            return index === selectedIndex
                ? darkenColor(baseColor, 0.2)
                : baseColor;
        })
        : [];
    // Hover colors should also respect the selection state
    const hoverBackgroundColors = hasData
        ? data.map((item, index) => {
            const baseColor = getColorFromType(item.type);
            if (selectedIndex === null) {
                return baseColor;
            }
            return index === selectedIndex
                ? darkenColor(baseColor, 0.2)
                : baseColor;
        })
        : [];
    const chartData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
                borderRadius: 8,
                borderSkipped: 'bottom',
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 300,
        },
        layout: {
            padding: {
                top: 10,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: hasData,
                backgroundColor: theme.palette.base?.grey[800],
                titleFont: {
                    family: theme.typography.fontFamily,
                    size: theme.typography.fontSize,
                    weight: 'normal',
                },
                bodyFont: {
                    family: theme.typography.fontFamily,
                    size: theme.typography.fontSize,
                    weight: 'normal',
                },
                titleColor: theme.palette.base?.white,
                bodyColor: theme.palette.base?.white,
                padding: parseInt(theme.spacing(2), 10),
                cornerRadius: parseInt(theme.spacing(theme.shape.borderRadiusS), 10),
                displayColors: false,
                callbacks: {
                    title: () => '',
                    label: context => {
                        const index = context.dataIndex;
                        if (hasData) {
                            const item = data[index];
                            return `${item.label}: ${item.value}%`;
                        }
                        return '';
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: theme.palette.new.text.neutral.lighter,
                    font: {
                        family: 'Roboto',
                    },
                },
            },
            y: {
                min: 0,
                max: 100,
                grid: Object.assign({
                    color: theme.palette.divider,
                    lineWidth: 1,
                    tickLength: 0,
                }, { borderDash: [4, 4] }),
                border: {
                    display: false,
                },
                ticks: {
                    color: theme.palette.new.text.neutral.lighter,
                    font: {
                        family: 'Roboto',
                    },
                    padding: 8,
                },
            },
        },
        onClick: handleClick,
        onHover: (event, elements) => {
            const canvas = event.native?.target;
            if (canvas) {
                canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
            }
        },
    };
    return (_jsxs(CardContainer, { color: "grey", fullWidth: true, children: [_jsxs(Box, { sx: { position: 'relative', height: 400 }, children: [_jsx(Bar, { ref: chartRef, data: chartData, options: options }), !hasData && noDataText && (_jsx(Box, { sx: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: theme.palette.new.text.neutral.lighter,
                            fontFamily: 'Roboto',
                            fontSize: theme.typography.fontSize,
                        }, children: noDataText }))] }), helperText && (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }, children: [_jsx(IconBulb, { color: theme.palette.new.text.neutral.lighter, size: 20 }), _jsx(Title, { title: helperText, fontWeight: "fontWeightRegular", slotProps: {
                            title: {
                                sx: {
                                    color: theme.palette.new.text.neutral.lighter,
                                },
                            },
                        }, variant: "S" })] }))] }));
};
export default ScaleQuestionChart;
