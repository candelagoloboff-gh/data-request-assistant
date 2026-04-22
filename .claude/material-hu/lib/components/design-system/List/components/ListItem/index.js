import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Avatar from '../../../Avatar';
import ListItemSkeleton from '../../../List/components/ListItemSkeleton';
import Title from '../../../Title';
import { Divider, ListItem as MuiListItem, ListItemButton as MuiListItemButton, Stack, } from '@mui/material';
import SideContent from './SideContent';
import getActions from './utils';
export const ListItem = ({ id, sx, loading = false, onClick, text, avatar, action, action2, divider, sideContent, actionMenuList, sidePill, sideText, sideAvatars, component, selected, disabled, slotProps, }, ref) => {
    const Container = onClick
        ? (props) => (_jsx(MuiListItemButton, { ...props, disabled: disabled, selected: selected, onClick: onClick }))
        : (props) => _jsx(MuiListItem, { ...props });
    const actions = getActions(action, action2);
    const showActions = actions || actionMenuList || sideContent;
    const showSideContent = sidePill || sideText || sideAvatars;
    return (_jsxs(Stack, { id: id, sx: { minHeight: '40px', flexDirection: 'column', ...sx }, ref: ref, children: [loading && _jsx(ListItemSkeleton, {}), !loading && (_jsxs(Container, { component: component, sx: {
                    p: 2,
                    gap: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    ...slotProps?.container?.sx,
                }, children: [_jsxs(Stack, { sx: {
                            gap: 1,
                            flexDirection: 'row',
                            flex: 1,
                            minWidth: 0,
                            alignItems: 'center',
                        }, children: [avatar && (_jsx(Avatar, { ...avatar, ...slotProps?.avatar })), text && (_jsx(Title, { ...text, ...slotProps?.title, variant: "S", sx: {
                                    flex: 1,
                                    minWidth: 0,
                                    ...slotProps?.title?.slotProps?.title?.sx,
                                } }))] }), (showSideContent || showActions) && (_jsxs(Stack, { sx: {
                            gap: 0.5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexShrink: 0,
                        }, children: [showSideContent && (_jsx(SideContent, { sidePill: sidePill, sideText: sideText, sideAvatars: sideAvatars })), showActions && (_jsxs(_Fragment, { children: [sideContent, actions, actionMenuList] }))] }))] })), divider && _jsx(Divider, { variant: "middle" })] }));
};
export default forwardRef(ListItem);
