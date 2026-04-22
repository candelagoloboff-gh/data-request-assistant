import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { ClickAwayListener, Divider, Grow, MenuList, Paper, Popper, Stack, useTheme, } from '@mui/material';
import useScrollLock from '../../../hooks/useScrollLock';
import { MAX_HEIGHT, MAX_WIDTH, positionMap, transformOriginMap, } from './constants';
export const Menu = ({ id, anchorEl, open, onClose, children, sx, position = 'center', fixedDimensions = true, 'aria-labelledby': labelledby, footer, header, disableScrollLock = true, scrollLockElementId = 'dashboard-layout-content', onTransitionEnd, disablePortal = false, }) => {
    const theme = useTheme();
    useScrollLock(disableScrollLock, scrollLockElementId, open);
    const positionValues = positionMap[position];
    const anchorOrigin = [
        positionValues.anchorOrigin.vertical,
        positionValues.anchorOrigin.horizontal,
    ]
        .filter(Boolean)
        .join('-');
    const fixedDimensionsSlotSx = {
        maxHeight: MAX_HEIGHT,
        maxWidth: MAX_WIDTH,
    };
    const handleListKeyDown = (event, reason) => {
        if (event.key === 'Tab') {
            if (!footer) {
                event.preventDefault();
                onClose?.(event, reason);
            }
        }
        else if (event.key === 'Escape') {
            onClose?.(event, reason);
        }
    };
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            if (anchorEl && 'focus' in anchorEl) {
                anchorEl.focus();
            }
        }
        prevOpen.current = open;
    }, [open, anchorEl]);
    return (_jsx(Popper, { open: open, anchorEl: anchorEl, role: "menu", placement: position === 'top-right' ? 'right-start' : anchorOrigin, transition: true, onTransitionEnd: onTransitionEnd, id: id, disablePortal: disablePortal, sx: {
            zIndex: 1500,
            ...sx,
        }, children: ({ TransitionProps, placement }) => (_jsx(Grow, { ...TransitionProps, style: {
                transformOrigin: transformOriginMap[placement],
            }, children: _jsx(Paper, { sx: {
                    boxShadow: theme.shadows[2],
                    borderRadius: theme.spacing(2),
                    overflow: 'hidden',
                    my: 1,
                    ...(fixedDimensions && fixedDimensionsSlotSx),
                }, children: _jsx(ClickAwayListener, { onClickAway: event => {
                        onClose?.(event, 'backdropClick');
                    }, children: _jsxs(MenuList, { autoFocusItem: open, onKeyDown: event => handleListKeyDown(event, 'escapeKeyDown'), "aria-labelledby": labelledby, sx: {
                            ...(fixedDimensions && fixedDimensionsSlotSx),
                            overflow: 'auto',
                            p: 0,
                        }, children: [header && (_jsxs(Stack, { sx: {
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    backgroundColor: theme.palette.new.background.elements.overlay,
                                }, children: [header, _jsx(Divider, { sx: {
                                            borderBottomWidth: 0.5,
                                            color: theme.palette.new.border.neutral.divider,
                                        } })] })), children, footer && (_jsxs(Stack, { sx: {
                                    position: 'sticky',
                                    bottom: 0,
                                    zIndex: 1,
                                    backgroundColor: theme.palette.new.background.layout.tertiary,
                                }, children: [_jsx(Divider, { sx: {
                                            borderBottomWidth: 0.5,
                                            color: theme.palette.new.border.neutral.divider,
                                        } }), _jsx(Stack, { sx: {
                                            gap: 1,
                                            p: 2,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }, children: footer })] }))] }) }) }) })) }));
};
export default Menu;
