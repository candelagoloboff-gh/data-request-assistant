import { jsx as _jsx } from "react/jsx-runtime";
import { useSidebarColors } from '../../../LibrariesSidebar/hooks/useGetSidebarColors';
import ListItem from '../../../../design-system/List/components/ListItem';
import Stack from '@mui/material/Stack';
export const SidebarLoading = () => {
    const colors = useSidebarColors();
    const list = Array.from({ length: 4 });
    return (_jsx(Stack, { sx: {
            gap: 1,
            backgroundColor: colors.MAIN_WHITE,
            height: '100%',
        }, children: list.map((_, index) => (_jsx(ListItem, { loading: true }, index))) }));
};
