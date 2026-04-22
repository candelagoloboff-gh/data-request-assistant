import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Typography } from '@mui/material';
import Tabs from '.';
const makeTabs = (count, badgeOnLast = false) => Array.from({ length: count }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: `ITEM_${i + 1}`,
    ...(badgeOnLast && i === count - 1 && { hasBadge: true }),
}));
const meta = {
    component: Tabs,
    title: 'Design System/Tabs',
    tags: ['autodocs'],
    args: {
        count: 3,
        badgeOnLast: true,
    },
    argTypes: {
        count: {
            control: { type: 'number', min: 1, max: 10 },
            table: { category: 'Story helpers' },
        },
        badgeOnLast: {
            control: 'boolean',
            table: { category: 'Story helpers' },
        },
        tabs: { table: { disable: true } },
        value: { control: 'text' },
        defaultValue: { control: 'text' },
        variant: {
            control: 'select',
            options: ['standard', 'scrollable', 'fullWidth'],
        },
        scrollButtons: {
            control: 'select',
            options: [true, false, 'auto'],
        },
        onTabChange: { control: false },
        sx: { control: false },
    },
    render: ({ count, badgeOnLast, ...args }) => (_jsx(Tabs, { ...args, tabs: makeTabs(count, badgeOnLast) })),
};
export default meta;
export const Default = {};
export const BadgeWithContent = {
    render: () => (_jsx(Tabs, { tabs: [
            {
                label: 'Mensajes',
                value: 'MESSAGES',
                slotProps: { badge: { badgeContent: 5 } },
            },
            {
                label: 'Notificaciones',
                value: 'NOTIFICATIONS',
                slotProps: { badge: { badgeContent: 99 } },
            },
            {
                label: 'Nuevo',
                value: 'NEW',
                slotProps: { badge: { badgeContent: 'New' } },
            },
            { label: 'Dot', value: 'DOT', hasBadge: true },
            { label: 'Sin badge', value: 'NONE' },
        ] })),
};
export const ControlledValueStory = {
    render: () => {
        const [currentTab, setCurrentTab] = useState('ITEM_1');
        const handleTabChange = (value) => {
            setCurrentTab(value);
        };
        return (_jsxs(_Fragment, { children: [_jsx(Typography, { component: "pre", children: `Seleccionado: ${currentTab}` }), _jsx(Tabs, { value: currentTab, tabs: [
                        { label: 'Item 1', value: 'ITEM_1' },
                        { label: 'Item 2', value: 'ITEM_2' },
                    ], onTabChange: handleTabChange })] }));
    },
};
