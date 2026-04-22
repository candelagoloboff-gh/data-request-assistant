import { jsx as _jsx } from "react/jsx-runtime";
import { TableBody as MuiTableBody } from '@mui/material';
const TableBody = ({ children, ...props }) => {
    return _jsx(MuiTableBody, { ...props, children: children });
};
TableBody.displayName = 'TableBody';
export default TableBody;
