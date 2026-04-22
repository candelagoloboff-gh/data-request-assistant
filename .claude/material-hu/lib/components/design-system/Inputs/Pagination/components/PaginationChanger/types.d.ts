export type PaginationChangerProps = {
    loading?: boolean;
    limit?: number;
    limitOptions?: number[];
    onChange?: (newLimit: number) => void;
    disabled?: boolean;
};
