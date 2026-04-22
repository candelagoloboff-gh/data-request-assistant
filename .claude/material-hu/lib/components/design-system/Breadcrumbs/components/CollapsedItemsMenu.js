import { jsx as _jsx } from "react/jsx-runtime";
import Title from '../../Title';
import { Link, Paper, Popper, Stack, useTheme } from '@mui/material';
export const CollapsedItemsMenu = ({ id, open, anchorEl, collapsedLinks, onItemClick, }) => {
    const { palette, zIndex } = useTheme();
    const handleItemClick = (link) => event => {
        event.stopPropagation();
        link.onClick?.(event);
        onItemClick();
    };
    return (_jsx(Popper, { open: open, anchorEl: anchorEl, sx: { zIndex: zIndex.tooltip }, children: _jsx(Stack, { component: Paper, elevation: 2, id: id, role: "menu", sx: { mt: 1, maxWidth: 200, overflow: 'hidden' }, children: collapsedLinks.map(link => (_jsx(Link, { role: "menuitem", href: link.href, onClick: handleItemClick(link), ...(link.component && { component: link.component }), sx: {
                    cursor: 'pointer',
                    p: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    ':hover': {
                        backgroundColor: palette.new.action.background.neutral.hover,
                    },
                }, children: _jsx(Title, { variant: "S", title: link.title, withEllipsis: true, overflow: "tooltip" }) }, `${link.title}-${link.href}`))) }) }));
};
