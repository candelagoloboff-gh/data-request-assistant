import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { useDrawerSizeContext } from '../context';
import { DrawerSize } from '../types';
import { DrawerActions } from './Actions';
import { DrawerBody } from './Body';
import { DrawerDoubleLayout } from './DoubleLayout';
import { DrawerFooter } from './Footer';
import { DrawerHeader } from './Header';
/**
 * DrawerContent - Internal content structure without MuiDrawer wrapper.
 * Reads drawer size from DrawerSizeContext; toggles between restoreSize and 'taskFocus' when enableTaskFocus is true.
 */
export function DrawerContent({ title = '', children, onClose, onBack, primaryButtonProps, secondaryButtonProps, footer, primaryContent, secondaryContent, hasBackButton, slotProps, enableTaskFocus, extraHeaderActions, size, }) {
    const { size: drawerSize, setSize, restoreSize } = useDrawerSizeContext();
    const withDoubleLayout = !!primaryContent || !!secondaryContent;
    const hasExtraFooter = !!footer;
    const hasActions = !!primaryButtonProps || !!secondaryButtonProps;
    const isTaskFocus = drawerSize === DrawerSize.TASK_FOCUS;
    const onToggleTaskFocus = enableTaskFocus === true
        ? () => setSize(isTaskFocus ? restoreSize : DrawerSize.TASK_FOCUS)
        : undefined;
    return (_jsxs(Stack, { sx: { height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx(DrawerHeader, { title: title, onClose: onClose ?? (() => undefined), onBack: onBack, hasBackButton: hasBackButton, isTaskFocus: isTaskFocus, onToggleTaskFocus: onToggleTaskFocus, extraHeaderActions: extraHeaderActions }), withDoubleLayout ? (_jsx(DrawerDoubleLayout, { primaryContent: primaryContent ?? null, secondaryContent: secondaryContent ?? null, slotProps: slotProps })) : (_jsx(DrawerBody, { slotProps: slotProps?.layout, children: children })), hasExtraFooter && _jsx(DrawerFooter, { children: footer }), hasActions && (_jsx(DrawerActions, { size: size, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps }))] }));
}
