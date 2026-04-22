import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Accordion from '../../design-system/Accordion';
import CardContainer from '../../design-system/CardContainer';
import { Stack, Typography } from '@mui/material';
import { IconFolder } from '@tabler/icons-react';
import { useSimpleSortableContainers } from './hooks';
import SortableList from '.';
const meta = {
    title: 'Composed Components/SortableListComposition',
    component: SortableList.Root,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
// Data
const compositionFolders = [
    {
        id: 'folder-1',
        title: 'Documentos Personales',
        files: [
            { id: 'file-1', title: 'Curriculum Vitae.pdf' },
            { id: 'file-2', title: 'Carta de Presentación.docx' },
            { id: 'file-3', title: 'Referencias.pdf' },
        ],
    },
    {
        id: 'folder-2',
        title: 'Proyectos de Trabajo',
        files: [
            { id: 'file-4', title: 'Propuesta Cliente A.pptx' },
            { id: 'file-5', title: 'Informe Q1 2024.xlsx' },
        ],
    },
];
// Component
const SimpleFileCard = ({ file }) => (_jsx(CardContainer, { elevation: 0, fullWidth: true, children: _jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [_jsx(SortableList.DragHandle, {}), _jsxs(Typography, { variant: "body2", sx: { flex: 1 }, children: ["\uD83D\uDCC4 ", file.title] })] }) }));
// Story: Accordions with drag & drop between folders
export const FoldersWithAccordions = {
    render: () => {
        const [folders, setFolders] = useState(compositionFolders);
        // Reusable hook to handle drag & drop between containers
        const handleDragOver = useSimpleSortableContainers({
            containers: folders,
            setContainers: setFolders,
            itemsKey: 'files',
        });
        const handleDragEnd = () => {
            // Reordering is already handled in onDragOver
        };
        return (_jsx(SortableList.Root, { onDragOver: handleDragOver, onDragEnd: handleDragEnd, dragByHandler: true, hasDragOverlay: true, sx: { gap: 2 }, isDraggable: id => !id.toString().startsWith('folder-'), children: _jsx(SortableList.Container, { id: "container-folders", children: folders.map(folder => (_jsx(SortableList.Item, { id: folder.id, children: _jsx(Accordion, { elevation: 0, title: folder.title, avatar: { Icon: IconFolder }, pill: {
                            label: `${folder.files.length} file${folder.files.length !== 1 ? 's' : ''}`,
                            type: 'neutral',
                        }, customDetail: _jsx(SortableList.Container, { id: `container-${folder.id}`, sx: { gap: 1, p: 2 }, children: folder.files.map(file => (_jsx(SortableList.Item, { id: file.id, children: _jsx(SimpleFileCard, { file: file }) }, file.id))) }), defaultExpanded: true }) }, folder.id))) }) }));
    },
};
