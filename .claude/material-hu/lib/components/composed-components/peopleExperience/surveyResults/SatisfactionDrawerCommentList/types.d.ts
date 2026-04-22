export type CommentData = {
    id: number;
    copetin: string;
    comment: string;
};
export type SatisfactionDrawerCommentListProps = {
    headerTitle?: string;
    tableHeaderDecorator?: React.ReactNode;
    comments?: CommentData[];
    loading?: boolean;
    loadingMore?: boolean;
    emptyStateTitle?: string;
    emptyStateDescription?: string;
};
