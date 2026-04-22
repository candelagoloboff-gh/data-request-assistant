import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from '../../../../../../../design-system/Skeleton';
import Stack from '@mui/material/Stack';
const StatItemSkeleton = () => {
    return (_jsxs(Stack, { component: "li", sx: {
            flexDirection: 'row',
            alignItems: 'center',
            py: 2,
        }, children: [_jsx(Skeleton, { variant: "circular", width: 16, height: 16 }), _jsx(Skeleton, { width: 80, height: 20, sx: { ml: 0.5 } }), _jsx(Skeleton, { width: 40, height: 28, sx: { marginLeft: 'auto' } })] }));
};
export default StatItemSkeleton;
