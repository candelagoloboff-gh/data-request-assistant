import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Skeleton from '../../../../design-system/Skeleton';
import Stack from '@mui/material/Stack';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const SatisfactionTableContentSkeleton = ({ rows = 5, hasDifferenceColumn = false, }) => {
    return (_jsx(_Fragment, { children: Array.from({ length: rows }).map((_, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Skeleton, { width: 220, height: 20 }), _jsx(Skeleton, { width: 120, height: 16 })] }) }), _jsx(TableCell, { children: _jsx(Skeleton, { width: 26, height: 24 }) }), hasDifferenceColumn && (_jsx(TableCell, { children: _jsx(Skeleton, { width: 26, height: 24 }) })), _jsx(TableCell, { children: _jsx(Skeleton, { variant: "rounded", width: "100%", height: 8 }) }), _jsx(TableCell, { sx: { width: 24 } })] }, index))) }));
};
export default SatisfactionTableContentSkeleton;
