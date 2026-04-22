import { jsx as _jsx } from "react/jsx-runtime";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { IconBrandWhatsapp, IconChartCircles, IconCircles, IconHeartHandshake, IconMessageChatbot, IconUser, IconUsersGroup, } from '@tabler/icons-react';
import { SIDEBAR_COLLAPSED_WIDTH } from './constants';
import Sidebar from '.';
const meta = {
    component: Sidebar,
    title: 'Design System/Sidebar',
    tags: ['autodocs'],
    argTypes: {
        isCollapsed: { control: 'boolean' },
        pathname: { control: 'text' },
        sections: { control: false },
        customNavSection: { control: false },
        openMenu: { control: false },
        sx: { control: false },
    },
    args: {
        isCollapsed: false,
        sections: [
            {
                title: 'General',
                key: 'general',
                items: [
                    {
                        title: 'Users',
                        path: '/users',
                        icon: _jsx(IconUser, {}),
                        key: 'users',
                    },
                    {
                        title: 'Org Chart',
                        path: '/org-chart',
                        icon: _jsx(IconCircles, {}),
                        info: { isNew: true, notificationCount: 5 },
                        key: 'org-chart',
                    },
                    {
                        title: 'Roles & Permissions',
                        path: '/roles-permissions',
                        icon: _jsx(IconChartCircles, {}),
                        info: { notificationCount: 1 },
                        key: 'roles-permissions',
                    },
                    {
                        title: 'People experience',
                        path: '/people-experience',
                        icon: _jsx(IconHeartHandshake, {}),
                        info: { isNew: true },
                        key: 'people-experience',
                        subItems: [
                            {
                                title: 'All Surveys',
                                path: 'people-experience/surveys',
                                key: 'all-surveys',
                            },
                            {
                                title: 'Questions Bank',
                                path: 'people-experience/questions-bank',
                                key: 'questions-bank',
                            },
                        ],
                    },
                    {
                        title: 'Feed',
                        path: '/feed',
                        icon: _jsx(IconMessageChatbot, {}),
                        info: { isNew: true, notificationCount: 50 },
                        key: 'feed',
                    },
                    {
                        title: 'Groups',
                        path: '/groups',
                        icon: _jsx(IconUsersGroup, {}),
                        key: 'groups',
                        subItems: [
                            {
                                title: 'All Groups',
                                path: '/groups/all',
                                key: 'all-groups',
                            },
                            {
                                title: 'Create Group',
                                path: '/groups/create',
                                key: 'create-group',
                            },
                            {
                                title: 'Edit Group',
                                path: '/groups/edit',
                                key: 'edit-group',
                            },
                            {
                                title: 'Delete Group',
                                path: '/groups/delete',
                                info: { isNew: true },
                                key: 'delete-group',
                            },
                        ],
                    },
                    {
                        title: 'Chats & Calls',
                        path: '/chats-calls',
                        icon: _jsx(IconBrandWhatsapp, {}),
                        info: { notificationCount: 100 },
                        key: 'chats-calls',
                    },
                ],
            },
        ],
        pathname: '/people-experience/questions-bank',
    },
};
export default meta;
export const Default = {
    render: args => (_jsx(Box, { sx: {
            height: '100%',
            border: '1px solid #E9E9F4',
        }, children: _jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsx(Sidebar, { ...args }) }) }) }) })),
};
export const Collapsed = {
    render: args => (_jsx(Box, { sx: {
            height: '100%',
            width: SIDEBAR_COLLAPSED_WIDTH,
            border: '1px solid #E9E9F4',
        }, children: _jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "*", element: _jsx(Sidebar, { ...args, isCollapsed: true }) }) }) }) })),
};
