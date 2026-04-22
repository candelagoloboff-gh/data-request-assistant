import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PieChart from '../charts/PieChart';
import Title from '../../design-system/Title';
import { Stack } from '@mui/material';
import { has } from 'lodash';
import PieSkeleton from './skeleton';
const Pie = ({ copetin, title, description, items = [], sx = {}, slotProps = {}, legend = 'none', loading = false, }) => {
    if (loading) {
        return (_jsx(PieSkeleton, { copetin: copetin, title: title, description: description, legend: legend, ...slotProps.skeleton }));
    }
    const showTitle = copetin || title || description;
    const hasColors = items.every(item => has(item, 'color'));
    const values = items.map(item => item.value);
    const labels = items.map(item => item.label);
    const colors = hasColors
        ? items.map(item => item.color)
        : undefined;
    return (_jsxs(Stack, { className: "Pie-root", ...slotProps.root, sx: {
            alignItems: 'center',
            gap: 2,
            ...sx,
            ...slotProps.root?.sx,
        }, children: [_jsx(PieChart, { values: values, colors: colors, labels: labels, legend: legend, ...slotProps.chart }), showTitle && (_jsx(Title, { variant: "M", copetin: copetin, title: title, description: description, centered: true, ...slotProps.title }))] }));
};
export default Pie;
