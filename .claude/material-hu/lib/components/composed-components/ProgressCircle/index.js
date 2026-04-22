import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProgressCircleChartV2 from '../charts/ProgressCircleChart';
import Title from '../../design-system/Title';
import { Stack } from '@mui/material';
import ProgressCircleSkeleton from './skeleton';
const ProgressCircle = ({ copetin, title, description, current = 0, total = 100, decimalPrecision = 0, color, sx = {}, slotProps = {}, loading = false, }) => {
    const progress = (100 * current) / total;
    const value = Math.min(progress, 100);
    if (loading) {
        return _jsx(ProgressCircleSkeleton, { ...slotProps.skeleton });
    }
    return (_jsxs(Stack, { className: "ProgressCircle-root", ...slotProps.root, sx: {
            ...sx,
            ...slotProps.root?.sx,
            alignItems: 'center',
            gap: 2,
        }, children: [_jsx(ProgressCircleChartV2, { value: value, color: color, decimalPrecision: decimalPrecision, ...slotProps.chart }), _jsx(Title, { variant: "M", copetin: copetin, title: title, description: description, centered: true, ...slotProps.title })] }));
};
export default ProgressCircle;
