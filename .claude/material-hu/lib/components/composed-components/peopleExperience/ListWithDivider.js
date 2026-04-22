import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Children } from 'react';
import { List as BaseList, Divider, } from '@mui/material';
const ListWithDivider = ({ items, dividerProps, ...other }) => {
    return (_jsx(BaseList, { ...other, children: Children.map(items, item => (_jsxs(_Fragment, { children: [item, _jsx(Divider, { variant: "middle", ...dividerProps, sx: {
                        '&:last-of-type': { visibility: 'hidden' },
                        ...dividerProps?.sx,
                    } })] }))) }));
};
export default ListWithDivider;
