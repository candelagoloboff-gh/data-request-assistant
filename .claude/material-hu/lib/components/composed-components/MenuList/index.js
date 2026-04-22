import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, createContext, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import Menu from '../../design-system/Menu';
import { IconButton } from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import MenuListOption from './components/MenuListOption';
const menuCloseCallbacks = new Set();
const SiblingMenuContext = createContext(null);
const MenuList = ({ id = '', 'aria-label': ariaLabel, Icon = IconDotsVertical, variant, size, options, customButton, disableMenu = false, fixedDimensions = true, position = 'center', minWidth = undefined, onClose = undefined, onClick = undefined, slotProps, }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = useRef(null);
    const parentContext = useContext(SiblingMenuContext);
    const childCloseCallbacks = useMemo(() => new Set(), []);
    const openSubmenusCount = useRef(0);
    const childContextValue = useMemo(() => ({ closeCallbacks: childCloseCallbacks, openSubmenusCount }), [childCloseCallbacks]);
    const isSubmenu = parentContext !== null;
    const closeMenu = () => {
        setOpenMenu(false);
        onClose?.();
    };
    const closeMenuRef = useRef(closeMenu);
    closeMenuRef.current = closeMenu;
    const openMenuRef = useRef(openMenu);
    openMenuRef.current = openMenu;
    // Let the parent know when this submenu is open so it can ignore click-away
    // events originating from the submenu's Portal-rendered Popper content.
    useEffect(() => {
        if (!parentContext || !openMenu)
            return;
        parentContext.openSubmenusCount.current++;
        return () => {
            parentContext.openSubmenusCount.current--;
        };
    }, [openMenu, parentContext]);
    // Stable reference for the close-others mechanism, immune to stale closures.
    // Top-level menus call the full closeMenu (with onClose callback).
    // Submenus only reset their own state to avoid cascading onClose to the parent.
    const stableCloseForSet = useMemo(() => () => {
        if (!openMenuRef.current)
            return;
        if (isSubmenu) {
            setOpenMenu(false);
        }
        else {
            closeMenuRef.current();
        }
    }, [isSubmenu]);
    useEffect(() => {
        const targetSet = isSubmenu
            ? parentContext.closeCallbacks
            : menuCloseCallbacks;
        targetSet.add(stableCloseForSet);
        return () => {
            targetSet.delete(stableCloseForSet);
        };
    }, [isSubmenu, parentContext, stableCloseForSet]);
    const handleMenuOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const targetSet = isSubmenu
            ? parentContext?.closeCallbacks
            : menuCloseCallbacks;
        targetSet.forEach(close => {
            if (close !== stableCloseForSet)
                close();
        });
        setOpenMenu(true);
    };
    const handleMenuClose = (_event, reason) => {
        if (reason === 'backdropClick' && openSubmenusCount.current > 0)
            return;
        closeMenu();
    };
    const handleMenuItemClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeMenu();
    };
    const buttonAria = {
        id: `${id}-menu-button`,
        'aria-label': ariaLabel,
        'aria-controls': `${id}-menu`,
        'aria-haspopup': true,
        'aria-expanded': openMenu ? 'true' : undefined,
    };
    return (_jsx(SiblingMenuContext.Provider, { value: childContextValue, children: _jsxs("div", { id: id, children: [!!customButton &&
                    cloneElement(customButton, {
                        ref: anchorRef,
                        onClick: (event) => {
                            customButton.props.onClick?.(event);
                            handleMenuOpen(event);
                        },
                        disabled: disableMenu,
                        ...buttonAria,
                    }), !customButton && (_jsx(IconButton, { ref: anchorRef, onClick: event => {
                        onClick?.(event);
                        handleMenuOpen(event);
                    }, sx: { color: 'inherit' }, variant: variant, size: size, disabled: disableMenu, ...buttonAria, ...slotProps?.button, children: _jsx(Icon, {}) })), _jsx(Menu, { id: `${id}-menu`, "aria-labelledby": `${id}-menu-button`, anchorEl: anchorRef.current, onClose: (event, reason) => handleMenuClose(event, reason), open: openMenu, sx: {
                        ul: { py: 0 },
                        '*': { whiteSpace: 'normal' },
                    }, fixedDimensions: fixedDimensions, position: position, ...slotProps?.menu, children: options.map(option => (_jsx(MenuListOption, { onClick: (e) => {
                            option.onClick?.(e);
                            handleMenuItemClick(e);
                        }, option: option, onClose: handleMenuClose, disabled: option.disabled, minWidth: minWidth, menuId: `${id}-menu`, slotProps: slotProps?.menuItem }, option.title))) })] }) }));
};
export default MenuList;
