import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack/Stack';
import { IconInfoCircle } from '@tabler/icons-react';
import { TagColorVariant } from './types';
import Tag from '.';
const meta = {
    component: Tag,
    title: 'Composed Components/Tag',
    tags: ['autodocs'],
    args: {
        label: 'Marketing',
        variant: TagColorVariant.BRAND,
        maxWidth: 200,
    },
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: [
                TagColorVariant.BRAND,
                TagColorVariant.PURPLE,
                TagColorVariant.MULBERRY,
                TagColorVariant.PINK,
                TagColorVariant.SALMON,
                TagColorVariant.ERROR,
                TagColorVariant.TAN,
                TagColorVariant.FLAMINGO,
                TagColorVariant.SUNSHINE,
                TagColorVariant.LIME,
                TagColorVariant.GREEN,
                TagColorVariant.LIGHT_BLUE,
                TagColorVariant.INK,
            ],
            table: {
                defaultValue: { summary: 'BRAND' },
            },
        },
        label: {
            control: 'text',
        },
        maxWidth: {
            control: { type: 'number' },
        },
        Icon: {
            control: false,
            table: {
                type: { summary: 'TablerIcon' },
            },
        },
        onDelete: { control: false },
        onClick: { control: false },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithIcon = {
    args: {
        Icon: IconInfoCircle,
    },
};
export const Deletable = {
    args: {
        onDelete: () => {
            alert('Tag deleted');
        },
    },
};
export const Clickable = {
    args: {
        onClick: () => {
            alert('Tag clicked');
        },
    },
};
export const MaxWidth = {
    render: () => (_jsxs(Stack, { direction: "row", gap: 1, useFlexGap: true, flexWrap: "wrap", children: [_jsx(Tag, { label: "Very long tag label that will be truncated with ellipsis", maxWidth: 140 }), _jsx(Tag, { label: "Same long label but with a larger maxWidth to compare", maxWidth: 220, variant: TagColorVariant.LIGHT_BLUE })] })),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates how `maxWidth` constrains the tag label and ' +
                    'truncates overflow.',
            },
        },
    },
};
export const AllVariants = {
    render: () => (_jsx(Stack, { direction: "row", gap: 1, useFlexGap: true, flexWrap: "wrap", children: [
            TagColorVariant.BRAND,
            TagColorVariant.PURPLE,
            TagColorVariant.MULBERRY,
            TagColorVariant.PINK,
            TagColorVariant.SALMON,
            TagColorVariant.ERROR,
            TagColorVariant.TAN,
            TagColorVariant.FLAMINGO,
            TagColorVariant.SUNSHINE,
            TagColorVariant.LIME,
            TagColorVariant.GREEN,
            TagColorVariant.LIGHT_BLUE,
            TagColorVariant.INK,
        ].map(variant => (_jsx(Tag, { label: variant, variant: variant, onClick: () => {
                alert(`Tag ${variant} clicked`);
            } }, variant))) })),
    parameters: {
        docs: {
            description: {
                story: 'Displays all available color variants.',
            },
        },
    },
};
