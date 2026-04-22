import { jsx as _jsx } from "react/jsx-runtime";
import { TableHead as MuiTableHead } from '@mui/material';
const TableHead = ({ children, ...props }) => {
    return _jsx(MuiTableHead, { ...props, children: children });
};
TableHead.displayName = 'TableHead';
export default TableHead;
