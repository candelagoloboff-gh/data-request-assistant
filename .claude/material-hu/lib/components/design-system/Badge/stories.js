import { jsx as _jsx } from "react/jsx-runtime";
import MailIcon from '@mui/icons-material/Mail';
import Badge from '.';
const meta = {
    component: Badge,
    title: 'Design System/Badge',
    tags: ['autodocs'],
    argTypes: {
        badgeContent: {
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        color: {
            control: 'select',
            options: ['primary', 'error', 'success', 'warning', 'disabled'],
            table: {
                type: { summary: 'union' },
            },
        },
        invisible: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        variant: {
            control: 'radio',
            options: ['dot', 'standard'],
            table: {
                type: { summary: 'union' },
                defaultValue: { summary: 'standard' },
            },
        },
        children: {
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        anchorOrigin: {
            control: 'object',
            table: {
                type: {
                    summary: "{ horizontal: 'left' | 'right', vertical: 'bottom' | 'top' }",
                },
                defaultValue: { summary: "{ vertical: 'top', horizontal: 'right', }" },
            },
        },
    },
    args: {
        invisible: false,
        badgeContent: 4,
        color: 'primary',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
        },
        children: _jsx(MailIcon, { sx: { color: 'red' } }),
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Dot = {
    args: {
        variant: 'dot',
    },
};
export const AnchorOrigin = {
    args: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
    },
};
