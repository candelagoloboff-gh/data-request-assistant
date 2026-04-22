import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import { Stack } from '@mui/material';
const ProgressCircleSkeleton = ({ sx }) => {
    return (_jsxs(Stack, { className: "ProgressCircleSkeleton-root", sx: {
            alignItems: 'center',
            gap: 2,
            ...sx,
        }, children: [_jsx(Skeleton, { variant: "circular", width: 160, height: 160 }), _jsxs(Stack, { sx: { gap: 0.5, alignItems: 'center' }, children: [_jsx(Skeleton, { height: 16, width: 100 }), _jsx(Skeleton, { height: 24, width: 200 }), _jsx(Skeleton, { height: 20, width: 100 })] })] }));
};
export default ProgressCircleSkeleton;
