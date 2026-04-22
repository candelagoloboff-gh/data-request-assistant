import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Drawer as MuiDrawer } from '@mui/material';
import { composeSx } from '../../../../utils/components';
import { sizeStyleMap } from '../constants';
import { DrawerSizeContext } from '../context';
import { DrawerSize, } from '../types';
/**
 * DrawerWrapper - Wrapper component for the Drawer.
 * Provides DrawerSizeContext with current size (medium | large | taskFocus). When enableTaskFocus is true, clients can toggle to taskFocus.
 */
export function DrawerWrapper(props) {
    const { children, sx, open, PaperProps, onClose, primaryContent, secondaryContent, size = DrawerSize.SMALL, disableEscapeKeyDown, enableTaskFocus, anchor = 'right', ...drawerProps } = props;
    const withDoubleLayout = !!primaryContent || !!secondaryContent;
    const restoreSize = withDoubleLayout
        ? DrawerSize.LARGE
        : size;
    const [drawerSize, setDrawerSize] = useState(restoreSize);
    const effectiveSize = enableTaskFocus === true ? drawerSize : restoreSize;
    const stylesForSize = sizeStyleMap[effectiveSize];
    const sizeContextValue = {
        size: effectiveSize,
        setSize: enableTaskFocus === true ? setDrawerSize : () => undefined,
        restoreSize,
    };
    const [taskFocusStyles, setTaskFocusStyles] = useState({});
    useEffect(() => {
        if (open && enableTaskFocus) {
            requestAnimationFrame(() => {
                setTaskFocusStyles({
                    transitionProperty: 'max-width, width, border-radius, transform !important',
                    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1) !important',
                    transitionDuration: '225ms !important',
                });
            });
        }
    }, [open, enableTaskFocus]);
    return (_jsx(DrawerSizeContext.Provider, { value: sizeContextValue, children: _jsx(MuiDrawer, { anchor: anchor, open: open, onClose: disableEscapeKeyDown
                ? undefined
                : (_event, reason) => {
                    onClose?.(reason);
                }, PaperProps: {
                ...PaperProps,
                sx: composeSx(taskFocusStyles, {
                    borderRadius: '16px 0 0 16px',
                    boxShadow: 'none',
                }, stylesForSize, PaperProps?.sx),
            }, sx: composeSx({
                zIndex: 1300,
            }, sx), ...drawerProps, children: children }) }));
}
