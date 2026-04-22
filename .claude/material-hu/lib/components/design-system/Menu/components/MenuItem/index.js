import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider, MenuItem as MuiMenuItem, useTheme } from '@mui/material';
export const MenuItem = ({ id, selected, disabled, onClick, sx, children, divider = false, ...props }) => {
    const theme = useTheme();
    return (_jsxs(_Fragment, { children: [_jsx(MuiMenuItem, { id: id, selected: selected, disabled: disabled, onClick: onClick, sx: {
                    p: 2,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        backgroundColor: theme.palette.new.action.background.neutral.hover,
                        transition: 'background-color 125ms ease-in-out',
                    },
                    ...sx,
                }, ...props, children: children }), divider && (_jsx(Divider, { sx: {
                    '&.MuiDivider-root': {
                        my: 0,
                    },
                } }))] }));
};
export default MenuItem;
