import { jsx as _jsx } from "react/jsx-runtime";
import { Link, Paper, Popper, Typography } from '@mui/material';
export const CollapsedItemsPopper = ({ id, open, anchorEl, collapsedLinks, }) => {
    return (_jsx(Popper, { id: id, open: open, anchorEl: anchorEl, children: _jsx(Paper, { sx: {
                mt: 1,
                maxWidth: 200,
                display: 'flex',
                flexDirection: 'column',
            }, elevation: 2, children: collapsedLinks.map((link, index) => (_jsx(Link, { href: link.href, sx: {
                    p: 1,
                    ':hover': {
                        backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                    },
                    textDecoration: 'none',
                    color: 'inherit',
                }, children: _jsx(Typography, { variant: "globalS", fontWeight: 600, children: link.title }) }, index))) }) }));
};
