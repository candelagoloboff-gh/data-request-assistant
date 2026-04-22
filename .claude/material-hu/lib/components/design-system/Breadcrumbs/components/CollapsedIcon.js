import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ClickAwayListener, Link, Stack, useTheme } from '@mui/material';
import { CollapsedItemsMenu } from './CollapsedItemsMenu';
export const CollapsedIcon = ({ collapsedLinks, darkBackground, }) => {
    const theme = useTheme();
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const open = Boolean(menuAnchorEl);
    const handleClickEllipsis = (event) => {
        event.stopPropagation();
        setMenuAnchorEl(menuAnchorEl ? null : event.currentTarget);
    };
    const handleClickAway = () => setMenuAnchorEl(null);
    return (_jsx(Link, { component: "span", sx: {
            textDecoration: 'underline',
            color: darkBackground
                ? theme.palette.new.text.neutral.inverted
                : 'inherit',
            cursor: 'pointer',
        }, children: _jsx(ClickAwayListener, { onClickAway: handleClickAway, children: _jsxs(Stack, { component: "span", sx: { position: 'relative' }, children: [_jsx(Stack, { component: "span", role: "button", onClick: handleClickEllipsis, sx: {
                            padding: 0,
                            cursor: 'inherit',
                            font: 'inherit',
                            color: 'inherit',
                        }, children: "..." }), menuAnchorEl && (_jsx(CollapsedItemsMenu, { id: "breadcrumb-collapsed-menu", open: open, anchorEl: menuAnchorEl, collapsedLinks: collapsedLinks, onItemClick: handleClickAway }))] }) }) }));
};
