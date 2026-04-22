import { jsx as _jsx } from "react/jsx-runtime";
import { SIDEBAR_WIDTH } from '../../LibrariesSidebar/constants';
import { useSidebarColors } from '../../LibrariesSidebar/hooks/useGetSidebarColors';
import Stack from '@mui/material/Stack';
export const SidebarWrapper = ({ children, sx }) => {
    const colors = useSidebarColors();
    return (_jsx(Stack, { sx: {
            backgroundColor: colors.MAIN_WHITE,
            minWidth: SIDEBAR_WIDTH,
            maxWidth: SIDEBAR_WIDTH,
            width: '100%',
            boxSizing: 'border-box',
            alignSelf: 'stretch',
            minHeight: '100%',
            height: '100%',
            borderRight: ({ palette }) => `1.5px solid ${palette.new.border.neutral.divider}`,
            ...sx,
        }, children: children }));
};
