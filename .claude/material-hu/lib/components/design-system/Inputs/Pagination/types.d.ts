import { type ControllerProps } from 'react-hook-form';
import { type SxProps, type Theme } from '@mui/material';
export type PaginationProps = {
    /** Shows a loading state on the pagination controls */
    loading?: boolean;
    /** Prevents interaction with the pagination controls */
    disabled?: boolean;
    /** Visual variant — basic shows prev/next, changer adds a per-page selector */
    type?: 'basic' | 'changer';
    /** Number of items shown per page */
    limit?: number;
    /** Available per-page size options shown in the changer */
    limitOptions?: number[];
    /** Callback fired when the per-page limit changes */
    onChangeLimit?: (newLimit: number) => void;
    /** Currently active page number (1-based) */
    page?: number;
    /** Callback fired when the active page changes */
    onChangePage?: (newPage: number) => void;
    /** Total number of pages */
    totalPages?: number;
    /** Custom styles applied to the root element */
    sx?: SxProps<Theme>;
};
export type FormPaginationProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Pagination component */
    inputProps?: Pick<PaginationProps, 'loading' | 'type' | 'limitOptions' | 'totalPages' | 'sx' | 'onChangeLimit' | 'onChangePage' | 'sx'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
