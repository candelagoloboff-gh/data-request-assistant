import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Divider, Tabs as MuiTabs, Stack, Tab, Typography, } from '@mui/material';
import { fadeInCenter } from '../../../utils/animations';
import Badge from '../Badge';
const Tabs = ({ tabs, sx, onTabChange, defaultValue, value, ...tabsProps }) => {
    const [currentTab, setCurrentTab] = useState(defaultValue || tabs?.[0]?.value);
    return (_jsxs(Stack, { sx: sx, children: [_jsx(MuiTabs, { sx: {
                    borderBottom: theme => `1px solid ${theme.palette.new.border.neutral.divider}`,
                    '.MuiTabs-indicator': {
                        backgroundColor: theme => theme.palette.new.action.button.background.primary.default,
                        borderRadius: '4px 4px 0px 0px',
                    },
                }, value: value || currentTab, onChange: (e, v) => {
                    onTabChange?.(v, tabs.findIndex(tab => tab.value === v));
                    setCurrentTab(v);
                }, ...tabsProps, children: tabs?.map(tab => (_jsx(Tab, { disableRipple: true, label: _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "globalXS", fontWeight: 'fontWeightSemiBold', sx: { color: 'inherit' }, children: tab.label }), (tab.slotProps?.badge || tab.hasBadge) && (_jsx(Badge, { color: "primary", variant: tab.slotProps?.badge?.badgeContent != null
                                    ? 'standard'
                                    : 'dot', ...tab.slotProps?.badge, sx: {
                                    ...(tab.slotProps?.badge?.badgeContent != null && {
                                        '.MuiBadge-badge': {
                                            position: 'relative',
                                            transform: 'none',
                                        },
                                    }),
                                    ...tab.slotProps?.badge?.sx,
                                } }))] }), value: tab.value, sx: {
                        px: 1,
                        minWidth: 0,
                        position: 'relative',
                        textTransform: 'none',
                        color: theme => theme.palette.new.text.neutral.default,
                        zIndex: 0,
                        transition: 'transform 0.125s ease-in-out',
                        '&.Mui-selected': {
                            color: theme => theme.palette.new.text.neutral.brand,
                        },
                        '&:hover': {
                            transform: 'scale(1.02)',
                        },
                        '&:active': {
                            transform: 'scale(0.98)',
                        },
                        '&.Mui-selected:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: '1rem',
                            right: '0',
                            top: '0.5rem',
                            left: '0',
                            height: 'calc(100% - 1rem)',
                            borderRadius: '0.25rem',
                            transformOrigin: 'center',
                            backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                            animation: `${fadeInCenter} 0.125s ease-in-out backwards`,
                            zIndex: -1,
                        },
                    } }, tab.value))) }), _jsx(Divider, { sx: { borderBottom: 0 } })] }));
};
Tabs.displayName = 'Tabs';
export default Tabs;
