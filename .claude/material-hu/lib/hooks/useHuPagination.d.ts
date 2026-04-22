import { type FormPaginationProps } from '../components/design-system/Inputs/Pagination/types';
import { type FormInputSearchProps } from '../components/design-system/Inputs/Search/types';
export type SearchControllerProps = Omit<FormInputSearchProps, 'name' | 'inputProps' | 'disabled'> & {
    inputProps?: Omit<FormInputSearchProps['inputProps'], 'onChange'>;
};
export type PaginationControllerProps = Omit<FormPaginationProps, 'name' | 'inputProps' | 'disabled'> & {
    inputProps?: Omit<FormPaginationProps['inputProps'], 'onChangeLimit' | 'onChangePage' | 'limitOptions'>;
};
export type PaginationParams = {
    search: string;
    pagination: {
        page: number;
        limit: number;
    };
    order: string;
    orderBy: string;
    [key: string]: any;
};
export type FormValues = {
    params: PaginationParams;
};
export type UseHuPaginationOptions = {
    defaultPage?: number;
    defaultLimit?: number;
    defaultSearch?: string;
    defaultOrder?: string;
    defaultOrderBy?: string;
    defaultFilters?: Object;
    limitOptions?: number[];
};
/** Provides URL-synced server-side pagination, search, and sorting with ready-made controller components. */
export declare const useHuPagination: (options?: UseHuPaginationOptions) => {
    hasSearch: boolean;
    form: import("react-hook-form").UseFormReturn<FormValues, any, undefined>;
    params: PaginationParams;
    setParams: (values: FormValues["params"] | null) => void;
    setPartialParams: (values: Partial<FormValues["params"]> | null, resetPage?: boolean) => void;
    /** @deprecated Use HuTableSortingHeader instead */
    setOrderBy: (newOrderBy: string) => void;
    Search: ({ inputProps, ...props }: SearchControllerProps) => import("react/jsx-runtime").JSX.Element;
    Pagination: ({ inputProps, ...props }: PaginationControllerProps) => import("react/jsx-runtime").JSX.Element;
    HuTableSortingHeader: ({ children, id, disabled, tooltipTitle, ...rest }: import("./TableSorting/useHuServerTableSorting").HuTableSortingHeaderProps) => import("react/jsx-runtime").JSX.Element;
};
export default useHuPagination;
