import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../../design-system/Buttons/Button';
import Table from '../../design-system/Table';
import TableBody from '../../design-system/Table/components/TableBody';
import TableCell from '../../design-system/Table/components/TableCell';
import TableContainer from '../../design-system/Table/components/TableContainer';
import TableHead from '../../design-system/Table/components/TableHead';
import TableRow from '../../design-system/Table/components/TableRow';
import { useHuGoTheme } from '../../../hooks/useHuGoTheme';
import { IconArchive, IconClipboard, IconCopy, IconDotsVertical, IconFolder, IconFolderSymlink, IconPencil, IconTrash, } from '@tabler/icons-react';
import { MenuLayerProvider, useMenuLayer } from '.';
const users = [
    { id: 1, name: 'Ana García' },
    { id: 2, name: 'Carlos Rodríguez' },
    { id: 3, name: 'María López' },
    { id: 4, name: 'Juan Martínez' },
    { id: 5, name: 'Laura Fernández' },
    { id: 6, name: 'Pedro Sánchez' },
    { id: 7, name: 'Isabel Torres' },
    { id: 8, name: 'Miguel Díaz' },
];
function TableWithNestedMenus() {
    const { openMenu } = useMenuLayer();
    const handleOpenOptions = (e, userId, userName) => {
        openMenu({
            anchorEl: e.currentTarget,
            items: [
                {
                    id: 'copy',
                    title: 'Copiar información',
                    description: 'Copia la información del usuario',
                    icon: IconCopy,
                    onSelect: () => alert(`Copiando información de ${userName}`),
                },
                {
                    id: 'edit',
                    title: 'Editar',
                    description: 'Edita la información del usuario',
                    icon: IconPencil,
                    onSelect: () => alert(`Editando a ${userName}`),
                },
                {
                    id: 'paste',
                    title: 'Pegar',
                    description: 'Pega la información del usuario',
                    icon: IconClipboard,
                    disabled: true,
                },
                {
                    id: 'more',
                    title: 'Más opciones',
                    description: 'Más opciones para el usuario',
                    icon: IconDotsVertical,
                    items: [
                        {
                            id: 'archive',
                            title: 'Archivar',
                            description: 'Archiva la información del usuario',
                            icon: IconArchive,
                            onSelect: () => alert(`Archivando a ${userName}`),
                            closeImmediate: true,
                        },
                        {
                            id: 'delete',
                            title: 'Eliminar',
                            description: 'Eliminar al usuario',
                            icon: IconTrash,
                            onSelect: () => alert(`Eliminando a ${userName} (ID: ${userId})`),
                        },
                        {
                            id: 'move',
                            title: 'Mover a...',
                            description: 'Mueve la información del usuario a otra carpeta',
                            icon: IconFolderSymlink,
                            items: [
                                {
                                    id: 'folder1',
                                    title: 'Carpeta 1',
                                    icon: IconFolder,
                                    onSelect: () => alert(`Moviendo a ${userName} a Carpeta 1`),
                                },
                                {
                                    id: 'folder2',
                                    title: 'Carpeta 2',
                                    icon: IconFolder,
                                    onSelect: () => alert(`Moviendo a ${userName} a Carpeta 2`),
                                },
                                {
                                    id: 'folder3',
                                    title: 'Carpeta 3',
                                    icon: IconFolder,
                                    onSelect: () => alert(`Moviendo a ${userName} a Carpeta 3`),
                                },
                            ],
                        },
                    ],
                },
            ],
            menuProps: {
                position: 'top-right',
            },
        });
    };
    return (_jsx(TableContainer, { sx: { maxWidth: 400 }, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { headerCell: true, children: "Nombre" }), _jsx(TableCell, { headerCell: true, align: "right", children: "Opciones" })] }) }), _jsx(TableBody, { children: users.map(user => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: user.name }), _jsx(TableCell, { align: "right", children: _jsx(Button, { onClick: e => handleOpenOptions(e, user.id, user.name), endIcon: _jsx(IconDotsVertical, {}) }) })] }, user.id))) })] }) }));
}
const meta = {
    title: 'Layers/Menus',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
};
export default meta;
export const TableWithNestedOptions = {
    render: () => {
        const { HuGoThemeProvider } = useHuGoTheme();
        return (_jsx(HuGoThemeProvider, { children: _jsx(MenuLayerProvider, { children: _jsx(TableWithNestedMenus, {}) }) }));
    },
};
