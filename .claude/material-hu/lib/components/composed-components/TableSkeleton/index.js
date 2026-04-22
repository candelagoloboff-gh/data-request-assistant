import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Skeleton from '../../design-system/Skeleton';
import TableCell from '../../design-system/Table/components/TableCell';
import TableRow from '../../design-system/Table/components/TableRow';
import { appearFromBottom } from '../../../utils/animations';
const TableSkeleton = ({ rows = 3, cols = 3 }) => {
    return (_jsx(_Fragment, { children: Array.from({ length: rows }).map((_, index) => (_jsx(TableRow, { children: Array.from({ length: cols }).map((__, idx) => (_jsx(TableCell, { children: _jsx(Skeleton, { sx: {
                        animation: `${appearFromBottom} 125ms ease-in-out backwards`,
                    }, variant: "rounded", height: 32 }) }, idx))) }, index))) }));
};
export default TableSkeleton;
