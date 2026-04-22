import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSidebarColors } from '../../../LibrariesSidebar/hooks/useGetSidebarColors';
import Skeleton from '../../../../design-system/Skeleton';
import Stack from '@mui/material/Stack';
export const SidebarHeaderLoading = () => {
    const colors = useSidebarColors();
    return (_jsxs(Stack, { sx: {
            py: 2.5,
            px: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.MAIN_WHITE,
        }, children: [_jsx(Skeleton, { width: 75, height: 25 }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [_jsx(Skeleton, { width: 35, height: 35 }), _jsx(Skeleton, { width: 35, height: 35 })] })] }));
};
