import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { SidebarAddItemButton } from '../../../../LibrariesSidebar/components/create/SidebarAddItemButton';
import { SidebarChildrenList } from '../../../../LibrariesSidebar/components/list/children/SidebarChildrenList';
import { SORT_MODE_HOVER_ROW_STYLES } from '../../../../LibrariesSidebar/constants';
import { useSidebarContext } from '../../../../LibrariesSidebar/context';
import { useSidebarColors } from '../../../../LibrariesSidebar/hooks/useGetSidebarColors';
import { getAccordionSx, getAvatarConfig, getCursorMode, } from '../../../../LibrariesSidebar/utils';
import { useItemContext } from '../../../../SortableListComposition';
import Accordion from '../../../../../design-system/Accordion';
import Stack from '@mui/material/Stack';
export const SidebarChildRow = ({ item, depth, onAdd, }) => {
    const colors = useSidebarColors();
    const { isDragging } = useItemContext();
    const { isSortMode, onAddMouseEnter } = useSidebarContext();
    const [hoveringItemId, setHoveringItemId] = useState(null);
    const rowRef = useRef(null);
    const rowId = `sidebar-child-row-${item.id}`;
    const showDragIcon = hoveringItemId === item.id && isSortMode;
    const onSummaryClickCapture = (e) => {
        const target = e.target;
        const summary = rowRef.current?.querySelector('.accordion-summary');
        if (!summary?.contains(target))
            return;
        const isExpandIconClick = Boolean(target.closest('.accordion-collapse-icon'));
        if (isExpandIconClick || isSortMode)
            return;
        e.preventDefault();
        e.stopPropagation();
        item.onClick?.(item);
    };
    const onMouseMove = (e) => {
        const summary = rowRef.current?.querySelector(`#${rowId} .accordion-summary`);
        const overSummary = summary?.contains(e.target) ?? false;
        setHoveringItemId(prev => {
            const next = overSummary ? item.id : null;
            return next === prev ? prev : next;
        });
    };
    const showCreateButton = !item.hasReachedLimit && !item.hideCreateButton;
    return (_jsx(Stack, { id: rowId, ref: rowRef, onClickCapture: onSummaryClickCapture, onMouseMove: onMouseMove, onMouseLeave: () => setHoveringItemId(null), sx: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            '& .MuiButtonBase-root': {
                cursor: `${getCursorMode(isSortMode, isDragging)} !important`,
            },
            ...(showDragIcon && {
                '& > * > .accordion-summary .MuiAvatar-root': SORT_MODE_HOVER_ROW_STYLES,
            }),
        }, children: _jsx(Accordion, { elevation: 0, title: item.title, withTitleEllipsis: true, sx: getAccordionSx(colors, depth, item.hasReachedLimit), avatar: getAvatarConfig(item, showDragIcon), slotProps: { title: { sx: { color: colors.TITLE_COLOR } } }, customDetail: _jsxs(_Fragment, { children: [_jsx(SidebarChildrenList, { depth: depth + 1, parentId: item.id, onAdd: onAdd }), showCreateButton && (_jsx(SidebarAddItemButton, { onAddMouseEnter: () => onAddMouseEnter?.(item.id), onAdd: () => onAdd?.(item.id), depth: depth, hasChildren: item.hasChildren }))] }) }) }));
};
