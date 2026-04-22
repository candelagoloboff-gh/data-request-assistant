import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import { Stack } from '@mui/material';
const BreakdownSkeleton = ({ sx }) => {
    return (_jsx(Stack, { className: "BreakdownSkeleton-root", sx: {
            alignItems: 'center',
            gap: 2,
            ...sx,
        }, children: Array.from({ length: 3 }, (_, index) => (_jsx(Skeleton, { width: "100%", height: 25 }, index))) }));
};
export default BreakdownSkeleton;
