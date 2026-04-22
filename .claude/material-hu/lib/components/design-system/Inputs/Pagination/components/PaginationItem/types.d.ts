import { type UsePaginationItem, type UsePaginationProps } from '@mui/material/usePagination';
export type PaginationItemProps = UsePaginationItem & {
    disabled?: boolean;
    items: UsePaginationItem[];
    onChange?: UsePaginationProps['onChange'];
};
