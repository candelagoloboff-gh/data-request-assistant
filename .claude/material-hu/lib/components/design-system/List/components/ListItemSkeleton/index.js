import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Skeleton from '../../../Skeleton';
export const ListItemSkeleton = ({ sx }) => {
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 0.5,
            p: 2,
            width: '100%',
            ...sx,
        }, children: [_jsx(Skeleton, { variant: "circular", width: 40, height: 40, sx: { flexShrink: 0 } }), _jsxs(Stack, { sx: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 0.5,
                    width: '100%',
                }, children: [_jsx(Skeleton, { width: "100%", height: "24px" }), _jsx(Skeleton, { width: "14%", height: "12px" })] })] }));
};
export default ListItemSkeleton;
