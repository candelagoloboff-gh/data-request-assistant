import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SkeletonList from '../../audience/IndividualSelection/components/SkeletonList';
import InfiniteListLoader from '../../InfiniteListLoader';
import SelectableListItem from '../../SelectableListItem';
import UserAvatar from '../../UserAvatar';
import CardContainer from '../../../design-system/CardContainer';
import Search from '../../../design-system/Inputs/Search';
import List from '../../../design-system/List';
import StateCard from '../../../design-system/StateCard';
import { useDebounce } from '../../../../hooks/useDebounce';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { appearFromBottom } from '../../../../utils/animations';
const styles = {
    borderRadius: 1,
    animation: `${appearFromBottom} 125ms ease-in-out backwards`,
};
const RESULT_LIST_HEIGHT = '320px';
const UserAutoComplete = ({ onChange, onSearch, searchValue = '', slotProps, usersQuery, usersQueryDataParser, selectionLimit, value = new Set(), idKey = 'id', sx, infiniteScroll, onLoadMore, }) => {
    const scrollContainerRef = useRef(null);
    const psContainerRef = useRef(null);
    const [internalSearch, setInternalSearch] = useState(searchValue ?? '');
    const debouncedSearch = useDebounce(internalSearch, 300);
    useEffect(() => {
        onSearch?.(debouncedSearch);
        if (psContainerRef.current) {
            psContainerRef.current.scrollTop = 0;
        }
    }, [debouncedSearch, onSearch]);
    useEffect(() => {
        setInternalSearch(searchValue ?? '');
    }, [searchValue]);
    const parsedData = useMemo(() => usersQueryDataParser(usersQuery.data), [usersQuery.data, usersQueryDataParser]);
    const handleUserSelect = useCallback((userId) => {
        const newSet = new Set([...value]);
        if (newSet.has(userId)) {
            newSet.delete(userId);
        }
        else {
            newSet.add(userId);
        }
        onChange?.(newSet);
    }, [value, onChange]);
    const disableSearch = !parsedData?.length && !internalSearch;
    const canSelectMore = selectionLimit ? value?.size < selectionLimit : true;
    const handlePsContainerRef = useCallback((el) => {
        psContainerRef.current = el;
        if (el) {
            el.style.overscrollBehavior = 'contain';
        }
    }, []);
    const isEmpty = !parsedData?.length && !usersQuery.isLoading && !usersQuery.isFetching;
    const hasInfiniteScroll = infiniteScroll && !!onLoadMore;
    const showLoadingNextPage = hasInfiniteScroll && usersQuery.isFetching;
    const triggerOnLoadMore = hasInfiniteScroll && !usersQuery.isFetching;
    const showResults = !!parsedData?.length && !usersQuery.isLoading;
    const listContainerHeight = isEmpty ? '100%' : RESULT_LIST_HEIGHT;
    const handleYReachEnd = useCallback(() => {
        if (triggerOnLoadMore) {
            onLoadMore();
        }
    }, [triggerOnLoadMore, onLoadMore]);
    return (_jsxs(Stack, { sx: {
            height: '100%',
            gap: 1,
            ...sx,
        }, children: [_jsx(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: slotProps?.search && (_jsx(Search, { ...slotProps.search, value: internalSearch, onChange: setInternalSearch, disabled: disableSearch })) }), _jsx(CardContainer, { padding: 0, sx: {
                    backgroundColor: theme => theme.palette.new.background.elements.default,
                    borderRadius: styles.borderRadius,
                    width: '100%',
                    position: 'relative',
                    '& .ps__rail-y': {
                        zIndex: 1,
                    },
                }, children: _jsx(Box, { ref: scrollContainerRef, sx: {
                        height: listContainerHeight,
                    }, children: _jsxs(PerfectScrollbar, { style: { height: '100%' }, options: { suppressScrollX: true }, containerRef: handlePsContainerRef, onYReachEnd: handleYReachEnd, children: [usersQuery.isLoading && _jsx(SkeletonList, { sx: { p: 2 } }), isEmpty && (_jsx(StateCard, { title: slotProps?.emptyStateCard?.title ?? '', description: slotProps?.emptyStateCard?.description ?? '', slotProps: {
                                    ...slotProps?.emptyStateCard?.slotProps,
                                    card: {
                                        sx: {
                                            border: 'none',
                                            animation: `${appearFromBottom} 125ms ease-in-out backwards`,
                                        },
                                    },
                                } })), showResults && (_jsxs(List, { sx: {
                                    p: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    zIndex: 0,
                                    m: 2,
                                }, children: [parsedData.map(user => {
                                        const userId = user[idKey];
                                        const isSelected = value?.has(userId);
                                        return (_jsx(SelectableListItem, { id: String(userId), disabled: !isSelected && !canSelectMore, selected: isSelected, sx: styles, onSelect: () => handleUserSelect(userId), children: _jsx(UserAvatar, { user: user, ...slotProps?.userAvatar }) }, String(userId)));
                                    }), showLoadingNextPage && (_jsx(InfiniteListLoader, { sx: { alignSelf: 'center', mx: 'auto', mt: 2 }, loading: usersQuery.isFetching, onLoadMore: onLoadMore, containerRef: scrollContainerRef }))] }))] }) }) })] }));
};
export default UserAutoComplete;
