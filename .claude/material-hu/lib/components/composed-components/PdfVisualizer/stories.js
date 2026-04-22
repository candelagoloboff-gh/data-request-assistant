import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import dummyPdf from '../../../../static/prueba-texto-largo.pdf';
import PdfVisualizer from '.';
const meta = {
    component: PdfVisualizer,
    title: 'Composed Components/PdfVisualizer',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(Box, { sx: { height: '800px', border: '1px solid #e0e0e0' }, children: _jsx(Story, {}) })),
    ],
    args: {
        file: dummyPdf,
    },
    argTypes: {
        file: {
            control: 'text',
            description: 'PDF file URL or File object',
        },
        defaultPage: {
            control: { type: 'number', min: 1 },
            description: 'Default page to display on load',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const StartAtPage3 = {
    args: {
        defaultPage: 3,
    },
};
export const WithoutSidebar = {
    args: {
        slotProps: { sidebar: { show: false } },
    },
};
export const SidebarExpandedByDefault = {
    args: {
        slotProps: { sidebar: { defaultExpanded: true } },
    },
};
