import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Tooltip from '../../Tooltip';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconArrowLeft, IconWindowMaximize, IconWindowMinimize, IconX, } from '@tabler/icons-react';
import { composeSx } from '../../../../utils/components';
import { useDrawerSizeContext } from '../context';
import { DrawerSize } from '../types';
/**
 * Drawer.Header - Header section with title, back button, optional maximize (task focus) button, and close button
 */
export function DrawerHeader({ title, onClose, onBack, hasBackButton = false, children, sx, onToggleTaskFocus, extraHeaderActions, }) {
    const { t } = useTranslation();
    const { size } = useDrawerSizeContext();
    const theme = useTheme();
    const newPalette = theme.palette?.new;
    const isTaskFocus = size === DrawerSize.TASK_FOCUS;
    return (_jsxs(Stack, { sx: composeSx({
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            py: 2,
            px: 3,
            borderBottom: `1px solid ${newPalette?.border.neutral.divider}`,
            color: 'inherit',
        }, sx), children: [hasBackButton && (_jsx(IconButton, { onClick: () => (onBack || onClose)?.('backButton'), sx: { color: 'inherit' }, children: _jsx(IconArrowLeft, {}) })), _jsx(Typography, { variant: "globalS", sx: { fontWeight: 'semiBold', flex: 1, color: 'inherit' }, children: title }), children, extraHeaderActions, onToggleTaskFocus && (_jsx(Tooltip, { title: isTaskFocus
                    ? t('material_hu_only:drawer.exit_task_focus')
                    : t('material_hu_only:drawer.enter_task_focus'), children: _jsx(IconButton, { onClick: onToggleTaskFocus, sx: { color: 'inherit' }, children: isTaskFocus ? _jsx(IconWindowMinimize, {}) : _jsx(IconWindowMaximize, {}) }) })), _jsx(Tooltip, { title: t('general:close'), children: _jsx(IconButton, { onClick: _event => {
                        onClose?.('dismissButton');
                    }, sx: { color: 'inherit' }, children: _jsx(IconX, {}) }) })] }));
}
