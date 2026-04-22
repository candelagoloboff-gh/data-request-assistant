import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useRef } from 'react';
import SelectableListItem from '../../SelectableListItem';
import UserAvatar from '../../UserAvatar';
import Badge from '../../../design-system/Badge';
import CardContainer from '../../../design-system/CardContainer';
import Search from '../../../design-system/Inputs/Search';
import List from '../../../design-system/List';
import StateCard from '../../../design-system/StateCard';
import Title from '../../../design-system/Title';
import useVirtualizer from '../../../../hooks/useVirtualizer';
import Button from '@mui/lab/LoadingButton';
import { CircularProgress, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { IconFilter } from '@tabler/icons-react';
import { appearFromBottom } from '../../../../utils/animations';
import SkeletonList from './components/SkeletonList';
const ROW_HEIGHT = 64;
const ITEM_SX = { borderRadius: 1 };
const IndividualSelection = ({ filterCount, onChange, onSearch, searchValue = '', slotProps, usersQuery, usersQueryDataParser, selectionLimit, value = new Set(), idKey = 'id', sx, }) => {
    const scrollRef = useRef(null);
    const parsedData = useMemo(() => usersQueryDataParser(usersQuery.data), [usersQuery.data, usersQueryDataParser]);
    const selectedAll = useMemo(() => !!parsedData?.length &&
        parsedData.every(user => value?.has(user[idKey])), [parsedData, value, idKey]);
    const valueRef = useRef(value);
    valueRef.current = value;
    const handleUserSelect = useCallback((userId) => {
        const newSet = new Set(valueRef.current);
        if (newSet.has(userId)) {
            newSet.delete(userId);
        }
        else {
            newSet.add(userId);
        }
        onChange?.(newSet);
    }, [onChange]);
    const handleSelectAll = useCallback(() => {
        if (selectedAll) {
            onChange?.(new Set());
        }
        else {
            onChange?.(new Set(parsedData?.map(user => user[idKey]) ||
                []));
        }
    }, [parsedData, selectedAll, idKey, onChange]);
    const { virtualRows, rowVirtualizer } = useVirtualizer({
        scrollElementRef: scrollRef,
        registers: parsedData ?? [],
        virtualizerOptions: {
            estimateSize: () => ROW_HEIGHT,
            count: parsedData?.length ?? 0,
            getScrollElement: () => scrollRef.current,
            overscan: 5,
        },
        hasNextPage: usersQuery.hasNextPage,
        isFetchingNextPage: usersQuery.isFetchingNextPage,
        fetchNextPage: usersQuery.fetchNextPage,
    });
    const disableSearch = !parsedData?.length && !filterCount && !searchValue;
    const canSelectMore = selectionLimit ? value?.size < selectionLimit : true;
    return (_jsxs(Stack, { sx: {
            p: 2,
            height: '100%',
            backgroundColor: theme => theme.palette.new.background.elements.default,
            gap: 2,
            borderRadius: 2,
            ...sx,
        }, children: [slotProps?.title && (_jsx(Title, { variant: "S", ...slotProps?.title })), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 2, alignItems: 'center' }, children: [slotProps?.search && (_jsx(Search, { ...slotProps?.search, value: searchValue, onChange: onSearch, disabled: disableSearch })), slotProps?.filterButton && (_jsx(Button, { startIcon: _jsx(IconFilter, {}), variant: "secondary", sx: { textWrap: 'nowrap' }, endIcon: (filterCount ?? 0) > 0 && (_jsx(Badge, { sx: { pl: 1.5 }, badgeContent: filterCount, color: "primary" })), ...slotProps?.filterButton }))] }), _jsxs(CardContainer, { padding: 16, ref: scrollRef, sx: {
                    backgroundColor: theme => theme.palette.new.background.elements.default,
                    borderRadius: 2,
                    width: '100%',
                    overflow: 'auto',
                    flex: 1,
                    minHeight: 0,
                }, children: [usersQuery.isLoading && _jsx(SkeletonList, {}), !parsedData?.length && !usersQuery.isLoading && (_jsx(StateCard, { title: slotProps?.emptyStateCard?.title ?? '', description: slotProps?.emptyStateCard?.description ?? '', slotProps: {
                            ...slotProps?.emptyStateCard?.slotProps,
                            card: {
                                sx: {
                                    border: 'none',
                                    animation: `${appearFromBottom} 125ms ease-in-out backwards`,
                                },
                            },
                        } })), !!parsedData?.length && !usersQuery.isLoading && (_jsxs(List, { sx: {
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column',
                        }, children: [slotProps?.selectAllCheckbox && (_jsx(SelectableListItem, { id: "select-all", onSelect: handleSelectAll, selected: selectedAll, sx: {
                                    py: 1,
                                    mb: 2,
                                    borderRadius: 1,
                                }, children: _jsx(Typography, { variant: "globalS", color: theme => theme.palette.new.text.neutral.default, children: slotProps?.selectAllCheckbox?.label }) })), _jsx(Stack, { sx: {
                                    height: `${rowVirtualizer.getTotalSize()}px`,
                                    position: 'relative',
                                    width: '100%',
                                }, children: virtualRows.map(virtualItem => {
                                    const user = parsedData[virtualItem.index];
                                    const userId = user[idKey];
                                    const isSelected = value?.has(userId) || selectedAll;
                                    return (_jsx(Stack, { sx: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            transform: `translateY(${virtualItem.start}px)`,
                                        }, children: _jsx(SelectableListItem, { id: userId, disabled: !isSelected ? !canSelectMore : false, selected: isSelected, sx: ITEM_SX, onSelect: handleUserSelect, children: _jsx(UserAvatar, { user: user, ...slotProps?.userAvatar }) }) }, userId));
                                }) }), usersQuery.isFetchingNextPage && (_jsx(Stack, { sx: {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    py: 2,
                                }, children: _jsx(CircularProgress, { size: 20 }) }))] }))] })] }));
};
export default IndividualSelection;
