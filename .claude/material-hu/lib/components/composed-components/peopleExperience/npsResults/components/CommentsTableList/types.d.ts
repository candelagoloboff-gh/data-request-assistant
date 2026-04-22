import { type StackProps } from '@mui/material';
export declare enum FilterOption {
    ALL = "ALL",
    PROMOTERS = "PROMOTERS",
    DETRACTORS = "DETRACTORS",
    NEUTRALS = "NEUTRALS"
}
export type FilterConfig = {
    label: string;
    description?: string;
};
export type FilterLabels = Record<FilterOption, FilterConfig>;
export type CommentData = {
    score: number;
    comment: string;
};
export type ColumnHeadings = {
    score: string;
    comment: string;
};
export type CommentsTableListSlotProps = {
    tableWrapper?: Omit<StackProps, 'children'>;
};
export type CommentsTableListProps = {
    title?: string;
    columnHeadings?: ColumnHeadings;
    filterLabels?: FilterLabels;
    selectedFilter?: FilterOption;
    onFilterChange?: (filter: FilterOption) => void;
    data?: CommentData[];
    loading?: boolean;
    loadingMore?: boolean;
    isPreviousData?: boolean;
    loadedCount?: number;
    totalCount?: number;
    onLoadMore?: () => void;
    onScrollToTop?: () => void;
    slotProps?: CommentsTableListSlotProps;
    emptyStateSlot?: React.ReactNode;
};
