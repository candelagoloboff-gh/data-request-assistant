import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarEmpty } from '../../../../LibrariesSidebar/components/empty/SidebarEmpty';
import { SortableRootRow } from '../../../../LibrariesSidebar/components/list/root/SortableRootRow';
import { SidebarLoading } from '../../../../LibrariesSidebar/components/loading/SidebarLoading';
import { useSidebarContext } from '../../../../LibrariesSidebar/context';
import { useSidebarColors } from '../../../../LibrariesSidebar/hooks/useGetSidebarColors';
import { getReorderedItems } from '../../../../LibrariesSidebar/utils';
import { SortableListComposition as SortableList } from '../../../../SortableListComposition';
import { useTheme } from '@mui/material';
export const SidebarRootList = ({ loading }) => {
    const { palette } = useTheme();
    const colors = useSidebarColors();
    const { isSortMode, getOrderedItems, setPendingSort } = useSidebarContext();
    const listItems = getOrderedItems();
    if (loading)
        return _jsx(SidebarLoading, {});
    if (!listItems.length) {
        return (_jsx(SidebarEmpty, { sx: { backgroundColor: palette.new.background.elements.default } }));
    }
    const handleDragEnd = (event) => {
        const reorderedItems = getReorderedItems(listItems, event.active, event.over);
        setPendingSort(reorderedItems);
    };
    return (_jsx(SortableList.Root, { onDragEnd: handleDragEnd, restrictToAncestor: true, isDraggable: () => isSortMode, direction: "vertical", hasDragOverlay: true, dragActivationDistance: 0, sx: {
            flex: 1,
            minHeight: 0,
            height: '100%',
            gap: 1,
            overflow: 'auto',
            backgroundColor: colors.MAIN_LIGHT_GREY,
        }, children: listItems.map(item => (_jsx(SortableList.Item, { id: item.id, children: _jsx(SortableRootRow, { item: item }) }, item.id))) }));
};
