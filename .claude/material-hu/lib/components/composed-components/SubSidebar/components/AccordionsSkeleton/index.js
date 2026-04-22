import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { times } from 'lodash';
import Skeleton from '../../../../design-system/Skeleton';
const SubSidebarAccordionsSkeleton = () => {
    return (_jsx(Stack, { children: times(4, index => (_jsxs(Stack, { sx: {
                gap: 2,
                mt: 1,
                p: 2,
                alignItems: 'center',
                flexDirection: 'row',
            }, children: [_jsx(Skeleton, { height: 40, width: 40 }), _jsx(Skeleton, { height: 32, width: 180 })] }, index))) }));
};
export default SubSidebarAccordionsSkeleton;
