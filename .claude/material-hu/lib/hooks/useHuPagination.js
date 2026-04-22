import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';
import { merge } from 'lodash';
import FormPagination from '../components/design-system/Inputs/Pagination/form';
import FormSearch from '../components/design-system/Inputs/Search/form';
import { formatSearchParams } from '../utils/pagination';
import useHuServerTableSorting from './TableSorting/useHuServerTableSorting';
const SEARCH_MIN_LENGTH = 3;
const FIRST_PAGE = 1;
/** Provides URL-synced server-side pagination, search, and sorting with ready-made controller components. */
export const useHuPagination = (options) => {
    const { defaultPage = FIRST_PAGE, defaultLimit = 10, defaultSearch = '', defaultOrder = 'ASC', defaultOrderBy = 'CREATED_AT', defaultFilters, limitOptions = [10, 20, 30], } = options ?? {};
    const [searchParams, setSearchParams] = useSearchParams();
    const { pathname } = useLocation();
    const defaultParams = useMemo(() => ({
        search: defaultSearch,
        pagination: {
            page: defaultPage,
            limit: defaultLimit,
        },
        order: defaultOrder,
        orderBy: defaultOrderBy,
        ...defaultFilters,
    }), [
        defaultSearch,
        defaultPage,
        defaultLimit,
        defaultOrder,
        defaultOrderBy,
        defaultFilters,
    ]);
    const defaultUrlParams = useMemo(() => {
        const entriesObj = Object.fromEntries(searchParams.entries());
        const urlParams = {
            ...entriesObj,
            search: entriesObj.search,
            pagination: {
                page: Number(entriesObj.page) || defaultParams.pagination.page,
                limit: Number(entriesObj.limit) || defaultParams.pagination.limit,
            },
            order: entriesObj.order,
            orderBy: entriesObj.orderBy,
        };
        const newUrlParams = { ...defaultParams };
        merge(newUrlParams, urlParams);
        return newUrlParams;
    }, [searchParams, defaultParams]);
    useEffect(() => setValue('params', defaultUrlParams), [defaultUrlParams]);
    const form = useForm({
        defaultValues: {
            params: defaultUrlParams,
        },
    });
    const { watch, getValues, setValue } = form;
    const setUrlParams = useCallback((values) => {
        setSearchParams(formatSearchParams(values), { replace: true });
    }, [pathname]);
    const setParams = useCallback((values) => {
        if (!values) {
            setUrlParams();
            setValue('params', defaultParams);
            return;
        }
        setUrlParams(values);
        setValue('params', values);
    }, [setUrlParams, defaultParams]);
    const setPartialParams = useCallback((values, resetPage = false) => {
        if (!values)
            return;
        const newParams = getValues('params');
        merge(newParams, values, resetPage ? { pagination: { page: FIRST_PAGE } } : undefined);
        setParams(newParams);
    }, [setParams]);
    const setOrderBy = useCallback((newOrderBy) => {
        const { pagination: { limit }, ...params } = getValues('params');
        setParams({
            ...params,
            pagination: { page: FIRST_PAGE, limit },
            orderBy: newOrderBy,
        });
    }, [setParams]);
    const handleChangeSort = useCallback((newOrderBy) => {
        const { order, orderBy, pagination: { limit }, ...params } = getValues('params');
        const isAsc = orderBy === newOrderBy && order === 'ASC';
        const isDesc = orderBy === newOrderBy && order === 'DESC_NULLS_LAST';
        let newOrder = 'ASC';
        if (isAsc) {
            newOrder = 'DESC_NULLS_LAST';
        }
        else if (isDesc) {
            newOrder = '';
        }
        setParams({
            ...params,
            pagination: { page: FIRST_PAGE, limit },
            orderBy: isDesc ? '' : newOrderBy,
            order: newOrder,
        });
    }, [setParams]);
    const handleChangePage = useCallback((newPage) => {
        const { pagination: { limit }, ...params } = getValues('params');
        setParams({
            ...params,
            pagination: { page: newPage, limit },
        });
    }, [setParams]);
    const handleChangeLimit = useCallback((newLimit) => {
        const params = getValues('params');
        setParams({
            ...params,
            pagination: { page: FIRST_PAGE, limit: newLimit },
        });
    }, [setParams]);
    const handleChangeSearch = useCallback((newSearch) => {
        const { pagination: { limit }, ...params } = getValues('params');
        setParams({
            ...params,
            search: newSearch,
            pagination: { page: FIRST_PAGE, limit },
        });
    }, [setParams]);
    const Search = useMemo(() => {
        const SearchController = ({ inputProps, ...props }) => (_jsx(FormSearch, { ...props, name: "params.search", inputProps: {
                ...inputProps,
                onChange: handleChangeSearch,
            } }));
        return SearchController;
    }, [handleChangeSearch]);
    const Pagination = useMemo(() => {
        const PaginationController = ({ inputProps, ...props }) => (_jsx(FormPagination, { ...props, name: "params.pagination", inputProps: {
                ...inputProps,
                limitOptions,
                onChangeLimit: handleChangeLimit,
                onChangePage: handleChangePage,
            } }));
        return PaginationController;
    }, [handleChangeLimit, handleChangePage, limitOptions]);
    const params = watch('params');
    const hasSearch = params?.search?.length >= SEARCH_MIN_LENGTH;
    const HuTableSortingHeader = useHuServerTableSorting({
        form,
        handleChangeSort,
    });
    return {
        hasSearch,
        form,
        params,
        setParams,
        setPartialParams,
        /** @deprecated Use HuTableSortingHeader instead */
        setOrderBy,
        Search,
        Pagination,
        HuTableSortingHeader,
    };
};
export default useHuPagination;
