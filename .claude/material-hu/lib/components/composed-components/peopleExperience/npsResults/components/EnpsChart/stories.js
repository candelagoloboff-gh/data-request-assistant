import { jsx as _jsx } from "react/jsx-runtime";
import StateCard from '../../../../../design-system/StateCard';
import NavigableLabelTicks from '../NavigableLabelTicks';
import EnpsChart from '.';
const meta = {
    title: 'Composed Components/peopleExperience/EnpsChart',
    component: EnpsChart,
};
export default meta;
export const WithNavigableLabelTicks = {
    args: {
        titleSlot: 'eNPS with Navigable Labels',
        data: [
            { label: 'Q1 2024', value: 25 },
            { label: 'Q2 2024', value: -10 },
            { label: 'Q3 2024', value: 45 },
            { label: 'Q4 2024', value: 30 },
            { label: 'Q1 2025', value: 35 },
            { label: 'Q2 2025', value: 20 },
            { label: 'Q3 2025', value: -5 },
            { label: 'Q4 2025', value: 50 },
            { label: 'Q1 2026', value: 15 },
            { label: 'Q2 2026', value: 40 },
            { label: 'Q3 2026', value: 25 },
            { label: 'Q4 2026', value: -15 },
        ],
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
        navigationSlot: (_jsx(NavigableLabelTicks, { items: [
                {
                    title: 'Q1 2024',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2024 clicked'),
                },
                {
                    title: 'Q2 2024',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2024 clicked'),
                },
                {
                    title: 'Q3 2024',
                    description: 'Jul - Sep',
                    onClick: () => alert('Q3 2024 clicked'),
                },
                {
                    title: 'Q4 2024',
                    description: 'Oct - Dec',
                    onClick: () => alert('Q4 2024 clicked'),
                },
                {
                    title: 'Q1 2025',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2025 clicked'),
                },
                {
                    title: 'Q2 2025',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2025 clicked'),
                },
                {
                    title: 'Q3 2025',
                    description: 'Jul - Sep',
                    onClick: () => alert('Q3 2025 clicked'),
                },
                {
                    title: 'Q4 2025',
                    description: 'Oct - Dec',
                    onClick: () => alert('Q4 2025 clicked'),
                },
                {
                    title: 'Q1 2026',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2026 clicked'),
                },
                {
                    title: 'Q2 2026',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2026 clicked'),
                },
                {
                    title: 'Q3 2026',
                    description: 'Jul - Sep',
                    onClick: () => alert('Q3 2026 clicked'),
                },
                {
                    title: 'Q4 2026',
                    description: 'Oct - Dec',
                    onClick: () => alert('Q4 2026 clicked'),
                },
            ] })),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
export const WithNavigableLabelTicksFewItems = {
    args: {
        titleSlot: 'eNPS with Navigable Labels (6 months)',
        data: [
            { label: 'Jan', value: 15 },
            { label: 'Feb', value: 22 },
            { label: 'Mar', value: -5 },
            { label: 'Apr', value: 40 },
            { label: 'May', value: 55 },
            { label: 'Jun', value: 35 },
        ],
        navigationSlot: (_jsx(NavigableLabelTicks, { items: [
                {
                    title: 'Jan',
                    description: '2024',
                    onClick: () => alert('Jan clicked'),
                },
                {
                    title: 'Feb',
                    description: '2024',
                    onClick: () => alert('Feb clicked'),
                },
                {
                    title: 'Mar',
                    description: '2024',
                    onClick: () => alert('Mar clicked'),
                },
                {
                    title: 'Apr',
                    description: '2024',
                    onClick: () => alert('Apr clicked'),
                },
                {
                    title: 'May',
                    description: '2024',
                    onClick: () => alert('May clicked'),
                },
                {
                    title: 'Jun',
                    description: '2024',
                    onClick: () => alert('Jun clicked'),
                },
            ] })),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
export const LoadingState = {
    args: {
        titleSlot: 'eNPS Loading',
        data: [],
        loading: true,
        navigationSlot: _jsx("div", {}),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
export const EmptyState = {
    args: {
        titleSlot: 'eNPS Empty',
        data: [],
        navigationSlot: _jsx("div", {}),
        emptyStateSlot: (_jsx(StateCard, { title: "No eNPS data", description: "There is no data to display for the selected period", variant: "primary" })),
    },
};
export const WithNullValues = {
    args: {
        titleSlot: 'eNPS with Null Values',
        data: [
            { label: 'Q1 2024', value: 25 },
            { label: 'Q2 2024', value: null },
            { label: 'Q3 2024', value: 45 },
            { label: 'Q4 2024', value: null },
            { label: 'Q1 2025', value: 35 },
            { label: 'Q2 2025', value: 20 },
        ],
        navigationSlot: (_jsx(NavigableLabelTicks, { items: [
                {
                    title: 'Q1 2024',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2024 clicked'),
                },
                {
                    title: 'Q2 2024',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2024 clicked'),
                },
                {
                    title: 'Q3 2024',
                    description: 'Jul - Sep',
                    onClick: () => alert('Q3 2024 clicked'),
                },
                {
                    title: 'Q4 2024',
                    description: 'Oct - Dec',
                    onClick: () => alert('Q4 2024 clicked'),
                },
                {
                    title: 'Q1 2025',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2025 clicked'),
                },
                {
                    title: 'Q2 2025',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2025 clicked'),
                },
            ] })),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
export const WithNullValuesComparison = {
    args: {
        titleSlot: 'eNPS Comparison with Null Values',
        data: [
            { label: 'Q1 2024', value: null },
            { label: 'Q2 2024', value: -10 },
            { label: 'Q3 2024', value: 45 },
            { label: 'Q4 2024', value: null },
            { label: 'Q1 2025', value: 30 },
        ],
        differenceData: [
            { label: 'Q1 2024', value: 15 },
            { label: 'Q2 2024', value: 5 },
            { label: 'Q3 2024', value: 40 },
            { label: 'Q4 2024', value: 25 },
            { label: 'Q1 2025', value: 20 },
        ],
        navigationSlot: (_jsx(NavigableLabelTicks, { items: [
                {
                    title: 'Q1 2024',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2024 clicked'),
                },
                {
                    title: 'Q2 2024',
                    description: 'Apr - Jun',
                    onClick: () => alert('Q2 2024 clicked'),
                },
                {
                    title: 'Q3 2024',
                    description: 'Jul - Sep',
                    onClick: () => alert('Q3 2024 clicked'),
                },
                {
                    title: 'Q4 2024',
                    description: 'Oct - Dec',
                    onClick: () => alert('Q4 2024 clicked'),
                },
                {
                    title: 'Q1 2025',
                    description: 'Jan - Mar',
                    onClick: () => alert('Q1 2025 clicked'),
                },
            ] })),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
export const WithHighlightDataMixedDescriptions = {
    args: {
        titleSlot: 'eNPS with Mixed Label Descriptions',
        data: [
            { label: 'Jan', value: 35 },
            { label: 'Feb', value: 42 },
            { label: 'Mar', value: -12 },
            { label: 'Apr', value: 58 },
            { label: 'May', value: 28 },
            { label: 'Jun', value: 65 },
            { label: 'Jul', value: -8 },
            { label: 'Aug', value: 48 },
            { label: 'Sep', value: 52 },
            { label: 'Oct', value: 38 },
        ],
        navigationSlot: (_jsx(NavigableLabelTicks, { items: [
                {
                    title: 'Jan',
                    description: '2024',
                    onClick: () => alert('Jan clicked'),
                    highlighted: true,
                },
                {
                    title: 'Feb',
                    description: '',
                    onClick: () => alert('Feb clicked'),
                    highlighted: true,
                },
                {
                    title: 'Mar',
                    description: '2024',
                    onClick: () => alert('Mar clicked'),
                    highlighted: true,
                },
                {
                    title: 'Apr',
                    description: '',
                    onClick: () => alert('Apr clicked'),
                },
                {
                    title: 'May',
                    description: '2024',
                    onClick: () => alert('May clicked'),
                },
                {
                    title: 'Jun',
                    description: '',
                    onClick: () => alert('Jun clicked'),
                },
                {
                    title: 'Jul',
                    description: '2024',
                    onClick: () => alert('Jul clicked'),
                },
                {
                    title: 'Aug',
                    description: '',
                    onClick: () => alert('Aug clicked'),
                },
                {
                    title: 'Sep',
                    description: '2024',
                    onClick: () => alert('Sep clicked'),
                },
                {
                    title: 'Oct',
                    description: '',
                    onClick: () => alert('Oct clicked'),
                },
            ] })),
        emptyStateSlot: (_jsx(StateCard, { title: "No data available", description: "There is no eNPS data for the selected period", variant: "primary" })),
    },
};
