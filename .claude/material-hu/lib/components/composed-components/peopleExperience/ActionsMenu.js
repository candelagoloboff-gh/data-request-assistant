import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useId, useState, } from 'react';
import { Menu as MuiMenu, MenuItem as MuiMenuItem, } from '@mui/material';
const MenuContext = createContext({
    closeOnSelect: false,
    closeMenu: () => { },
});
const useMenu = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a <PXMenu />');
    }
    return context;
};
export const ActionsMenuItem = ({ onClick, sx, ...props }) => {
    const { closeOnSelect, closeMenu } = useMenu();
    const handleClick = event => {
        if (closeOnSelect) {
            closeMenu();
        }
        onClick?.(event);
    };
    return (_jsx(MuiMenuItem, { ...props, onClick: handleClick, sx: { borderRadius: '12px', ...sx } }));
};
const ActionsMenu = ({ children, renderTrigger, closeOnSelect, onOpenChange, }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const id = useId();
    const isOpen = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => onOpenChange?.(isOpen), [isOpen]);
    return (_jsxs(MenuContext.Provider, { value: { closeMenu: handleClose, closeOnSelect }, children: [renderTrigger({
                ariaProps: {
                    id,
                    'aria-controls': isOpen ? 'actions-menu' : undefined,
                    'aria-haspopup': 'true',
                    'aria-expanded': isOpen ? 'true' : undefined,
                },
                handleOpen,
                open: isOpen,
            }), _jsx(MuiMenu, { id: "actions-menu", anchorEl: anchorEl, open: isOpen, onClose: handleClose, PaperProps: {
                    sx: { maxHeight: '360px' },
                }, MenuListProps: {
                    'aria-labelledby': id,
                    sx: { p: 0.5 },
                }, children: children })] }));
};
export default ActionsMenu;
