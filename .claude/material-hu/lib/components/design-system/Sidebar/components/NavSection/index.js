import { jsx as _jsx } from "react/jsx-runtime";
import { matchPath } from 'react-router-dom';
import { List } from '@mui/material';
import NavItem from '../NavItem';
const renderNavItems = ({ depth = 0, items, pathname, isCollapsed, openMenu, }) => (_jsx(List, { disablePadding: true, sx: {
        '& > *:not(:last-child)': {
            mb: depth > 0 ? 0 : 1.5,
        },
    }, children: items.map((item, index) => {
        const key = `${item.key}-${depth}`;
        const match = !!matchPath(depth === 0 ? `${item.path}/*` : item.path, pathname);
        const hasChildren = item.subItems && !isCollapsed;
        const hasChildrenButIsCollapsed = item.subItems && isCollapsed;
        return (_jsx(NavItem, { active: match, depth: depth, icon: item.icon, info: item.info, open: match, path: item.path, title: item.title, isCollapsed: isCollapsed, isLastChild: index === items.length - 1, openMenu: openMenu, skipLinkBehavior: item.skipLinkBehavior, onClick: item.onClick, fallbackPath: item.subItems?.[0]?.path, ...(item.subItems && {
                hasChildrenButCollapsed: hasChildrenButIsCollapsed,
                children: hasChildren &&
                    renderNavItems({
                        depth: depth + 1,
                        items: item.subItems,
                        pathname,
                        isCollapsed,
                        openMenu,
                    }),
            }) }, hasChildren
            ? `${key}-${isCollapsed ? 'collapsed' : 'expanded'}`
            : key));
    }) }));
const NavSection = props => {
    const { items, pathname, isCollapsed, openMenu } = props;
    return (_jsx(List, { sx: {
            '& + &': {
                mt: 3,
            },
        }, disablePadding: true, children: renderNavItems({
            items,
            pathname: pathname,
            isCollapsed,
            openMenu,
        }) }));
};
export default NavSection;
