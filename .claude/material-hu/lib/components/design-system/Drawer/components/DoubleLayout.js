import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
import { composeSx } from '../../../../utils/components';
/**
 * Drawer.DoubleLayout - Two-column layout for side-by-side content
 */
export function DrawerDoubleLayout({ primaryContent, secondaryContent, slotProps, }) {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    return (_jsxs(Stack, { ...slotProps?.layout, sx: composeSx({
            flexDirection: 'row',
            flexGrow: 1,
            overflow: 'hidden',
        }, slotProps?.layout?.sx), children: [_jsx(Stack, { ...slotProps?.primaryContent, sx: composeSx({
                    p: 3,
                    overflowY: 'scroll',
                    width: '50%',
                }, slotProps?.primaryContent?.sx), children: primaryContent }), _jsx(Stack, { ...slotProps?.secondaryContent, sx: composeSx({
                    p: 3,
                    overflowY: 'scroll',
                    width: '50%',
                    bgcolor: newPalette?.background.elements.grey,
                }, slotProps?.secondaryContent?.sx), children: secondaryContent })] }));
}
