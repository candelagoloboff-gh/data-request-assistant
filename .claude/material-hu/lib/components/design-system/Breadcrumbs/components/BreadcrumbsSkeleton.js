import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../Skeleton';
import { Stack } from '@mui/material';
export const BreadcrumbsSkeleton = () => {
    return (_jsx(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
        }, children: Array.from({ length: 3 }, (_, index) => (_jsx(Skeleton, { width: 95, height: 22 }, index))) }));
};
