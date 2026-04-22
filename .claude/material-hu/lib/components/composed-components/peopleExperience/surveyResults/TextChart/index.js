import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import TreemapChart from '../../../charts/TreemapChart';
import { useChartColors } from '../../../peopleExperience/hooks/useChartColors';
import CardContainer from '../../../../design-system/CardContainer';
import { Stack, useTheme } from '@mui/material';
import { getContrastTextColor } from '../../../../../utils/colors';
import { Chart, LinearScale, Tooltip } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { truncate } from 'lodash';
Chart.register(TreemapController, TreemapElement, LinearScale, Tooltip);
const TextChart = ({ data, onItemClick, footer, slotProps, }) => {
    const { getColor, getContrastColors, fallbackColor } = useChartColors();
    const theme = useTheme();
    const memoizedData = useMemo(() => {
        const colors = data.map((_, index) => getColor(index));
        return {
            tree: data.map(item => ({
                label: item.label,
                value: item.value,
            })),
            colors,
        };
    }, [data, getColor]);
    return (_jsxs(CardContainer, { color: "grey", sx: {
            '& .MuiCardContent-root': {
                ...slotProps?.root,
            },
        }, fullWidth: true, ...slotProps?.cardContainer, children: [_jsx(Stack, { sx: { alignItems: 'center', justifyContent: 'center' }, children: _jsx(TreemapChart, { data: {
                        datasets: [
                            {
                                data: [],
                                tree: memoizedData.tree,
                                key: 'value',
                                groups: ['label'],
                                spacing: 1,
                                borderWidth: 0,
                                borderRadius: 4,
                                backgroundColor: (ctx) => {
                                    if (!ctx.raw)
                                        return fallbackColor;
                                    return memoizedData.colors[ctx.dataIndex % memoizedData.colors.length];
                                },
                                labels: {
                                    display: true,
                                    formatter: ctx => {
                                        const truncationLen = ctx.raw.w * 0.12;
                                        return ctx.raw?.g
                                            ? truncate(ctx.raw.g, { length: truncationLen })
                                            : '';
                                    },
                                    color: ctx => {
                                        if (!ctx.raw)
                                            return theme.palette.newBase?.white;
                                        const bgColor = memoizedData.colors[ctx.dataIndex % memoizedData.colors.length];
                                        const contrastColors = getContrastColors(ctx.dataIndex);
                                        return getContrastTextColor(bgColor, 0.6, contrastColors.light, contrastColors.dark);
                                    },
                                    font: { size: 14, weight: 600 },
                                    position: 'middle',
                                },
                            },
                        ],
                    }, options: {
                        onClick: (_event, elements) => {
                            if (!onItemClick)
                                return;
                            if (elements.length === 0)
                                return;
                            const clickedIndex = elements[0].index;
                            onItemClick(clickedIndex);
                        },
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: true,
                                displayColors: false,
                                yAlign: 'bottom',
                                callbacks: {
                                    title: () => '',
                                    label: (ctx) => {
                                        const label = ctx.raw?.g || '';
                                        const value = ctx.raw?.v || 0;
                                        return `${label}: ${value}`;
                                    },
                                },
                            },
                        },
                    } }) }), footer] }));
};
export default TextChart;
