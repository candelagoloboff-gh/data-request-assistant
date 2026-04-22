import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MidCircleChart from '../charts/MidCircleChart';
import Title from '../../design-system/Title';
import { Stack } from '@mui/material';
import MidCircleSkeleton from './skeleton';
const MidCircle = ({ copetin, title, description, current = 0, total = 100, decimalPrecision = 0, color, sx = {}, slotProps = {}, loading = false, }) => {
    const progress = (100 * current) / total;
    const value = Math.min(progress, 100);
    const showTitle = copetin || title || description;
    if (loading) {
        return (_jsx(MidCircleSkeleton, { copetin: copetin, title: title, description: description, ...slotProps.skeleton }));
    }
    return (_jsxs(Stack, { className: "MidCircle-root", ...slotProps.root, sx: {
            alignItems: 'center',
            gap: 2,
            '& .MidCircleChart-root': {
                maxWidth: '250px',
            },
            ...sx,
            ...slotProps.root?.sx,
        }, children: [_jsx(MidCircleChart, { value: value, color: color, decimalPrecision: decimalPrecision, ...slotProps.chart }), showTitle && (_jsx(Title, { variant: "M", copetin: copetin, title: title, description: description, centered: true, ...slotProps.title }))] }));
};
export default MidCircle;
