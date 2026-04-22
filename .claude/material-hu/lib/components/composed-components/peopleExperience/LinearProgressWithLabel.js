import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinearProgress, Stack, Typography, } from '@mui/material';
const LinearProgressWithLabel = ({ linearProgressProps, value = 0, ...other }) => {
    return (_jsxs(Stack, { ...other, sx: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            gap: 1,
            ...other.sx,
        }, children: [_jsx(LinearProgress, { sx: { width: '100%' }, variant: "determinate", ...linearProgressProps, value: value }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { flexShrink: 0 }, children: `${value}%` })] }));
};
export default LinearProgressWithLabel;
