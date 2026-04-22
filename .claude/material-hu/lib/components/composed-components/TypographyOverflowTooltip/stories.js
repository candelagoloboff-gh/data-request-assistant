import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack/Stack';
import TypographyOverflowTooltip from './index';
const meta = {
    title: 'Composed Components/TypographyOverflowTooltip',
    component: TypographyOverflowTooltip,
    parameters: {
        layout: 'padded',
    },
};
export default meta;
export const Default = {
    args: {
        tooltipProps: {
            title: 'Full value',
            description: 'This is a very long text that should overflow the available width and therefore show a tooltip with the full content.',
        },
        typographyProps: {
            variant: 'globalM',
            sx: { width: 200 },
        },
        children: 'This is a very long text that should overflow the available width and therefore show a tooltip with the full content.',
    },
};
export const ParentConstrained = {
    args: {
        tooltipProps: {
            title: 'Full value',
            description: 'This is a very long text that should overflow the available width and therefore show a tooltip with the full content.',
        },
        typographyProps: {
            variant: 'globalM',
        },
        children: 'This is a very long text that should overflow the available width and therefore show a tooltip with the full content.',
    },
    render: args => (_jsx(Stack, { sx: {
            width: 200,
            p: 2,
            backgroundColor: 'oklch(86.9% 0.005 56.366)',
            borderRadius: '16px',
        }, children: _jsx(TypographyOverflowTooltip, { ...args }) })),
};
