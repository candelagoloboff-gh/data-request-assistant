import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ItemContext, useSortableListContext } from '../../context';
const Item = ({ id, children, disabled = false }) => {
    const context = useSortableListContext();
    const { dragByHandler, isDraggable, hasDragOverlay, registerItem, unregisterItem, } = context;
    const itemRef = useRef(null);
    const itemIsDraggable = isDraggable ? isDraggable(id) : !disabled;
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, } = useSortable({
        id,
        disabled: !itemIsDraggable,
    });
    let cursorStyle = 'grab';
    if (!itemIsDraggable) {
        cursorStyle = 'default';
    }
    else if (dragByHandler) {
        cursorStyle = 'unset';
    }
    const style = {
        opacity: isDragging && hasDragOverlay ? 0.4 : 1,
        transform: CSS.Transform.toString(transform),
        transition,
        listStyle: 'none',
        cursor: cursorStyle,
        ...(isDragging && { zIndex: 10 }),
    };
    const handleProps = { ...listeners, ...attributes };
    // Context value for DragHandle
    const itemContextValue = useMemo(() => ({
        listeners: dragByHandler ? listeners : undefined,
        attributes: dragByHandler ? attributes : undefined,
        setActivatorNodeRef: dragByHandler ? setActivatorNodeRef : undefined,
        isDraggable: itemIsDraggable,
        isDragging,
    }), [
        listeners,
        attributes,
        setActivatorNodeRef,
        itemIsDraggable,
        dragByHandler,
        isDragging,
    ]);
    useEffect(() => {
        // Create a static context value for the overlay (no actual drag functionality needed)
        const overlayContextValue = {
            listeners: undefined,
            attributes: undefined,
            setActivatorNodeRef: undefined,
            isDraggable: itemIsDraggable,
            isDragging: false,
        };
        const overlayContent = (_jsx(ItemContext.Provider, { value: overlayContextValue, children: children }));
        registerItem(id, overlayContent, itemRef.current);
        return () => {
            unregisterItem(id);
        };
    }, [id, children, itemIsDraggable, registerItem, unregisterItem]);
    return (_jsx(ItemContext.Provider, { value: itemContextValue, children: _jsx("li", { ref: node => {
                setNodeRef(node);
                itemRef.current = node;
            }, style: style, ...(dragByHandler || !itemIsDraggable ? {} : handleProps), children: children }) }));
};
Item.displayName = 'SortableList.Item';
export default Item;
