import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { List as FixedSizeList } from 'react-window';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { useDebounce } from '../../../hooks/useDebounce';
import Accordion from '../../design-system/Accordion';
import InputSearch from '../../design-system/Inputs/Search';
import List from '../../design-system/List';
import Skeleton from '../../design-system/Skeleton';
import SelectableListItem from '../SelectableListItem';
import CollapsibleAutocompleteSelectorItem from './components/CollapsibleAutocompleteSelectorItem';
const ITEM_HEIGHT = 48;
const MAX_LIST_HEIGHT = 300;
const OVERSCAN_COUNT = 5;
const OptionsSkeleton = () => (_jsx(Stack, { sx: { gap: 2 }, children: Array(4)
        .fill(0)
        .map((_, i) => (_jsxs(Stack, { sx: {
            alignItems: 'center',
            flexDirection: 'row',
            gap: 0.5,
        }, children: [_jsx(Skeleton, { variant: "rounded", width: 24, height: 24 }), _jsx(Skeleton, { sx: { width: '100%', height: 24 } })] }, i))) }));
const LoadMoreIndicator = ({ fetchNextPage, isFetchingNextPage, hasNextPage, }) => {
    const { ref } = useInView({
        threshold: 0,
        onChange: inView => {
            if (inView && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
    });
    if (!hasNextPage)
        return null;
    return (_jsx(Stack, { ref: ref, sx: {
            alignItems: 'center',
            justifyContent: 'center',
            py: 1,
        }, children: isFetchingNextPage && _jsx(CircularProgress, { size: 20 }) }));
};
function CollapsibleAutocompleteSelector({ infiniteQuery, sectionTitle, lackingOptionsMessage, paginationLimit = 10, customMapper, isExpanded: isExpandedProp, setExpanded, defaultExpanded = false, showOnlyOnSearch = false, getItemId = (item) => item?.id ?? '', sx, renderContent, selectAllLabel, noResultsLabel, formatAndMore, withSelectAll = true, maxHeight = 150, selectionLimit, virtualized = true, rowHeight = ITEM_HEIGHT, listHeight: inheritedListHeight = MAX_LIST_HEIGHT, itemRenderer, ...controlProps }) {
    const [search, setSearch] = useState('');
    // Handle both controlled and form-context modes
    const formContext = useFormContext();
    const isControlled = 'value' in controlProps && controlProps.value !== undefined;
    const selectedItems = isControlled
        ? controlProps.value
        : formContext?.watch(controlProps.fieldName) || [];
    const setSelectedItems = (items) => {
        if (isControlled) {
            controlProps.onChange(items);
        }
        else if (formContext && controlProps.fieldName) {
            formContext.setValue(controlProps.fieldName, items);
        }
    };
    const debouncedSearch = useDebounce(search);
    const mapToFieldOption = (item) => customMapper
        ? customMapper(item)
        : {
            value: item?.id ?? '',
            name: item?.name ?? '',
        };
    const isItemSelected = (rawItem) => selectedItems.some(selected => getItemId(selected) === getItemId(rawItem));
    const { data: infiniteOptions, isLoading: loadingInfiniteOptions, fetchNextPage, isFetchingNextPage, hasNextPage, isPreviousData, } = infiniteQuery({
        limit: paginationLimit,
        name: debouncedSearch,
    }, {
        keepPreviousData: true,
    });
    // Raw items from API (not mapped)
    const rawInfiniteItems = useMemo(() => infiniteOptions?.pages?.flatMap(page => page.data.items) || [], [infiniteOptions]);
    // Mapped items for display purposes
    const displayItems = useMemo(() => rawInfiniteItems.map(mapToFieldOption), [rawInfiniteItems]);
    const handleOptionCheck = useCallback((rawItem) => {
        const isSelected = isItemSelected(rawItem);
        if (isSelected) {
            // Remove item from array
            setSelectedItems(selectedItems.filter(selected => getItemId(selected) !== getItemId(rawItem)));
        }
        else {
            // Check selection limit before adding
            if (selectionLimit && selectedItems.length >= selectionLimit) {
                return;
            }
            // Add item to array
            setSelectedItems([...selectedItems, rawItem]);
        }
    }, [
        selectedItems,
        selectionLimit,
        getItemId,
        setSelectedItems,
        isItemSelected,
    ]);
    const handleSelectAll = () => {
        const allCurrentlySelected = rawInfiniteItems.every(item => isItemSelected(item));
        if (allCurrentlySelected) {
            // Deselect all currently loaded items
            const loadedItemIds = new Set(rawInfiniteItems.map(getItemId));
            setSelectedItems(selectedItems.filter(selected => !loadedItemIds.has(getItemId(selected))));
        }
        else {
            // Add all currently loaded items (avoiding duplicates)
            const existingIds = new Set(selectedItems.map(getItemId));
            let newItems = rawInfiniteItems.filter(item => !existingIds.has(getItemId(item)));
            // If selection limit is set, only add up to the limit
            if (selectionLimit) {
                const remainingSlots = selectionLimit - selectedItems.length;
                newItems = newItems.slice(0, remainingSlots);
            }
            setSelectedItems([...selectedItems, ...newItems]);
        }
    };
    const allSelected = useMemo(() => rawInfiniteItems.length > 0 &&
        rawInfiniteItems.every(item => isItemSelected(item)), [rawInfiniteItems, selectedItems]);
    const someSelected = useMemo(() => rawInfiniteItems.some(item => isItemSelected(item)) && !allSelected, [rawInfiniteItems, selectedItems, allSelected]);
    const selectedItemsDescription = useMemo(() => {
        if (selectedItems.length === 0)
            return '';
        const names = selectedItems.map(item => mapToFieldOption(item).name);
        if (names.length <= 3)
            return names.join(', ');
        const firstThree = names.slice(0, 3);
        const remainingCount = names.length - 3;
        const andMoreText = formatAndMore(remainingCount);
        return `${firstThree.join(', ')} ${andMoreText}`;
    }, [selectedItems, formatAndMore]);
    const isLoading = loadingInfiniteOptions;
    const hasItems = !isLoading && rawInfiniteItems.length > 0;
    const showCardContent = showOnlyOnSearch
        ? hasItems && !!debouncedSearch && !isPreviousData
        : hasItems;
    // Calculate list height based on items or use inherited height
    const listHeight = inheritedListHeight ||
        (rawInfiniteItems.length <= 4
            ? rowHeight * rawInfiniteItems.length
            : MAX_LIST_HEIGHT);
    // Show select all only if no selection limit or limit >= total items
    const showSelectAll = withSelectAll &&
        !search &&
        (!selectionLimit || selectionLimit >= rawInfiniteItems.length);
    const renderContentParams = {
        rawItems: rawInfiniteItems,
        displayItems,
        selectedItems,
        isItemSelected,
        handleOptionCheck,
        handleSelectAll,
        allSelected,
        someSelected,
        search,
        setSearch,
        isLoading,
        isFetchingNextPage,
        hasNextPage: hasNextPage ?? false,
        fetchNextPage,
        selectionLimit,
    };
    return (_jsx(Accordion, { title: sectionTitle, description: selectedItemsDescription, ...(isExpandedProp !== undefined
            ? { expanded: isExpandedProp }
            : { defaultExpanded }), onChange: (_, expanded) => {
            setExpanded?.(expanded);
        }, elevation: 0, sx: {
            borderRadius: theme => theme.spacing(1),
            backgroundColor: ({ palette }) => palette.new.background.elements.grey,
            '&:before': {
                backgroundColor: 'transparent',
            },
            ...sx,
        }, disableGutters: true, customDetail: renderContent ? (renderContent(renderContentParams)) : (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(InputSearch, { onChange: setSearch, value: search }), !isLoading && rawInfiniteItems.length === 0 && (_jsx(Typography, { variant: "globalS", sx: {
                        color: 'textColors.neutralTextLighter',
                        mb: 1,
                        mt: 3,
                    }, children: search ? noResultsLabel : lackingOptionsMessage })), isLoading && _jsx(OptionsSkeleton, {}), showCardContent && (_jsxs(List, { sx: {
                        backgroundColor: theme => theme.palette.new?.background?.elements?.default,
                        border: theme => `1px solid ${theme.palette.border?.neutralBorder}`,
                        borderRadius: 2,
                        padding: 1,
                        maxHeight: virtualized ? listHeight : maxHeight,
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }, children: [showSelectAll && rawInfiniteItems.length > 0 && (_jsx(SelectableListItem, { id: "select-all", sx: { padding: 2, gap: 0.5, borderRadius: 1 }, onSelect: handleSelectAll, disabled: rawInfiniteItems.length === 0, selected: allSelected, indeterminate: someSelected, children: _jsx(Typography, { sx: {
                                    fontWeight: 'medium',
                                    color: theme => theme.palette.new?.text?.neutral?.default,
                                    ml: 0.5,
                                }, children: selectAllLabel }) })), rawInfiniteItems.length > 0 && (_jsx(_Fragment, { children: virtualized ? (_jsx(FixedSizeList, { overscanCount: OVERSCAN_COUNT, rowHeight: rowHeight, rowCount: rawInfiniteItems.length, rowComponent: CollapsibleAutocompleteSelectorItem, rowProps: {
                                    items: rawInfiniteItems,
                                    displayItems,
                                    selectedCount: selectedItems.length,
                                    selectionLimit: selectionLimit || 0,
                                    getItemId,
                                    isItemSelected,
                                    handleOptionCheck,
                                    itemRenderer,
                                }, onRowsRendered: (visibleRows) => {
                                    // Trigger fetch when user scrolls near the end
                                    const threshold = Math.max(0, rawInfiniteItems.length - OVERSCAN_COUNT);
                                    if (visibleRows.stopIndex >= threshold &&
                                        hasNextPage &&
                                        !isFetchingNextPage) {
                                        fetchNextPage();
                                    }
                                } })) : (rawInfiniteItems.map((rawItem, index) => {
                                const displayOption = displayItems[index];
                                const isSelected = isItemSelected(rawItem);
                                // IMPORTANT: ensure keys are stable across selection changes to avoid flickering in non-virtualized mode.
                                const stableKey = getItemId(rawItem) || displayOption.value || index;
                                return (_jsxs(SelectableListItem, { id: String(displayOption.value), sx: { padding: 2, borderRadius: 1 }, onSelect: () => handleOptionCheck(rawItem), disabled: !!selectionLimit &&
                                        !isSelected &&
                                        selectedItems.length >= selectionLimit, selected: isSelected, children: [itemRenderer &&
                                            itemRenderer(rawItem, displayOption), !itemRenderer && (_jsx(Typography, { sx: {
                                                fontWeight: 'medium',
                                                color: theme => theme.palette.new?.text?.neutral?.default,
                                                ml: 0.5,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }, children: displayOption.name }))] }, String(stableKey)));
                            })) })), _jsx(LoadMoreIndicator, { fetchNextPage: fetchNextPage, isFetchingNextPage: isFetchingNextPage, hasNextPage: hasNextPage ?? false })] }))] })) }));
}
export default CollapsibleAutocompleteSelector;
