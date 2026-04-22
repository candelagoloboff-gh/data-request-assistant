import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import CardContainer from '../../../../design-system/CardContainer';
import BarChart from '../../../../design-system/Charts/BarChart';
import { Stack, useTheme } from '@mui/material';
import { SentimentType } from './types';
const LikertChart = ({ data, onBarClick, footer, slotProps, }) => {
    const theme = useTheme();
    const chartConfig = useMemo(() => {
        return {
            labels: data.map(stat => stat.label),
            datasets: [
                {
                    data: data.map(stat => stat.percentage),
                    backgroundColor: data.map(stat => {
                        switch (stat.sentimentType) {
                            case SentimentType.POSITIVE:
                                return theme.palette.newBase?.green[700];
                            case SentimentType.NEGATIVE:
                                return theme.palette.newBase?.red[600];
                            case SentimentType.NEUTRAL:
                                return theme.palette.newBase?.yellow[600];
                            default:
                                return theme.palette.newBase?.grey[600];
                        }
                    }),
                    borderRadius: {
                        topLeft: 8,
                        topRight: 8,
                    },
                    borderSkipped: false,
                },
            ],
        };
    }, [data, theme]);
    return (_jsxs(CardContainer, { color: "grey", fullWidth: true, ...slotProps?.cardContainer, children: [_jsx(Stack, { sx: { maxHeight: 412 }, ...slotProps?.stack, children: _jsx(BarChart, { type: "bar", data: chartConfig, options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        onClick: (_event, elements) => {
                            if (!onBarClick)
                                return;
                            if (elements.length === 0)
                                return;
                            const clickedIndex = elements[0].index;
                            onBarClick(clickedIndex);
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                position: 'average',
                                yAlign: 'bottom',
                                displayColors: false,
                                callbacks: {
                                    title: () => '',
                                    label: context => {
                                        const label = context.label || '';
                                        const value = context.parsed.y || 0;
                                        return `${label}: ${value}%`;
                                    },
                                },
                            },
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                min: 0,
                                max: 100,
                                border: {
                                    dash: [4, 4],
                                },
                                ticks: {
                                    stepSize: 20,
                                },
                            },
                        },
                    } }) }), footer] }));
};
export default LikertChart;
