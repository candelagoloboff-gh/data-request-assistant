import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { colors, List, ListItemButton, ListItemText, Stack, styled, Typography, } from '@mui/material';
import { TabPanel, TabPanelItem } from './TabPanel';
const DECO_BORDER_WIDTH = '4px';
const ListItem = styled(ListItemButton)(({ theme }) => ({
    borderLeft: `${DECO_BORDER_WIDTH} solid transparent`,
    paddingLeft: `calc(${theme.spacing(3)} - ${DECO_BORDER_WIDTH})`,
    paddingRight: theme.spacing(3),
    transition: 'all 250ms',
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        borderLeftColor: theme.palette.primary.main,
    },
}));
const SideTabNavigation = ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout = Fragment, slotProps, }) => {
    const handleListItemClick = (_event, index) => {
        onChangeIndex(index);
    };
    return (_jsxs(Stack, { sx: { flexDirection: 'row', height: '100%' }, children: [_jsxs(Stack, { ...slotProps?.tabs, sx: {
                    py: 4,
                    bgcolor: colors.grey[50],
                    height: '100%',
                    ...slotProps?.tabs?.sx,
                }, children: [_jsx(Typography, { variant: "h5", component: "h2", sx: {
                            px: 3,
                            py: 2,
                        }, children: title }), _jsx(List, { component: "nav", "aria-label": "Side tab navigation", sx: { display: 'flex', flexDirection: 'column', gap: 1 }, disablePadding: true, children: tabs.map(({ id, title: tabTitle }, index) => (_jsx(ListItem, { selected: selectedIndex === index, onClick: event => handleListItemClick(event, index), children: _jsx(ListItemText, { primary: tabTitle, primaryTypographyProps: { sx: { fontWeight: '500' } } }) }, id))) })] }), _jsx(Stack, { sx: { height: '100%', flex: 1, minWidth: 0, maxWidth: '100%' }, children: _jsx(Layout, { ...slotProps?.layout, children: _jsx(TabPanel, { value: selectedIndex, children: tabs.map(({ id, element }, index) => (_jsx(TabPanelItem, { index: index, sx: { flex: 1 }, children: element }, id))) }) }) })] }));
};
export default SideTabNavigation;
