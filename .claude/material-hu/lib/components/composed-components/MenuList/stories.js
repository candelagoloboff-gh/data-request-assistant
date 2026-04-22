import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@mui/material';
import { IconEdit, IconEye } from '@tabler/icons-react';
import MenuList from '.';
export const defaultOptions = [
    {
        title: 'With options',
        options: [
            {
                title: 'Option 1',
                onClick: () => alert('Option 1'),
            },
            {
                title: 'Option 2',
                onClick: () => alert('Option 2'),
                options: [
                    {
                        title: 'Option 2.1',
                        onClick: () => alert('Option 2.1'),
                    },
                ],
            },
            {
                title: 'Option 3',
                onClick: () => alert('Option 3'),
            },
        ],
    },
    {
        Icon: IconEdit,
        title: 'With Icon',
    },
    { Icon: IconEye, title: 'Ver detalle', description: 'Descripción' },
    { title: 'Sin icono ni descripción' },
    { title: 'Sin icono', description: 'Descripción' },
    {
        title: 'Sin icono ni descripción pero muchiiiiiiiiiiiiiiismo más largo',
    },
    {
        title: 'Sin icono pero muchísimo más largo',
        description: 'Descripción pero muchísimo más larga',
    },
    {
        Icon: IconEye,
        title: 'Disabled',
        description: 'Disabled',
        disabled: true,
    },
].map(o => ({ ...o, onClick: () => alert(o.title) }));
const meta = {
    component: MenuList,
    parameters: { layout: 'centered' },
    title: 'Composed Components/MenuList',
    tags: ['autodocs'],
    args: {
        options: defaultOptions,
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            table: {
                type: {
                    summary: 'primary | secondary | tertiary',
                },
                defaultValue: { summary: 'tertiary' },
            },
        },
        size: {
            control: 'radio',
            options: ['small', 'large'],
            table: {
                type: {
                    summary: 'small | large',
                },
                defaultValue: { summary: 'large' },
            },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithCustomButton = {
    args: {
        customButton: _jsx(Button, { variant: "secondary", children: "Soy un boton custom!" }),
    },
};
export const LittleOption = {
    args: {
        options: [
            {
                title: 'Edit',
                onClick: () => alert('Opción edicion'),
            },
            {
                title: 'Delete',
                onClick: () => alert('Opción borrado'),
            },
            {
                title: 'View',
                onClick: () => alert('Opción ver'),
            },
        ],
        minWidth: '100px',
    },
};
export const WithDisabledCustomButton = {
    args: {
        customButton: (_jsx(Button, { variant: "secondary", children: "Soy un boton custom deshabilitado :(" })),
        disableMenu: true,
    },
};
export const WithSubmenu = {
    args: {
        options: [
            {
                title: 'Edit',
                onClick: () => alert('Edit'),
                Icon: IconEdit,
            },
            {
                title: 'Move to...',
                onClick: () => undefined,
                options: [
                    {
                        title: 'Folder A',
                        onClick: () => alert('Moved to Folder A'),
                    },
                    {
                        title: 'Folder B',
                        onClick: () => alert('Moved to Folder B'),
                    },
                    {
                        title: 'Folder C',
                        onClick: () => alert('Moved to Folder C'),
                    },
                ],
            },
            {
                title: 'View',
                onClick: () => alert('View'),
                Icon: IconEye,
            },
        ],
    },
};
export const WithMultipleSubmenus = {
    args: {
        options: [
            {
                title: 'Move to...',
                onClick: () => undefined,
                options: [
                    {
                        title: 'Folder A',
                        onClick: () => alert('Moved to Folder A'),
                    },
                    {
                        title: 'Folder B',
                        onClick: () => alert('Moved to Folder B'),
                    },
                ],
            },
            {
                title: 'Assign to...',
                onClick: () => undefined,
                options: [
                    {
                        title: 'User 1',
                        onClick: () => alert('Assigned to User 1'),
                    },
                    {
                        title: 'User 2',
                        onClick: () => alert('Assigned to User 2'),
                    },
                ],
            },
            {
                title: 'Delete',
                onClick: () => alert('Delete'),
            },
        ],
    },
};
export const WithNestedSubmenus = {
    args: {
        options: [
            {
                title: 'Actions',
                onClick: () => undefined,
                options: [
                    {
                        title: 'Export as...',
                        onClick: () => undefined,
                        options: [
                            {
                                title: 'PDF',
                                onClick: () => alert('Export as PDF'),
                            },
                            {
                                title: 'CSV',
                                onClick: () => alert('Export as CSV'),
                            },
                        ],
                    },
                    {
                        title: 'Share',
                        onClick: () => alert('Share'),
                    },
                ],
            },
            {
                title: 'Settings',
                onClick: () => alert('Settings'),
            },
        ],
    },
};
export const WithOnClose = {
    args: {
        options: [
            {
                title: 'Option 1',
                onClick: () => alert('Option 1'),
            },
            {
                title: 'Option 2',
                onClick: () => alert('Option 2'),
            },
        ],
        onClose: () => alert('onClose callback fired'),
    },
};
export const WithDisabled = {
    args: {
        disableMenu: true,
    },
};
export const WithOutFixedDimensions = {
    args: {
        fixedDimensions: false,
    },
};
