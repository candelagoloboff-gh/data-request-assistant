import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoadingButton } from '@mui/lab';
import { Stack, useTheme } from '@mui/material';
import { DrawerSize } from '../types';
/**
 * Drawer.Actions - Action buttons section
 */
export function DrawerActions({ size, primaryButtonProps, secondaryButtonProps, children, }) {
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const buttonFullWidth = size === DrawerSize.SMALL || size === DrawerSize.MEDIUM;
    return (_jsx(Stack, { sx: {
            boxSizing: 'border-box',
            borderTop: `1px solid ${newPalette?.border.neutral.divider}`,
            alignSelf: 'stretch',
            '> *': {
                boxSizing: 'inherit',
            },
        }, children: children || (_jsxs(Stack, { sx: {
                gap: 1,
                px: 3,
                py: 2,
                flexDirection: { xs: 'column-reverse', sm: 'row' },
                justifyContent: 'flex-end',
                maxWidth: theme => theme.breakpoints.values.lg,
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
            }, children: [!!secondaryButtonProps && (_jsx(LoadingButton, { variant: "tertiary", size: "large", fullWidth: buttonFullWidth, ...secondaryButtonProps })), !!primaryButtonProps && (_jsx(LoadingButton, { variant: "primary", size: "large", fullWidth: buttonFullWidth, ...primaryButtonProps }))] })) }));
}
