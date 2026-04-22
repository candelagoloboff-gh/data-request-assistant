import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { MenuItem } from './components/MenuItem';
import { Menu } from '.';
const defaultOptions = [
    'Option 1',
    'Option 2 - very long text to test overflow',
    'Option 3',
];
const manyOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
];
const meta = {
    title: 'Design System/Menu',
    tags: ['autodocs'],
    args: {
        header: null,
        footer: null,
        fixedDimensions: false,
    },
    argTypes: {
        fixedDimensions: {
            description: 'Fixed dimensions or taken from children',
            control: 'boolean',
        },
        header: {
            description: 'Menu header content',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        footer: {
            description: 'Menu footer content',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
};
export default meta;
const renderStory = (options) => function Component(args) {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleMenuItemClick = (optionIndex) => {
        setSelectedIndex(optionIndex);
        setOpen(false);
    };
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }, children: [_jsx(Menu, { ...args, open: open, anchorEl: anchorRef.current, onClose: handleClose, children: options.map((option, optionIndex) => (_jsx(MenuItem, { disabled: optionIndex === 0, selected: optionIndex === selectedIndex, onClick: () => handleMenuItemClick(optionIndex), children: _jsx(Typography, { variant: "inherit", noWrap: true, children: option }) }, option))) }), _jsx(Button, { focusRipple: true, onClick: handleOpen, variant: "secondary", ref: anchorRef, children: "Open menu" })] }));
};
const Footer = () => (_jsxs(_Fragment, { children: [_jsx(Button, { sx: { flexGrow: 1 }, children: "Delete" }), _jsx(Button, { sx: { flexGrow: 1 }, variant: "primary", children: "Apply" })] }));
const Header = () => (_jsx(_Fragment, { children: _jsx(Typography, { variant: "globalS", fontWeight: 'fontWeightSemiBold', sx: { mx: 'auto', p: 2 }, children: "Header" }) }));
// TODO: Fix types
export const Default = {
    render: renderStory(defaultOptions),
    args: {},
};
export const WithFooter = {
    render: renderStory(defaultOptions),
    args: {
        footer: _jsx(Footer, {}),
    },
};
export const WithHeaderAndFooter = {
    render: renderStory(defaultOptions),
    args: {
        header: _jsx(Header, {}),
        footer: _jsx(Footer, {}),
    },
};
export const ManyOptions = {
    render: renderStory(manyOptions),
    args: {},
};
export const ManyOptionsAndFooter = {
    render: renderStory(manyOptions),
    args: {
        footer: _jsx(Footer, {}),
    },
};
export const LeftAlign = {
    render: renderStory(manyOptions),
    args: {
        footer: _jsx(Footer, {}),
        position: 'left',
    },
};
export const RightAlign = {
    render: renderStory(manyOptions),
    args: {
        footer: _jsx(Footer, {}),
        position: 'right',
    },
};
