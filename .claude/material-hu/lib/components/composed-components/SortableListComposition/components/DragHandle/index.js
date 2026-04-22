import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import { IconGripVertical } from '@tabler/icons-react';
import { useItemContext } from '../../context';
const DragHandle = ({ children, sx = {} }) => {
    const { listeners, attributes, setActivatorNodeRef, isDraggable } = useItemContext();
    if (!isDraggable) {
        return null;
    }
    // If no drag functionality (e.g., in overlay), just render the visual
    if (!listeners || !attributes || !setActivatorNodeRef) {
        return (_jsx(IconButton, { sx: { cursor: 'grab', ...sx }, children: children || _jsx(IconGripVertical, {}) }));
    }
    return (_jsx(IconButton, { sx: { cursor: 'grab', ...sx }, ref: setActivatorNodeRef, ...listeners, ...attributes, children: children || _jsx(IconGripVertical, {}) }));
};
DragHandle.displayName = 'SortableList.DragHandle';
export default DragHandle;
