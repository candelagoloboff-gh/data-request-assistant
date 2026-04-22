import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import { Stack } from '@mui/material';
const MidCircleSkeleton = ({ sx, copetin, title, description, }) => {
    const showTitle = copetin || title || description;
    return (_jsxs(Stack, { className: "MidCircleSkeleton-root", sx: {
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            ...sx,
        }, children: [_jsx(Skeleton, { width: 160, height: 90 }), showTitle && (_jsxs(Stack, { sx: { gap: 0.5, alignItems: 'center' }, children: [copetin && (_jsx(Skeleton, { height: 16, width: 100 })), title && (_jsx(Skeleton, { height: 24, width: 200 })), description && (_jsx(Skeleton, { height: 20, width: 100 }))] }))] }));
};
export default MidCircleSkeleton;
