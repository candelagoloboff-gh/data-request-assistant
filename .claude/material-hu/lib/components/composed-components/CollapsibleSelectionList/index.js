import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
import { List as FixedSizeList } from 'react-window';
import SelectableListItem from '../SelectableListItem';
import Accordion from '../../design-system/Accordion';
import Search from '../../design-system/Inputs/Search';
import List from '../../design-system/List';
import StateCard from '../../design-system/StateCard';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { appearFromBottom } from '../../../utils/animations';
import { addOrRemoveSet } from '../../../utils/array';
import CollapsibleSelectionListItem from './components/CollapsibleSelectionListItem';
const ITEM_HEIGHT = 48;
const MAX_ITEMS_WITHOUT_SCROLL = 4;
const MAX_LIST_HEIGHT = 300;
const OVERSCAN_COUNT = 5;
const CollapsibleSelectionList = ({ allowSelectAll = true, items, title, onChange, selected = new Set(), selectionLimit, slotProps, sx, virtualized = true, listHeight: inheritedListHeight = MAX_LIST_HEIGHT, rowHeight = ITEM_HEIGHT, itemRenderer, }) => {
    const [search, setSearch] = useState('');
    const filteredItems = useMemo(() => items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())), [items, search]);
    const groupSelection = selected?.intersection(new Set(items.map(item => item.id))) || new Set();
    const [expanded, setExpanded] = useState((groupSelection?.size || 0) > 0);
    const filteredItemsSet = new Set(filteredItems.map(item => item.id));
    const isAllSelected = !!filteredItemsSet.size &&
        filteredItemsSet.intersection(groupSelection).size ===
            filteredItemsSet.size;
    const handleSelectAll = () => {
        if (isAllSelected) {
            onChange?.(Array.from(selected?.difference(filteredItemsSet) || []));
        }
        else {
            onChange?.(Array.from(selected?.union(filteredItemsSet) || []));
        }
    };
    const handleItemSelect = useCallback((itemId) => {
        onChange?.([...addOrRemoveSet(selected, itemId)]);
    }, [onChange, selected]);
    const listHeight = inheritedListHeight ||
        (filteredItems?.length <= MAX_ITEMS_WITHOUT_SCROLL
            ? rowHeight * filteredItems.length
            : MAX_LIST_HEIGHT);
    return (_jsx(Accordion, { title: title, expanded: expanded, onChange: () => setExpanded(prev => !prev), slotProps: {
            transition: { unmountOnExit: true },
        }, description: slotProps?.accordion?.getDescription?.(groupSelection, items.length), disableGutters: true, elevation: 0, sx: {
            backgroundColor: theme => theme.palette.new.background.elements.default,
            borderRadius: 2,
            paddingY: 0.75,
            alignItems: 'center',
            animation: `${appearFromBottom} 125ms ease-in-out backwards`,
            color: theme => theme.palette.new.text.neutral.default,
            ...sx,
        }, customDetail: _jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Search, { value: search, onChange: setSearch, disabled: filteredItems.length === 0 && !search, ...slotProps?.search }), _jsxs(List, { sx: {
                        backgroundColor: theme => theme.palette.new.background.elements.default,
                        border: theme => `1px solid ${theme.palette.new.border.neutral.default}`,
                        borderRadius: 2,
                        padding: 1,
                        maxHeight: virtualized ? listHeight : undefined,
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }, children: [(!selectionLimit || selectionLimit >= items.length) &&
                            allowSelectAll &&
                            filteredItems.length > 0 && (_jsx(SelectableListItem, { id: "select-all", sx: { padding: 2, gap: 0.5, borderRadius: 1 }, onSelect: handleSelectAll, disabled: filteredItems.length === 0, selected: !!isAllSelected, children: _jsx(Typography, { sx: {
                                    fontWeight: 'medium',
                                    color: theme => theme.palette.new.text.neutral.default,
                                    ml: 0.5,
                                }, children: slotProps?.selectAllCheckbox?.label }) })), filteredItems.length > 0 && (_jsxs(_Fragment, { children: [virtualized && (_jsx(FixedSizeList, { overscanCount: OVERSCAN_COUNT, rowHeight: rowHeight, rowCount: filteredItems.length, rowComponent: CollapsibleSelectionListItem, rowProps: {
                                        items: filteredItems,
                                        selected,
                                        selectionLimit: selectionLimit || 0,
                                        handleItemSelect,
                                        itemRenderer,
                                    } })), !virtualized &&
                                    filteredItems?.map(item => (_jsx(SelectableListItem, { id: item.id.toString(), sx: { padding: 2, borderRadius: 1 }, onSelect: () => handleItemSelect(item.id), disabled: !!selectionLimit &&
                                            !selected?.has(item.id) &&
                                            selected?.size >= selectionLimit, selected: selected?.has(item.id), children: itemRenderer(item) }, item.id)))] })), filteredItems.length === 0 && slotProps?.stateCard && (_jsx(StateCard, { slotProps: {
                                card: {
                                    sx: {
                                        border: 'none',
                                        animation: `${appearFromBottom} 125ms ease-in-out backwards`,
                                    },
                                },
                            }, ...slotProps?.stateCard }))] })] }) }));
};
CollapsibleSelectionList.displayName = 'CollapsibleSelectionList';
export default CollapsibleSelectionList;
