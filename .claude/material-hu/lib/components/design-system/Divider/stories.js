import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Divider } from '@mui/material';
const meta = {
    component: Divider,
    title: 'Design System/Divider',
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            table: {
                defaultValue: { summary: 'horizontal' },
            },
        },
    },
    args: {
        orientation: 'horizontal',
    },
    decorators: [
        (Story, context) => (_jsxs(Box, { sx: {
                p: 2,
                display: 'flex',
                flexDirection: context.args.orientation === 'vertical' ? 'row' : 'column',
                maxWidth: context.args.orientation === 'vertical' ? 'auto' : 50,
            }, children: [_jsx(Box, { p: 0.5, sx: { color: 'red' }, children: "Item 1" }), _jsx(Story, {}), _jsx(Box, { p: 0.5, sx: { color: 'red' }, children: "Item 2" })] })),
    ],
};
export default meta;
export const Default = {
    args: {},
};
export const Vertical = {
    args: {
        orientation: 'vertical',
    },
};
