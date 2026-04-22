import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import Menu from '../../../../Menu';
import TableMenuItem from './item';
const TableMenu = ({ anchorRef, open, options, onClose }) => {
    const submenuCloseRef = useRef(null);
    const handleSubmenuOpen = useCallback((closeFn) => {
        // Close any previously open submenu
        if (submenuCloseRef.current !== closeFn) {
            submenuCloseRef.current?.();
        }
        // Store the new close function
        submenuCloseRef.current = closeFn;
    }, []);
    const handleSubmenuClose = useCallback((closeFn) => {
        if (submenuCloseRef.current === closeFn) {
            submenuCloseRef.current = null;
        }
    }, []);
    return (_jsx(Menu, { open: open, anchorEl: anchorRef.current, onClose: onClose, sx: { minWidth: '200px' }, children: options.map(option => (_jsx(TableMenuItem, { onClose: onClose, onSubmenuOpen: handleSubmenuOpen, onSubmenuClose: handleSubmenuClose, ...option }, option.label))) }));
};
export default TableMenu;
