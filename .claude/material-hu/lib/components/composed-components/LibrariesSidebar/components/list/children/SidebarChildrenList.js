import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarEmpty } from '../../../../LibrariesSidebar/components/empty/SidebarEmpty';
import { SidebarChildRow } from '../../../../LibrariesSidebar/components/list/children/SidebarChildRow';
import { SidebarLoading } from '../../../../LibrariesSidebar/components/loading/SidebarLoading';
import { useSidebarContext } from '../../../../LibrariesSidebar/context';
import { useSidebarColors } from '../../../../LibrariesSidebar/hooks/useGetSidebarColors';
import { getReorderedItems } from '../../../../LibrariesSidebar/utils';
import { SortableListComposition as SortableList } from '../../../../SortableListComposition';
export const SidebarChildrenList = ({ loading, parentId, onAdd, depth = 0, }) => {
    const colors = useSidebarColors();
    const { isSortMode, getTreeItem, getOrderedItems, setPendingSort } = useSidebarContext();
    const listItems = getOrderedItems(parentId);
    const parentAtLimit = Boolean(getTreeItem(parentId)?.hasReachedLimit);
    if (loading)
        return _jsx(SidebarLoading, {});
    if (!listItems.length && !parentAtLimit)
        return _jsx(SidebarEmpty, {});
    const handleDragEnd = (event) => {
        const reorderedItems = getReorderedItems(listItems, event.active, event.over);
        setPendingSort(reorderedItems, parentId);
    };
    return (_jsx(SortableList.Root, { restrictToAncestor: true, onDragEnd: handleDragEnd, dragActivationDistance: 0, hasDragOverlay: true, isDraggable: () => isSortMode, direction: "vertical", sx: {
            gap: depth === 0 ? 1 : 0,
            width: '100%',
            minWidth: 0,
            overflow: 'auto',
            backgroundColor: colors.MAIN_LIGHT_GREY,
            '.MuiButtonBase-root': { p: 1.5, px: 2 },
            '& .MuiPaper-root': { borderRadius: '0px !important' },
            '& .accordion-details-custom-detail': { p: 0 },
        }, children: listItems.map(item => (_jsx(SortableList.Item, { id: item.id, children: _jsx(SidebarChildRow, { item: item, depth: depth, onAdd: onAdd }) }, item.id))) }));
};
