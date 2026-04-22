import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton, TableCell, TableRow } from '@mui/material';
const TableRowSkeleton = () => {
    return (_jsx(TableRow, { children: _jsxs(TableCell, { children: [_jsx(Skeleton, { sx: { height: theme => theme.spacing(2.8) } }), _jsx(Skeleton, { sx: { height: theme => theme.spacing(2.8), width: '50%' } })] }) }));
};
export default TableRowSkeleton;
