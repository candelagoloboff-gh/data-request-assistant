import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { TableCell, TableSortLabel } from '@mui/material';
import PaginationController from '../components/composed-components/Pagination/PaginationController';
import buildSearchbar from '../components/composed-components/Pagination/SearchBarController';
import { useDebounce } from './useDebounce';
/** Returns a TableSortingHeader component wired to server-side sorting form values. */
const useServerTableSorting = (form) => {
    const { watch, setValue } = form;
    const { order, orderBy } = watch();
    const createSortHandler = (property) => () => {
        const isAsc = orderBy === property && order === 'ASC';
        setValue('orderBy', property);
        setValue('order', isAsc ? 'DESC_NULLS_LAST' : 'ASC');
    };
    // this component replaces the TableCell inside TableHeader
    const TableSortingHeader = ({ children, id, disabled, ...rest }) => (_jsx(TableCell, { ...rest, sortDirection: orderBy === id && order === 'ASC' ? 'asc' : 'desc', sx: { pr: 0 }, children: _jsx(TableSortLabel, { active: orderBy === id, direction: orderBy === id && order === 'ASC' ? 'asc' : 'desc', onClick: createSortHandler(id), disabled: disabled, IconComponent: ArrowDropDownIcon, children: children }) }));
    return TableSortingHeader;
};
/** Provides server-side pagination, sorting, and search state backed by react-hook-form. */
const useServerPagination = (options) => {
    const { labelRowsPerPage = '', // Depends if paginationController is used
    defaultOrderBy = 'CREATED_AT', defaultOrder = 'ASC', defaultPage = 0, defaultLimit = 10, defaultQuery = '', limitOptions = [10, 20, 30], } = options ?? {};
    const form = useForm({
        defaultValues: {
            query: defaultQuery,
            pagination: {
                page: defaultPage,
                limit: defaultLimit === limitOptions[0] ? limitOptions[0] : defaultLimit,
            },
            order: defaultOrder,
            orderBy: defaultOrderBy,
        },
    });
    const { watch, setValue, control } = form;
    const { query, pagination, order, orderBy } = watch();
    const setPage = useCallback((page) => setValue('pagination.page', page), [setValue]);
    const setLimit = useCallback((limit) => setValue('pagination.limit', limit), [setValue]);
    const setOrderBy = useCallback((newOrderBy) => setValue('orderBy', newOrderBy), [setValue]);
    const setOrder = useCallback((newOrder) => setValue('order', newOrder || (order === 'DESC' ? 'ASC' : 'DESC')), [setValue, order]);
    const setQuery = useCallback((newQuery) => setValue('query', newQuery), [setValue]);
    const TableSortingHeader = useServerTableSorting(form);
    const paginationController = (total) => (_jsx(PaginationController, { control: control, total: total, setPage: setPage, setLimit: setLimit, limitOptions: limitOptions, labelRowsPerPage: labelRowsPerPage }));
    const debouncedQuery = useDebounce(query);
    useEffect(() => {
        setPage(0);
    }, [debouncedQuery, pagination.limit]);
    const Searchbar = useMemo(() => buildSearchbar({ control, setValue, defaultQuery }), []);
    return {
        query: debouncedQuery,
        pagination,
        Searchbar,
        paginationController,
        orderBy,
        order,
        TableSortingHeader,
        setQuery,
        setPage,
        setOrderBy,
        setOrder,
    };
};
export { useServerPagination };
