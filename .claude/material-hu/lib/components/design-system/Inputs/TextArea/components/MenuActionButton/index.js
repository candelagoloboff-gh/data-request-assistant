import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import Menu from '../../../../Menu';
import MenuItem from '../../../../Menu/components/MenuItem';
import { Button, useTheme } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
const MenuActionButton = ({ icon, options, onOptionSelect, selectedOption, optionRenderer, ariaLabel, ariaControls, }) => {
    const anchorRef = useRef(null);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const openMenu = () => setOpen(true);
    const handleClickOption = (option) => (event) => {
        option.onClick?.(event, option);
        if (option.value)
            onOptionSelect?.(option.value);
        setOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Menu, { open: open, anchorEl: anchorRef.current, onClose: () => setOpen(false), sx: { minWidth: '200px' }, children: options?.map(option => (_jsx(MenuItem, { onClick: handleClickOption(option), selected: selectedOption === option.value, children: optionRenderer?.(option) ?? option.label }, option.label))) }), _jsxs(Button, { focusRipple: true, onClick: openMenu, variant: "secondary", sx: {
                    color: theme.palette.new.text.neutral.default,
                    borderColor: theme.palette.new.border.neutral.default,
                    '& svg': {
                        stroke: theme.palette.new.text.neutral.default,
                    },
                }, ref: anchorRef, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true", endIcon: _jsx(IconChevronDown, {}), children: [icon, !icon && options.find(({ value }) => value === selectedOption)?.label] })] }));
};
export default MenuActionButton;
