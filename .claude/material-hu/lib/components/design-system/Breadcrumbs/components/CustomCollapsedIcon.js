import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, ClickAwayListener, Link, useTheme } from '@mui/material';
import { CollapsedItemsPopper } from './CollapsedItemsPopper';
export const CustomCollapsedIcon = ({ collapsedLinks, darkBackground, }) => {
    const [popperAnchorEl, setPopperAnchorEl] = useState(null);
    const theme = useTheme();
    const open = Boolean(popperAnchorEl);
    const id = open ? 'simple-popper' : undefined;
    const onClickEllipsis = (event) => {
        event.stopPropagation();
        setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
    };
    const onClickAway = () => {
        setPopperAnchorEl(null);
    };
    return (_jsx(Link, { sx: {
            textDecoration: 'underline',
            // make underline white
            color: darkBackground
                ? theme.palette.new.text.neutral.inverted
                : 'inherit',
            cursor: 'pointer',
        }, "aria-describedby": id, children: _jsx(ClickAwayListener, { onClickAway: onClickAway, children: _jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Box, { onClick: onClickEllipsis, children: "..." }), popperAnchorEl ? (_jsx(CollapsedItemsPopper, { id: id, open: open, anchorEl: popperAnchorEl, collapsedLinks: collapsedLinks })) : null] }) }) }));
};
