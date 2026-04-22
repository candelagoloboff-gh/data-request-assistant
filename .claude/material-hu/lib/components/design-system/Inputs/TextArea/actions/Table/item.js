import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import Menu from '../../../../Menu';
import MenuItem from '../../../../Menu/components/MenuItem';
const TableMenuItem = ({ label, options, onClick, onMouseEnter, onClose, onSubmenuOpen, onSubmenuClose, ...item }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const menuRef = useRef(null);
    const handleOpen = () => {
        onSubmenuOpen?.(handleClose);
        setOpen(true);
    };
    const handleClose = () => {
        onSubmenuClose?.(handleClose);
        setOpen(false);
    };
    const handleOptionClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClose(event);
        onClick?.(event);
    };
    const handleOptionMouseEnter = (event) => {
        const target = event.currentTarget;
        const liElement = target.closest('li');
        anchorRef.current = liElement ?? target;
        handleOpen();
        onMouseEnter?.(event);
    };
    return (_jsxs(_Fragment, { children: [_jsx(MenuItem, { ...item, onClick: handleOptionClick, onMouseEnter: handleOptionMouseEnter, children: label }), options && (_jsx("div", { ref: menuRef, children: _jsx(Menu, { open: open, anchorEl: anchorRef.current, onClose: handleClose, position: "top-right", sx: { minWidth: '200px' }, children: options.map(option => (_jsx(TableMenuItem, { onClose: onClose, ...option }, option.label))) }) }))] }));
};
export default TableMenuItem;
