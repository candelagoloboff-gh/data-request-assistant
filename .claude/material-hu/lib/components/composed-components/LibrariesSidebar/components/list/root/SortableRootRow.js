import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AVATAR_STYLES } from '../../../../LibrariesSidebar/constants';
import { useSidebarContext } from '../../../../LibrariesSidebar/context';
import { useSidebarColors } from '../../../../LibrariesSidebar/hooks/useGetSidebarColors';
import { getAvatarConfig, getCursorMode, } from '../../../../LibrariesSidebar/utils';
import { useItemContext } from '../../../../SortableListComposition';
import ListItem from '../../../../../design-system/List/components/ListItem';
import Stack from '@mui/material/Stack';
import { IconChevronRight } from '@tabler/icons-react';
import { DragIcon } from '../../DragIcon';
export const SortableRootRow = ({ item }) => {
    const colors = useSidebarColors();
    const { isSortMode } = useSidebarContext();
    const { isDragging } = useItemContext();
    const handleClick = () => {
        if (!item || isSortMode)
            return;
        item.onClick?.(item);
    };
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            backgroundColor: colors.MAIN_WHITE,
            position: 'relative',
            '*': { cursor: getCursorMode(isSortMode, isDragging) },
            '&:hover': {
                ...(isSortMode && {
                    '& .sidebar-drag-icon': { opacity: 1 },
                    '& .listItem-badge-avatar': { opacity: 0 },
                }),
                backgroundColor: colors.ROW_HOVER,
            },
        }, children: [_jsx(DragIcon, {}), _jsx(ListItem, { component: "div", onClick: isSortMode ? undefined : handleClick, text: { title: item.title }, avatar: getAvatarConfig(item), action: { Icon: IconChevronRight, onClick: handleClick }, sx: { width: '100%' }, slotProps: {
                    avatar: { sx: AVATAR_STYLES },
                    container: { sx: { py: 1.5 } },
                    title: {
                        slotProps: {
                            title: {
                                sx: { color: colors.TITLE_COLOR },
                                overflow: 'tooltip',
                                withEllipsis: true,
                            },
                        },
                    },
                } }, item.id)] }));
};
