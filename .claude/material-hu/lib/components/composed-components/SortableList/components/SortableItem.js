import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconButton } from '@mui/material';
import { IconGripVertical } from '@tabler/icons-react';
const SortableItem = ({ item, ItemComponent, dragByHandler = false, style: inheritedStyle, hasDragOverlay = false, index, slotProps, }) => {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, } = useSortable({ id: item.id });
    const hasDefaultDraggingStyles = isDragging && !hasDragOverlay;
    const style = {
        position: 'relative',
        opacity: isDragging && hasDragOverlay ? 0.4 : undefined,
        transform: CSS.Transform.toString(transform),
        scale: hasDefaultDraggingStyles ? 1.05 : 1,
        zIndex: hasDefaultDraggingStyles ? 1 : 0,
        transition,
        listStyle: 'none',
        cursor: dragByHandler ? 'unset' : 'grab',
        ...inheritedStyle,
    };
    const handleProps = { ...listeners, ...attributes };
    const dragHandleButton = useMemo(() => dragByHandler ? (_jsx(IconButton, { sx: { cursor: isDragging ? 'grabbing' : 'grab' }, ref: setActivatorNodeRef, ...listeners, ...attributes, ...slotProps?.dragButton, children: _jsx(IconGripVertical, { ...slotProps?.dragIcon }) })) : null, [
        dragByHandler,
        listeners,
        attributes,
        setActivatorNodeRef,
        slotProps?.dragButton,
        slotProps?.dragIcon,
        isDragging,
    ]);
    return (_jsx("li", { ref: setNodeRef, style: style, ...(dragByHandler ? {} : handleProps), children: _jsx(ItemComponent, { item: item, dragHandleButton: dragHandleButton, index: index, isDragging: isDragging }) }));
};
export default SortableItem;
