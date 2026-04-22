import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { TableCell, TableSortLabel, } from '@mui/material';
import _ from 'lodash';
import PaginationController from '../components/composed-components/Pagination/PaginationController';
import buildSearchbar from '../components/composed-components/Pagination/SearchBarController';
function applyFilters(items, query, queriedKeys) {
    if (!query || typeof query !== 'string') {
        return items;
    }
    const lowerCaseQuery = String(query).toLowerCase();
    return items.filter(item => {
        let matches = true;
        if (query) {
            matches = queriedKeys.some(key => {
                const value = item[key];
                if (value == null || value === undefined || Number.isNaN(value))
                    return false;
                const stringValue = String(value).toLowerCase();
                return stringValue.includes(lowerCaseQuery);
            });
        }
        return matches;
    });
}
function applyPagination(items, page, limit) {
    return items.slice(page * limit, page * limit + limit);
}
const useTableSorting = (defaultOrderBy, defaultOrder) => {
    const [orderBy, setOrderBy] = useState(defaultOrderBy);
    const [order, setOrder] = useState(defaultOrder);
    const [valueSelector, setValueSelector] = useState(null);
    const createSortHandler = (property, selector) => () => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        setValueSelector(selector || null);
    };
    // this component replaces the TableCell inside TableHeader
    const TableSortingHeader = ({ children, id, selector, ...rest }) => (_jsx(TableCell, { ...rest, sortDirection: orderBy === id ? order : false, children: _jsx(TableSortLabel, { active: orderBy === id, direction: orderBy === id ? order : 'asc', onClick: createSortHandler(id, selector), IconComponent: ArrowDropDownIcon, children: children }) }));
    // this function sorts the items using the currently selected sorting options
    const sortFunction = (items) => _.orderBy(items, [
        i => {
            const value = valueSelector
                ? valueSelector(i)
                : i[orderBy];
            if (typeof value === 'number') {
                return value;
            }
            return String(value ?? '').toLowerCase();
        },
    ], [order]);
    return {
        TableSortingHeader,
        sortFunction,
    };
};
/** Provides client-side pagination, sorting, and text filtering over an in-memory list. */
const useClientPagination = (options) => {
    const { items, queriedKeys, labelRowsPerPage, defaultOrderBy = 'position', defaultOrder = 'asc', limitOptions = [10, 20, 30], } = options;
    const { watch, control, setValue, reset } = useForm({
        defaultValues: {
            query: '',
            pagination: {
                page: 0,
                limit: limitOptions[0],
            },
        },
    });
    const { query, pagination } = watch();
    const { TableSortingHeader, sortFunction } = useTableSorting(defaultOrderBy, defaultOrder);
    const sortedItems = sortFunction(items);
    // Usually query is done on backend with indexing solutions
    const filteredItems = useMemo(() => applyFilters(sortedItems, query, queriedKeys), [sortedItems, query]);
    const paginatedItems = useMemo(() => applyPagination(filteredItems, pagination.page, pagination.limit), [filteredItems, pagination.page, pagination.limit]);
    const setPage = (page) => setValue('pagination.page', page);
    const setLimit = (limit) => setValue('pagination.limit', limit);
    useEffect(() => {
        setPage(0);
    }, [filteredItems.length, pagination.limit]);
    const paginationController = (_jsx(PaginationController, { control: control, total: filteredItems.length, setPage: setPage, setLimit: setLimit, limitOptions: limitOptions, labelRowsPerPage: labelRowsPerPage }));
    const Searchbar = useMemo(() => buildSearchbar({ control, setValue }), []);
    return {
        paginatedItems,
        Searchbar,
        resetForm: reset,
        paginationController,
        TableSortingHeader,
    };
};
export { useClientPagination };
