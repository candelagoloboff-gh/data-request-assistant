import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
/**
 * Drawer.Footer - Extra footer section for additional content
 */
export function DrawerFooter({ children }) {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    return (_jsx(Stack, { sx: {
            px: 3,
            py: 2,
            borderTop: `1px solid ${newPalette?.border.neutral.divider}`,
            maxWidth: theme => theme.breakpoints.values.lg,
        }, children: children }));
}
