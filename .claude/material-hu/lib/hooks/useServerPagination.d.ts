import { type FC } from 'react';
import { type TableCellProps } from '@mui/material';
type TableSortingHeaderProps = FC<TableCellProps & {
    id: string;
    disabled?: boolean;
}>;
export type FormValues = {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    order: string;
    orderBy: string;
};
type ServerPaginationOptions = {
    labelRowsPerPage?: string;
    defaultOrderBy?: string;
    defaultOrder?: string;
    defaultPage?: number;
    defaultLimit?: number;
    defaultQuery?: string;
    limitOptions?: number[];
};
/** Provides server-side pagination, sorting, and search state backed by react-hook-form. */
declare const useServerPagination: (options?: ServerPaginationOptions) => {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    Searchbar: FC<{
        hasCounter?: boolean;
        helperText?: string;
    } & Omit<import("@mui/material").TextFieldProps, "helperText">>;
    paginationController: (total: number) => import("react/jsx-runtime").JSX.Element;
    orderBy: string;
    order: string;
    TableSortingHeader: TableSortingHeaderProps;
    setQuery: (newQuery: string) => void;
    setPage: (page: number) => void;
    setOrderBy: (newOrderBy: string) => void;
    setOrder: (newOrder?: string) => void;
};
export { useServerPagination, type TableSortingHeaderProps };
