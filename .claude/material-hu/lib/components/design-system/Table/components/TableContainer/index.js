import { jsx as _jsx } from "react/jsx-runtime";
import { TableContainer as MuiTableContainer } from '@mui/material';
const TableContainer = ({ children, sx, containerRef, ...props }) => {
    return (_jsx(MuiTableContainer, { ref: containerRef, sx: {
            border: theme => `1px solid ${theme.palette.new.border.neutral.default}`,
            borderRadius: '16px',
            ...sx,
        }, ...props, children: children }));
};
export default TableContainer;
