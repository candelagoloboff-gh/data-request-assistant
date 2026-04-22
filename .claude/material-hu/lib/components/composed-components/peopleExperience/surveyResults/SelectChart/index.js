import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useChartColors } from '../../../peopleExperience/hooks/useChartColors';
import CardContainer from '../../../../design-system/CardContainer';
import DonutChart from '../../../../design-system/Charts/DonutChart';
import { Stack } from '@mui/material';
import { truncate } from 'lodash';
const SelectChart = ({ data, onSegmentClick, footer, slotProps, }) => {
    const { getColor } = useChartColors();
    const chartConfig = useMemo(() => {
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);
        const colors = labels.map((_, index) => getColor(index));
        return {
            labels: labels.map(label => truncate(label, { length: 30 })),
            datasets: [
                {
                    data: values,
                    backgroundColor: colors,
                    borderWidth: 0,
                },
            ],
        };
    }, [data, getColor]);
    return (_jsxs(CardContainer, { color: "grey", sx: {
            '& .MuiCardContent-root': {
                display: 'flex',
                flexDirection: 'column',
                ...slotProps?.root,
            },
        }, fullWidth: true, ...slotProps?.cardContainer, children: [_jsx(Stack, { sx: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    maxHeight: 320,
                }, children: _jsx(DonutChart, { type: "doughnut", data: chartConfig, options: {
                        radius: 120,
                        layout: {
                            padding: 0,
                        },
                        aspectRatio: 2,
                        responsive: true,
                        onClick: (_event, elements) => {
                            if (!onSegmentClick)
                                return;
                            if (elements.length === 0)
                                return;
                            const clickedIndex = elements[0].index;
                            onSegmentClick(clickedIndex);
                        },
                        plugins: {
                            legend: {
                                position: 'right',
                                align: 'center',
                                fullSize: false,
                                onClick: () => null,
                            },
                            tooltip: {
                                displayColors: false,
                                yAlign: 'bottom',
                                callbacks: {
                                    title: () => '',
                                    label: context => {
                                        const label = context.label || '';
                                        const value = context.parsed || 0;
                                        return `${label}: ${value}%`;
                                    },
                                },
                            },
                        },
                    } }) }), footer] }));
};
export default SelectChart;
