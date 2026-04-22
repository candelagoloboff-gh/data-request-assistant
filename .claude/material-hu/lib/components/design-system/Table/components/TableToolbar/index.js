import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
const TableToolbar = ({ children, sx = {}, ...props }) => {
    return (_jsx(Stack, { sx: {
            px: 2,
            py: 3,
            color: theme => theme.palette.new.text.neutral.lighter,
            backgroundColor: theme => theme.palette.new.background.layout.tertiary,
            ...sx,
        }, ...props, children: children }));
};
TableToolbar.displayName = 'TableToolbar';
export default TableToolbar;
