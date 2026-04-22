import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
const HeaderContainer = ({ children, slotProps }) => {
    const theme = useTheme();
    return (_jsx(Stack, { component: "header", ...slotProps?.root, sx: {
            flexDirection: 'row',
            alignItems: 'center',
            px: 2,
            py: 1.5,
            backgroundColor: theme.palette.new.background.layout.tertiary,
            justifyContent: 'space-between',
            gap: 1,
            ...slotProps?.root?.sx,
        }, children: children }));
};
export default HeaderContainer;
