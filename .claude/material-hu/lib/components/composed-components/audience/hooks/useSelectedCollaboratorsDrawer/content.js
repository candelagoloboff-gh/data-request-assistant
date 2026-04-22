import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import UserAvatar from '../../../UserAvatar';
import CardContainer from '../../../../design-system/CardContainer';
import Search from '../../../../design-system/Inputs/Search';
import ListItemSkeleton from '../../../../design-system/List/components/ListItemSkeleton';
import StateCard from '../../../../design-system/StateCard';
import { useDebounce } from '../../../../../hooks/useDebounce';
import useVirtualizer from '../../../../../hooks/useVirtualizer';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { IconZoomExclamation } from '@tabler/icons-react';
const ROW_HEIGHT = 64;
const SelectedCollaboratorsDrawerContent = ({ totalCount, service, queryKey, }) => {
    const { t } = useTranslation('material_hu_only');
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);
    const scrollElementRef = useRef(null);
    const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery([queryKey, debouncedSearch], ({ pageParam }) => service({
        q: debouncedSearch || undefined,
        limit: 10,
        cursor: pageParam,
    }), {
        getNextPageParam: lastPage => {
            if (lastPage.data.cursor) {
                return lastPage.data.cursor;
            }
            return undefined;
        },
    });
    const results = data?.pages.flatMap(page => page.data.items || []) ?? [];
    const { virtualRows, rowVirtualizer } = useVirtualizer({
        scrollElementRef,
        registers: results,
        virtualizerOptions: {
            estimateSize: () => ROW_HEIGHT,
            count: results.length,
            getScrollElement: () => scrollElementRef.current,
            overscan: 5,
        },
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    });
    const count = results.length;
    const isEmpty = !isLoading && !count;
    const showList = !isLoading && count > 0;
    return (_jsx(CardContainer, { fullWidth: true, color: "grey", sx: {
            height: '100%',
            boxSizing: 'border-box',
            '& .MuiCardContent-root': { height: '100%', boxSizing: 'border-box' },
        }, children: _jsxs(Stack, { sx: { flex: 1, gap: 2, height: '100%' }, children: [_jsx(Search, { value: search, onChange: setSearch }), isLoading && (_jsx(Stack, { children: Array.from({ length: 5 }).map((_, i) => (_jsx(ListItemSkeleton, {}, i))) })), isEmpty && (_jsx(StateCard, { title: t('audience.no_collaborators_match_title'), description: t('audience.no_collaborators_match_description'), icon: IconZoomExclamation, slotProps: {
                        card: { sx: { border: 'none' } },
                    } })), showList && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: t('audience.total_collaborators', { count: totalCount }) }), _jsxs(Stack, { ref: scrollElementRef, sx: { flex: 1, overflow: 'auto' }, children: [_jsx(Stack, { sx: {
                                        height: `${rowVirtualizer.getTotalSize()}px`,
                                        position: 'relative',
                                        width: '100%',
                                    }, children: virtualRows.map(virtualItem => {
                                        const user = results[virtualItem.index];
                                        return (_jsx(Stack, { sx: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                transform: `translateY(${virtualItem.start}px)`,
                                            }, children: _jsx(UserAvatar, { user: user, profileProps: { showEmployeeInternalId: true } }) }, user.id));
                                    }) }), isFetchingNextPage && (_jsx(Stack, { sx: {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        py: 2,
                                    }, children: _jsx(CircularProgress, { size: 20 }) }))] })] }))] }) }));
};
export default SelectedCollaboratorsDrawerContent;
