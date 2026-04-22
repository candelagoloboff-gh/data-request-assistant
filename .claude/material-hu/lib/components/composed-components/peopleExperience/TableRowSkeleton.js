import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import TableCell from '../../design-system/Table/components/TableCell';
import TableRow from '../../design-system/Table/components/TableRow';
import { times } from 'lodash';
const TableRowSkeleton = ({ columnsLength = 4, headerRow = false, getTableCellProps, }) => {
    return (_jsx(TableRow, { headerRow: headerRow, children: times(columnsLength, column => (_jsx(TableCell, { ...getTableCellProps?.(column), children: _jsx(Skeleton, { isLoading: true, width: "100%", height: "33px", variant: "rounded" }) }, column))) }));
};
export default TableRowSkeleton;
