import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { composeSx } from '../../../../utils/components';
/**
 * Drawer.Body - Simple content section with scroll support
 */
export function DrawerBody({ children, slotProps }) {
    return (_jsx(Stack, { ...slotProps, sx: composeSx({
            p: 3,
            overflowY: 'auto',
            flexGrow: 1,
            maxWidth: theme => theme.breakpoints.values.lg,
        }, slotProps?.sx), children: children }));
}
