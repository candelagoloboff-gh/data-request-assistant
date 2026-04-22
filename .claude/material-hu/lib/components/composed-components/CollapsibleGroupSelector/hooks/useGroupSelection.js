import { useDeferredValue, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { ITEM_GAP_PX, MAX_VISIBLE_ROWS, ROW_SIZE_ESTIMATE, SELECT_ALL_ROW, } from '../constants';
const useGroupSelection = ({ group, groupFieldName, isExpanded, searchTerm, }) => {
    const form = useFormContext();
    const fieldValues = useWatch({ name: groupFieldName });
    const deferredSearch = useDeferredValue(searchTerm);
    const filteredItems = useMemo(() => {
        if (!deferredSearch)
            return group.items;
        const query = deferredSearch.toLowerCase();
        return group.items.filter(item => item.label.toLowerCase().includes(query));
    }, [group.items, deferredSearch]);
    const selectedItems = group.items.filter(item => fieldValues?.[item.value]);
    const totalItems = group.items.length;
    const allSelected = selectedItems.length === totalItems;
    const someSelected = selectedItems.length > 0 && selectedItems.length < totalItems;
    const toggleSelectAll = () => {
        const nextValue = !allSelected;
        form.setValue(groupFieldName, {
            ...fieldValues,
            ...Object.fromEntries(group.items.map(o => [o.value, nextValue])),
        });
    };
    const showSelectAll = totalItems > 1;
    const visibleItems = isExpanded ? filteredItems : [];
    const hasResults = filteredItems.length > 0;
    const listData = showSelectAll
        ? [SELECT_ALL_ROW, ...visibleItems]
        : visibleItems;
    const listMaxHeight = Math.min(listData.length, MAX_VISIBLE_ROWS) * ROW_SIZE_ESTIMATE -
        ITEM_GAP_PX;
    return {
        selectedCount: selectedItems.length,
        totalItems,
        allSelected,
        someSelected,
        toggleSelectAll,
        listData,
        listMaxHeight,
        hasResults,
    };
};
export default useGroupSelection;
