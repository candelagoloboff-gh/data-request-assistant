import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import Link from '.';
const meta = {
    component: Link,
    title: 'Design System/Link',
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        href: 'https://www.google.com',
        children: 'Link',
        hasIcon: true,
        target: '_blank',
    },
};
export const NoIcon = {
    args: {
        href: '#',
        children: 'Link',
        hasIcon: false,
    },
};
export const Disabled = {
    args: {
        href: '#',
        children: 'Link',
        disabled: true,
    },
};
export const CustomTypograhy = {
    args: {
        href: '#',
        children: (_jsx(Typography, { variant: "globalM", sx: theme => ({ color: theme.palette.base?.blueBrand[400] }), children: "Global M Typography" })),
        iconSize: 24,
        hasIcon: true,
    },
};
