export type TableSkeletonProps = {
    /** The number of rows to render in the skeleton table. Defaults to 3. */
    rows?: number;
    /** The number of columns to render in the skeleton table. */
    cols: number;
};
declare const TableSkeleton: ({ rows, cols }: TableSkeletonProps) => import("react/jsx-runtime").JSX.Element;
export default TableSkeleton;
