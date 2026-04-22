import { jsx as _jsx } from "react/jsx-runtime";
import BreakdownChart from '../charts/BreakdownChart';
import { Stack } from '@mui/material';
import { has } from 'lodash';
import BreakdownSkeleton from './skeleton';
const Breakdown = ({ items = [], sx = {}, slotProps = {}, loading = false, }) => {
    if (loading) {
        return _jsx(BreakdownSkeleton, { ...slotProps.skeleton });
    }
    const hasColors = items.every(item => has(item, 'color'));
    const values = items.map(item => item.value);
    const labels = items.map(item => item.label);
    const colors = hasColors
        ? items.map(item => item.color)
        : undefined;
    return (_jsx(Stack, { className: "Breakdown-root", ...slotProps.root, sx: {
            alignItems: 'center',
            gap: 2,
            ...sx,
            ...slotProps.root?.sx,
        }, children: _jsx(BreakdownChart, { values: values, colors: colors, labels: labels, ...slotProps.chart }) }));
};
export default Breakdown;
