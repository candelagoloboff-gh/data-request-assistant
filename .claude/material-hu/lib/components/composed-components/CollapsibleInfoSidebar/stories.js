import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Stack, Typography } from '@mui/material';
import { IconFiles, IconPhoto, IconSettings, IconUsers, } from '@tabler/icons-react';
import CollapsibleInfoSidebar from '.';
const MainContent = () => (_jsxs(Stack, { sx: { flex: 1, p: 3, backgroundColor: '#f5f5f5' }, children: [_jsx(Typography, { variant: "h6", children: "Main Content Area" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })] }));
const RightSidebarDecorator = (Story) => (_jsxs(_Fragment, { children: [_jsx(MainContent, {}), _jsx(Story, {})] }));
const LeftSidebarDecorator = (Story) => (_jsxs(_Fragment, { children: [_jsx(Story, {}), _jsx(MainContent, {})] }));
const meta = {
    component: CollapsibleInfoSidebar,
    title: 'Composed Components/CollapsibleInfoSidebar',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(Stack, { sx: {
                height: '500px',
                width: '100%',
                flexDirection: 'row',
                border: '1px solid #e0e0e0',
                position: 'relative',
            }, children: _jsx(Story, {}) })),
    ],
    argTypes: {
        position: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Position of the sidebar',
        },
        contentWidth: {
            control: { type: 'number', min: 200, max: 500 },
            description: 'Width of the expanded content area',
        },
        alwaysExpanded: {
            control: 'boolean',
            description: 'If true, sidebar cannot be collapsed',
        },
    },
};
export default meta;
const DocumentsContent = () => (_jsxs(Stack, { sx: { gap: 2, p: 2 }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: "Documentos" }), _jsx(Stack, { sx: { gap: 1 }, children: [1, 2, 3, 4].map(i => (_jsx(Box, { sx: {
                    width: '100%',
                    height: 120,
                    backgroundColor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, children: _jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["Page ", i] }) }, i))) })] }));
const PhotosContent = () => (_jsxs(Stack, { sx: { gap: 2, p: 2 }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: "Fotos" }), _jsx(Stack, { sx: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
            }, children: Array.from({ length: 8 }).map((_, i) => (_jsx(Box, { sx: {
                    aspectRatio: '1',
                    backgroundColor: '#e3f2fd',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, children: _jsx(IconPhoto, { size: 24, color: "#1976d2" }) }, i))) })] }));
const SettingsContent = () => (_jsxs(Stack, { sx: { gap: 2, p: 2 }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: "Configuraci\u00F3n" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Aqu\u00ED puedes configurar las opciones del documento." })] }));
const UsersContent = () => (_jsxs(Stack, { sx: { gap: 2, p: 2 }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: "Usuarios" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Lista de usuarios con acceso al documento." })] }));
const sampleItems = [
    {
        Icon: IconFiles,
        content: _jsx(DocumentsContent, {}),
        collapseButtonText: 'Colapsar documentos',
    },
    {
        Icon: IconPhoto,
        content: _jsx(PhotosContent, {}),
        collapseButtonText: 'Colapsar fotos',
    },
    {
        Icon: IconSettings,
        content: _jsx(SettingsContent, {}),
    },
    {
        Icon: IconUsers,
        content: _jsx(UsersContent, {}),
    },
];
export const Default = {
    args: {
        items: sampleItems,
        position: 'right',
    },
    decorators: [RightSidebarDecorator],
};
export const PositionLeft = {
    args: {
        items: sampleItems,
        position: 'left',
    },
    decorators: [LeftSidebarDecorator],
};
export const DefaultExpanded = {
    args: {
        items: sampleItems,
        position: 'right',
        defaultExpandedIndex: 0,
    },
    decorators: [RightSidebarDecorator],
};
export const AlwaysExpanded = {
    args: {
        items: sampleItems,
        position: 'right',
        defaultExpandedIndex: 0,
        alwaysExpanded: true,
    },
    decorators: [RightSidebarDecorator],
};
export const CustomWidth = {
    args: {
        items: sampleItems,
        position: 'right',
        contentWidth: 450,
    },
    decorators: [RightSidebarDecorator],
};
export const SingleItem = {
    args: {
        items: [sampleItems[0]],
        position: 'right',
    },
    decorators: [RightSidebarDecorator],
};
