import { jsx as _jsx } from "react/jsx-runtime";
import { List as MuiList, useTheme } from '@mui/material';
export const List = ({ id, sx, children }) => {
    const theme = useTheme();
    return (_jsx(MuiList, { id: id, sx: {
            p: 0,
            backgroundColor: theme.palette.new.background.elements.default,
            ...sx,
        }, children: children }));
};
export default List;
