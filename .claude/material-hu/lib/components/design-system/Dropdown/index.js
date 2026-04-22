import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useRef, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import Menu from '../Menu';
const Dropdown = ({ children, label, open, onOpen, onClose, onClick, buttonVariant = 'secondary', position = 'left', buttonSize = 'small', hasIcon = true, sx = {}, buttonProps = {}, }) => {
    const id = useId();
    const isControlled = open !== undefined;
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonRef = useRef(null);
    // Determine the open state and anchor element based on controlled mode
    const isOpen = isControlled ? open : Boolean(anchorEl);
    const menuId = isOpen ? id : undefined;
    const anchorElement = isControlled ? buttonRef.current : anchorEl;
    const handleClick = (event) => {
        if (isControlled) {
            // In controlled mode, notify parent if open state should change
            if (open === false && onOpen) {
                onOpen();
            }
        }
        else {
            // In uncontrolled mode, manage internal state
            setAnchorEl(event.currentTarget);
        }
        // Call onClick prop if provided
        if (onClick) {
            onClick(event);
        }
    };
    const handleClose = () => {
        if (isControlled) {
            // In controlled mode, notify parent if open state should change
            if (open === true && onClose) {
                onClose();
            }
        }
        else {
            // In uncontrolled mode, manage internal state
            setAnchorEl(null);
        }
        // Call onClose prop if provided
        if (onClose) {
            onClose();
        }
    };
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4px',
            ...sx,
        }, children: [_jsx(Button, { ref: buttonRef, size: buttonSize, "aria-describedby": menuId, variant: buttonVariant, onClick: handleClick, endIcon: hasIcon ? (_jsx(Stack, { sx: {
                        transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 125ms ease',
                    }, children: _jsx(IconChevronDown, { size: 16, color: "inherit" }) })) : null, ...buttonProps, children: label }), _jsx(Menu, { id: menuId, open: isOpen, anchorEl: anchorElement, onClose: handleClose, position: position, fixedDimensions: false, children: children })] }));
};
export default Dropdown;
