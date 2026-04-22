import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import FormInputClassic from '../../design-system/Inputs/Classic/form';
import SortableList from '.';
// Simple card component with title and two buttons
const SimpleCard = ({ item, dragHandleButton, }) => {
    return (_jsx(Card, { sx: { p: 2, border: '1px solid #e0e0e0' }, elevation: 0, variant: "outlined", children: _jsxs(Stack, { direction: "row", spacing: 2, children: [dragHandleButton, _jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { mb: 2, flex: 1 }, children: _jsx(Typography, { variant: "h6", component: "div", children: item.title }) }), _jsxs(Stack, { direction: "row", spacing: 1, children: [_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(IconEdit, { size: 16 }), onClick: () => alert(`Editar: ${item.title}`), children: "Editar" }), _jsx(Button, { variant: "outlined", color: "error", size: "small", startIcon: _jsx(IconTrash, { size: 16 }), onClick: () => alert(`Eliminar: ${item.title}`), children: "Eliminar" })] })] }) }));
};
// Card component with form
const FormCard = ({ item, dragHandleButton, }) => {
    const form = useForm({
        defaultValues: {
            title: item.title,
            description: item.description,
            email: item.email,
        },
    });
    const handleSave = () => {
        const values = form.getValues();
        alert(`Guardando: ${JSON.stringify(values, null, 2)}`);
    };
    return (_jsx(Card, { sx: { p: 2, border: '1px solid #e0e0e0', minWidth: 300 }, elevation: 0, variant: "outlined", children: _jsx(FormProvider, { ...form, children: _jsxs(Stack, { spacing: 2, children: [_jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [_jsxs(Typography, { variant: "h6", component: "div", children: ["Formulario #", item.id] }), dragHandleButton] }), _jsx(FormInputClassic, { name: "title", inputProps: {
                            label: 'Título',
                            placeholder: 'Ingresa el título',
                            size: 'small',
                            hasCounter: false,
                        }, rules: { required: 'El título es requerido' } }), _jsx(FormInputClassic, { name: "description", inputProps: {
                            label: 'Descripción',
                            placeholder: 'Ingresa la descripción',
                            size: 'small',
                            hasCounter: false,
                        } }), _jsx(FormInputClassic, { name: "email", inputProps: {
                            label: 'Email',
                            placeholder: 'ejemplo@correo.com',
                            type: 'email',
                            size: 'small',
                            hasCounter: false,
                        }, rules: {
                            required: 'El email es requerido',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email inválido',
                            },
                        } }), _jsxs(Stack, { direction: "row", spacing: 1, justifyContent: "flex-end", children: [_jsx(Button, { variant: "outlined", size: "small", onClick: handleSave, children: "Guardar" }), _jsx(Button, { variant: "outlined", color: "error", size: "small", startIcon: _jsx(IconTrash, { size: 16 }), onClick: () => alert(`Eliminar formulario: ${item.id}`), children: "Eliminar" })] })] }) }) }));
};
const meta = {
    component: SortableList,
    title: 'Composed Components/SortableList',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A sortable list component that allows you to drag and drop items to reorder them. Supports vertical and horizontal direction, and can be configured to drag only by the handle.',
            },
        },
    },
    argTypes: {
        direction: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
            description: 'List direction',
        },
        dragByHandler: {
            control: 'boolean',
            description: 'If true, you can only drag using the handle',
        },
    },
};
export default meta;
// Base story with example data
const baseItems = [
    { id: '1', title: 'Tarea 1' },
    { id: '2', title: 'Tarea 2' },
    { id: '3', title: 'Tarea 3' },
    { id: '4', title: 'Tarea 4' },
    { id: '5', title: 'Tarea 5' },
];
// Base story with example data for forms
const formItems = [
    {
        id: '1',
        title: 'Usuario 1',
        description: 'Descripción del usuario 1',
        email: 'usuario1@ejemplo.com',
    },
    {
        id: '2',
        title: 'Usuario 2',
        description: 'Descripción del usuario 2',
        email: 'usuario2@ejemplo.com',
    },
    {
        id: '3',
        title: 'Usuario 3',
        description: 'Descripción del usuario 3',
        email: 'usuario3@ejemplo.com',
    },
];
// Story 1: Vertical list with full drag
export const VerticalList = {
    args: {
        items: baseItems,
        ItemComponent: SimpleCard,
        direction: 'vertical',
        dragByHandler: false,
        sx: { gap: 2 },
        onSort: (sortedItems) => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2, maxWidth: 400 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Vertical List - Full Drag" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "You can drag any part of the card to reorder" }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
// Story 2: Vertical list with drag only by handle
export const VerticalListWithHandle = {
    args: {
        items: baseItems,
        ItemComponent: SimpleCard,
        direction: 'vertical',
        dragByHandler: true,
        sx: { gap: 2 },
        onSort: sortedItems => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2, maxWidth: 400 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Vertical List - Drag by Handle" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "You can only drag using the handle icon in the top right corner" }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
// Story 3: Horizontal list with full drag
export const HorizontalList = {
    args: {
        items: baseItems,
        ItemComponent: SimpleCard,
        direction: 'horizontal',
        dragByHandler: false,
        sx: { gap: 2 },
        onSort: sortedItems => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Horizontal List - Full Drag" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "You can drag any part of the card to reorder horizontally" }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
// Story 4: Horizontal list with drag only by handle
export const HorizontalListWithHandle = {
    args: {
        items: baseItems,
        ItemComponent: SimpleCard,
        direction: 'horizontal',
        dragByHandler: true,
        sx: { gap: 2 },
        onSort: sortedItems => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Horizontal List - Drag by Handle" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "You can only drag using the handle icon in the top right corner" }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
// Story 5: Vertical list with forms
export const VerticalFormList = {
    args: {
        items: formItems,
        ItemComponent: FormCard,
        direction: 'vertical',
        dragByHandler: true,
        sx: { gap: 2 },
        onSort: sortedItems => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2, maxWidth: 500 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Form List - Drag by Handle" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Drag the forms using the handle to reorder them. The forms are fully functional." }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
// Story 6: Horizontal list with forms
export const HorizontalFormList = {
    args: {
        items: formItems,
        ItemComponent: FormCard,
        direction: 'horizontal',
        dragByHandler: true,
        sx: { gap: 2 },
        onSort: sortedItems => {
            return sortedItems;
        },
    },
    render: args => {
        const [items, setItems] = useState(args.items);
        return (_jsxs(Box, { sx: { p: 2 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Horizontal Form List - Drag by Handle" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Drag the forms horizontally using the handle. The forms include validation." }), _jsx(SortableList, { ...args, items: items, onSort: setItems })] }));
    },
};
