import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack, useTheme } from '@mui/material';
import { IconBulb } from '@tabler/icons-react';
import List from '../List';
import ListItem from '../List/components/ListItem';
import Dropdown from '.';
const meta = {
    component: Dropdown,
    title: 'Design System/Dropdown',
    tags: ['autodocs'],
    argTypes: {
        label: {
            description: 'Label for the dropdown Button',
            control: 'text',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        open: {
            description: 'Whether the menu is open (controlled mode)',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'undefined' },
            },
        },
        onOpen: {
            description: 'Callback fired on open',
            control: false,
            table: {
                type: { summary: '() => void' },
            },
        },
        onClose: {
            description: 'Callback fired on close',
            control: false,
            table: {
                type: { summary: '() => void' },
            },
        },
        buttonVariant: {
            description: 'Variant of the Button',
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            table: {
                type: { summary: "'primary' | 'secondary' | 'tertiary'" },
                defaultValue: { summary: 'secondary' },
            },
        },
        buttonSize: {
            description: 'Size of the Button',
            control: 'radio',
            options: ['small', 'large'],
            table: {
                type: { summary: "ButtonProps['size']" },
                defaultValue: { summary: 'small' },
            },
        },
        position: {
            description: 'Position of the menu',
            control: 'radio',
            options: ['left', 'right', 'center'],
            table: {
                type: { summary: "'left' | 'right' | 'center'" },
                defaultValue: { summary: 'left' },
            },
        },
        hasIcon: {
            description: 'Whether to show the chevron icon',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        onClick: {
            description: 'Callback fired on click',
            control: false,
            table: {
                type: {
                    summary: '(event: React.MouseEvent<HTMLButtonElement>) => void',
                },
            },
        },
        sx: {
            description: 'Custom styles',
            control: 'object',
            table: {
                type: { summary: 'SxProps' },
                defaultValue: { summary: '{}' },
            },
        },
        buttonProps: {
            description: 'Props of the Button',
            control: 'object',
            table: {
                type: { summary: 'ButtonProps' },
                defaultValue: { summary: '{}' },
            },
        },
        children: {
            description: 'Content rendered inside the dropdown menu',
            control: false,
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
};
export default meta;
const TemplateContent = () => {
    const theme = useTheme();
    return (_jsx(Stack, { sx: {
            width: '400px',
            height: '200px',
            borderRadius: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.new.background.layout.tertiary,
            p: 2,
        }, children: _jsx(Stack, { sx: {
                borderRadius: '8px',
                border: '1px dashed #CAD5FE',
                backgroundColor: '#EFF2FF',
                width: 1,
                height: 1,
            } }) }));
};
const BasicMenu = () => {
    const theme = useTheme();
    const items = [1, 2, 3, 4, 5];
    return (_jsx(Stack, { sx: { backgroundColor: theme.palette.new.background.layout.tertiary }, children: _jsx(List, { sx: { width: '300px' }, children: items.map(item => (_jsx(ListItem, { avatar: {
                    Icon: IconBulb,
                    color: 'primary',
                }, text: {
                    title: `Option ${item}`,
                    description: `Description of the option ${item}`,
                }, sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.palette.new.action.background.neutral.hover,
                    },
                } }, item))) }) }));
};
export const DefaultStory = {
    args: {
        label: 'Open',
        buttonVariant: 'secondary',
        position: 'left',
        children: _jsx(TemplateContent, {}),
    },
};
export const Left = {
    args: {
        label: 'Open',
        buttonVariant: 'secondary',
        position: 'left',
        children: _jsx(BasicMenu, {}),
    },
};
export const Right = {
    args: {
        label: 'Open',
        buttonVariant: 'secondary',
        position: 'right',
        children: _jsx(BasicMenu, {}),
    },
};
export const Center = {
    args: {
        label: 'Open',
        buttonVariant: 'secondary',
        position: 'center',
        children: _jsx(BasicMenu, {}),
    },
};
export const TertiaryButton = {
    args: {
        label: 'Open',
        buttonVariant: 'tertiary',
        position: 'left',
        children: _jsx(BasicMenu, {}),
    },
};
export const NoIcon = {
    args: {
        label: 'Open',
        buttonVariant: 'tertiary',
        hasIcon: false,
        position: 'left',
        children: _jsx(BasicMenu, {}),
    },
};
export const Controlled = {
    render: () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        return (_jsx(Dropdown, { label: "Controlled Dropdown", open: dropdownOpen, onOpen: () => setDropdownOpen(true), onClose: () => setDropdownOpen(false), children: _jsx(BasicMenu, {}) }));
    },
};
