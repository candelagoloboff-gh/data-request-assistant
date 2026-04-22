import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Badge from '../../../Badge';
import Tooltip from '../../../Tooltip';
import { Button, Collapse, Stack, useTheme } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import NavButtonContent from '../NavButtonContent';
import { BUTTON_HEIGHT } from './constants';
const NavItem = props => {
    const { active, children, depth, icon, info, open: openProp, path = '', title, isCollapsed, hasChildrenButCollapsed = false, openMenu = () => { }, isLastChild = false, skipLinkBehavior = false, onClick, fallbackPath, } = props;
    const [open, setOpen] = useState(openProp ?? false);
    const theme = useTheme();
    const commonStyles = {
        height: BUTTON_HEIGHT,
        color: theme.palette.new.text.neutral.lighter,
        '& svg': {
            stroke: `${theme.palette.new.text.neutral.lighter} !important`,
        },
        ...(active && {
            color: theme.palette.new.text.neutral.default,
            '& svg': {
                stroke: 'currentColor',
            },
        }),
    };
    const commonStylesNotCollapsed = {
        ...commonStyles,
        '&:hover': {
            backgroundColor: theme.palette.new.action.background.neutral.hover,
            ...(active && {
                '& svg': {
                    stroke: `${theme.palette.new.text.neutral.default} !important`,
                },
            }),
        },
        gap: 1,
        pb: theme.spacing(1.5),
        pt: theme.spacing(1.5),
        textTransform: 'none',
        width: '100%',
    };
    const activeBackgroundColorDepth = theme.palette.new.background.elements.brand;
    const backgroundColorDepth = theme.palette.new.background.layout.default;
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClick = () => {
        onClick?.();
        if (isCollapsed && hasChildrenButCollapsed) {
            openMenu();
            setOpen(true);
        }
    };
    useEffect(() => {
        if (!isCollapsed && hasChildrenButCollapsed) {
            setOpen(false);
        }
    }, [isCollapsed]);
    // Branch
    if (children) {
        return (_jsx(ListItem, { disableGutters: true, sx: {
                display: 'block',
                py: 0,
            }, children: _jsxs(Collapse, { sx: {
                    borderBottomLeftRadius: theme.shape.borderBottomLeftRadiusL,
                    borderBottomRightRadius: theme.shape.borderBottomRightRadiusL,
                }, in: open, collapsedSize: BUTTON_HEIGHT, children: [_jsx(Button, { onClick: handleToggle, sx: {
                            ...commonStylesNotCollapsed,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: theme.shape.borderTopLeftRadiusL,
                            borderTopRightRadius: theme.shape.borderTopRightRadiusL,
                            pl: theme.spacing(1),
                            pr: theme.spacing(1),
                            textAlign: 'left',
                            ...(open && {
                                backgroundColor: backgroundColorDepth,
                            }),
                            ...(active && {
                                backgroundColor: activeBackgroundColorDepth,
                            }),
                        }, variant: "tertiary", children: _jsx(NavButtonContent, { active: active, icon: icon, title: title, info: info, children: _jsx(_Fragment, { children: !open ? (_jsx(IconChevronRight, { fontSize: "small" })) : (_jsx(IconChevronDown, { fontSize: "small" })) }) }) }), children] }) }));
    }
    const isRouterComponent = path && !skipLinkBehavior;
    const isDepth = depth > 0;
    const buttonProps = isRouterComponent
        ? {
            component: RouterLink,
            to: hasChildrenButCollapsed ? fallbackPath : path,
            onClick: handleClick,
        }
        : {
            component: 'button',
            onClick: handleClick,
        };
    // Leaf
    return (_jsxs(ListItem, { disableGutters: true, sx: {
            display: 'flex',
            py: 0,
        }, children: [isCollapsed && (_jsx(Tooltip, { description: title, direction: "right", children: _jsx(Button, { ...buttonProps, sx: {
                        ...commonStyles,
                        minWidth: 40,
                        py: theme.spacing(1.5),
                        px: theme.spacing(1),
                        borderRadius: theme.shape.borderRadiusL,
                        ...(active && {
                            backgroundColor: activeBackgroundColorDepth,
                        }),
                    }, children: _jsx(Badge, { variant: "dot", color: "primary", invisible: !info?.notificationCount, children: _jsx(Stack, { sx: {
                                ...commonStyles,
                                width: 24,
                                height: 24,
                            }, children: icon }) }) }) })), !isCollapsed && (_jsx(Button, { ...buttonProps, sx: {
                    ...commonStylesNotCollapsed,
                    backgroundColor: isDepth ? backgroundColorDepth : undefined,
                    borderBottomLeftRadius: !isDepth || isLastChild ? theme.shape.borderBottomLeftRadiusL : 0,
                    borderBottomRightRadius: !isDepth || isLastChild
                        ? theme.shape.borderBottomRightRadiusL
                        : 0,
                    borderTopLeftRadius: isDepth ? 0 : theme.shape.borderTopLeftRadiusL,
                    borderTopRightRadius: isDepth
                        ? 0
                        : theme.shape.borderTopRightRadiusL,
                    pl: isDepth ? theme.spacing(5) : theme.spacing(1),
                    pr: isDepth ? theme.spacing(2) : theme.spacing(1),
                    ...(active && {
                        backgroundColor: activeBackgroundColorDepth,
                    }),
                    textAlign: 'left',
                }, variant: "tertiary", children: _jsx(NavButtonContent, { active: active, icon: icon, title: title, info: info }) }))] }));
};
export default NavItem;
