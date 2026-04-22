import { jsx as _jsx } from "react/jsx-runtime";
import { Table as MuiTable } from '@mui/material';
const Table = ({ children, ...props }) => {
    return _jsx(MuiTable, { ...props, children: children });
};
export default Table;
