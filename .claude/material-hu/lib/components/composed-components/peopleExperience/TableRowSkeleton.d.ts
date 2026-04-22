import { type TableCellProps } from '../../design-system/Table/components/TableCell';
export type TableRowSkeletonProps = {
    columnsLength?: number;
    headerRow?: boolean;
    getTableCellProps?: (column: number) => TableCellProps;
};
declare const TableRowSkeleton: ({ columnsLength, headerRow, getTableCellProps, }: TableRowSkeletonProps) => import("react/jsx-runtime").JSX.Element;
export default TableRowSkeleton;
