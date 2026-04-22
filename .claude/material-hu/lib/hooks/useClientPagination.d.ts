import { type TableCellProps, type TableSortLabelProps } from '@mui/material';
import { type FormValues } from './useServerPagination';
type ClientPaginationOptions<TData> = {
    items: TData[];
    queriedKeys: (keyof TData)[];
    labelRowsPerPage: string;
    defaultOrderBy?: string;
    defaultOrder?: TableSortLabelProps['direction'];
    limitOptions?: number[];
};
/** Provides client-side pagination, sorting, and text filtering over an in-memory list. */
declare const useClientPagination: <TData extends object>(options: ClientPaginationOptions<TData>) => {
    paginatedItems: TData[];
    Searchbar: import("react").FC<{
        hasCounter?: boolean;
        helperText?: string;
    } & Omit<import("@mui/material").TextFieldProps, "helperText">>;
    resetForm: import("react-hook-form").UseFormReset<FormValues>;
    paginationController: import("react/jsx-runtime").JSX.Element;
    TableSortingHeader: ({ children, id, selector, ...rest }: TableCellProps & {
        id: string;
        selector?: ((value: TData) => any) | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { useClientPagination };
