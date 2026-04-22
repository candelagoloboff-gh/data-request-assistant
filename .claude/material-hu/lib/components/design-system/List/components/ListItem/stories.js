import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Stack, Typography } from '@mui/material';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import ImgAvatar1 from '../../../../../../static/avatar1.png';
import { actionConfigs, avatarOptions, itemStates, sideContentOptions, textOptions, } from './storyData';
import ListItem from '.';
const meta = {
    component: ListItem,
    title: 'Design System/List/ListItem',
    tags: ['autodocs'],
    argTypes: {
        divider: { control: 'boolean' },
        disabled: { control: 'boolean' },
        selected: { control: 'boolean' },
        loading: { control: 'boolean' },
        text: { control: false },
        avatar: { control: false },
        action: { control: false },
        action2: { control: false },
        sidePill: { control: false },
        sideText: { control: false },
        sideAvatars: { control: false },
        onClick: { control: false },
        sx: { control: false },
        slotProps: { control: false },
    },
    parameters: {
        layout: 'padded',
        docs: {
            controls: { expanded: true },
            source: 'code',
        },
    },
    decorators: [
        Story => (_jsx(Stack, { sx: { maxWidth: 800, gap: 4, mx: 'auto', p: 2 }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        text: {
            title: 'John Doe',
            description: 'Software Engineer at Tech Corp',
            date: new Date().toLocaleDateString(),
        },
        action: {
            Icon: IconTrash,
            onClick: () => alert('Delete'),
            'aria-label': 'Delete item',
        },
        action2: {
            Icon: IconEdit,
            onClick: () => alert('Edit'),
            'aria-label': 'Edit item',
        },
        avatar: { src: ImgAvatar1 },
        sidePill: { label: 'Active' },
    },
    render: args => (_jsx(Card, { children: _jsx(ListItem, { ...args }) })),
};
export const Minimal = {
    args: {
        text: {
            title: 'Simple List Item',
        },
    },
    render: args => (_jsx(Card, { children: _jsx(ListItem, { ...args }) })),
};
export const textVariations = {
    render: () => (_jsx(_Fragment, { children: textOptions.map(item => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: item.id }), _jsx(Card, { children: _jsx(ListItem, { text: item }) })] }, item.id))) })),
};
export const avatarVariations = {
    args: {
        text: {
            title: 'John Doe',
            description: 'Software Engineer at Tech Corp',
        },
    },
    render: args => (_jsx(_Fragment, { children: avatarOptions.map(item => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: item.id }), _jsx(Card, { children: _jsx(ListItem, { avatar: item, ...args }) })] }, item.id))) })),
};
export const sideContentVariations = {
    args: {
        text: {
            title: 'John Doe',
            description: 'Software Engineer at Tech Corp',
        },
    },
    render: args => (_jsx(_Fragment, { children: sideContentOptions.map(item => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: item.id }), _jsx(Card, { children: _jsx(ListItem, { ...args, sidePill: item.sidePill, sideText: item.sideText, sideAvatars: item.sideAvatars }) })] }, item.id))) })),
};
export const actionVariations = {
    args: {
        text: {
            title: 'John Doe',
            description: 'Software Engineer at Tech Corp',
        },
    },
    render: args => (_jsx(_Fragment, { children: actionConfigs.map((config, index) => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: config.id }), _jsx(Card, { children: _jsx(ListItem, { ...args, ...config.actions }) })] }, index))) })),
};
export const listItemStates = {
    args: {
        ...Default.args,
        onClick: () => alert('Item clicked!'),
    },
    render: args => (_jsx(_Fragment, { children: itemStates.map(item => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: item.id }), _jsx(Card, { children: _jsx(ListItem, { ...args, ...item }) })] }, item.id))) })),
};
