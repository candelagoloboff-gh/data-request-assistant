import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../CardContainer';
import { Stack } from '@mui/material';
import Title from '.';
const meta = {
    component: Title,
    title: 'Design System/Title',
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'title' },
        copetin: { control: 'text' },
        description: { control: 'text', description: 'Used when something else.' },
        copetinTooltip: { control: 'text' },
        descriptionTooltip: { control: 'text' },
        variant: {
            control: 'radio',
            options: ['XL', 'L', 'M', 'S'],
            table: { defaultValue: { summary: 'XL' } },
        },
        fontWeight: {
            control: 'radio',
            options: ['fontWeightSemiBold', 'fontWeightRegular'],
        },
        overflow: {
            control: 'radio',
            options: ['hidden', 'tooltip'],
        },
        disabled: { control: 'boolean' },
        withEllipsis: { control: 'boolean' },
        centered: { control: 'boolean' },
        right: { control: 'boolean' },
        slotProps: { control: false },
        sx: { control: false },
    },
    args: {
        copetin: 'Copetin',
        description: 'Description',
        title: 'Title',
        variant: 'XL',
        descriptionTooltip: 'Description Tooltip',
        copetinTooltip: 'Copetin Tooltip',
    },
    decorators: [
        Story => (_jsx(Stack, { sx: { maxWidth: 400 }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {},
};
export const RegularWeight = {
    args: {
        fontWeight: 'fontWeightRegular',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const Centered = {
    args: {
        centered: true,
    },
};
export const Right = {
    args: {
        right: true,
    },
};
const LONG_TEXT_ARGS = {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    copetin: 'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    description: 'Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
};
export const LongTextWithWrap = {
    args: {
        ...LONG_TEXT_ARGS,
    },
};
export const LongTextWithEllipsis = {
    args: {
        ...LONG_TEXT_ARGS,
        withEllipsis: true,
        copetinTooltip: undefined,
        descriptionTooltip: undefined,
    },
};
export const LongTextWithEllipsisAndIcons = {
    args: {
        ...LONG_TEXT_ARGS,
        withEllipsis: true,
    },
};
export const LongTextWithEllipsisAndOverflowTooltip = {
    args: {
        ...LONG_TEXT_ARGS,
        withEllipsis: true,
        overflow: 'tooltip',
    },
};
export const LongTextWithEllipsisInFlexbox = {
    args: {
        ...LONG_TEXT_ARGS,
        withEllipsis: true,
    },
    decorators: [
        Story => (_jsxs(CardContainer, { fullWidth: true, sx: {
                '& .MuiCardContent-root': {
                    display: 'flex',
                    gap: 2,
                },
            }, children: [_jsx(Stack, { sx: { backgroundColor: 'grey', minWidth: 50 } }), _jsx(Stack, { sx: { flex: 1 }, children: _jsx(Story, {}) }), _jsx(Stack, { sx: { backgroundColor: 'grey', minWidth: 50 } })] })),
    ],
};
