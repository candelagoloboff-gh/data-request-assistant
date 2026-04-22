import { type UsePaginationItem, type UsePaginationProps } from '@mui/material/usePagination';
export type PaginationNavProps = {
    loading?: boolean;
    disabled?: boolean;
    items?: UsePaginationItem[];
    page?: number;
    onChange?: UsePaginationProps['onChange'];
};
