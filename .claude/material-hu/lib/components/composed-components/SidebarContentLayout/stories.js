import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MemoryRouter } from 'react-router-dom';
import Title from '../../design-system/Title';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SidebarContentLayout from './index';
const meta = {
    title: 'Composed Components/SidebarContentLayout',
    component: props => (_jsx(MemoryRouter, { children: _jsx(SidebarContentLayout, { ...props }) })),
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;
const sidebarOptions = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Team', to: '/team' },
];
export const Default = {
    args: {
        slotProps: {
            sidebar: {
                buttonLabel: 'Navigation',
                options: sidebarOptions,
            },
            root: {
                sx: {
                    height: '500px',
                    backgroundColor: '#fafbfc',
                },
            },
        },
        children: (_jsxs(Stack, { sx: { p: 3 }, children: [_jsx(Title, { title: "SidebarContentLayout Content" }), _jsx(Typography, { children: "This area can contain the page content. The sidebar is collapsible and displays navigation options." })] })),
    },
};
export const Loading = {
    args: {
        loading: true,
        slotProps: {
            sidebar: {
                buttonLabel: 'Navigation',
                options: sidebarOptions,
            },
            root: {
                sx: {
                    height: '500px',
                    backgroundColor: '#fafbfc',
                },
            },
        },
        children: (_jsxs(Stack, { sx: { p: 3 }, children: [_jsx(Title, { title: "SidebarContentLayout Content" }), _jsx(Typography, { children: "Content area while sidebar is loading." })] })),
    },
};
export const WithCustomSidebarLabel = {
    args: {
        slotProps: {
            sidebar: {
                buttonLabel: 'Custom Sidebar',
                options: sidebarOptions,
            },
            root: {
                sx: {
                    height: '400px',
                    backgroundColor: '#f4f5fa',
                },
            },
        },
        children: (_jsxs(Stack, { sx: { p: 3 }, children: [_jsx(Title, { title: "Another Content Example" }), _jsx(Typography, { children: "This layout is reusable. The sidebar accepts dynamic options and you can customize props." })] })),
    },
};
