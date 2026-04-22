import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { closestCenter, DndContext, DragOverlay, defaultDropAnimationSideEffects, KeyboardSensor, PointerSensor, useSensor, useSensors, } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor, restrictToHorizontalAxis, restrictToVerticalAxis, } from '@dnd-kit/modifiers';
import { arrayMove, horizontalListSortingStrategy, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { Portal, Stack } from '@mui/material';
import SortableItem from './components/SortableItem';
const customDropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: '0.4',
            },
        },
    }),
};
export const SortableList = ({ onSort, items, ItemComponent, direction = 'vertical', sx = {}, dragByHandler = false, hasDragOverlay = false, restrictToAncestor = false, disabled = false, slotProps, }) => {
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8, // for buttons inside draggable items
        },
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over != null && active.id !== over.id) {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over.id);
            if (oldIndex === -1 || newIndex === -1)
                return;
            onSort(arrayMove(items, oldIndex, newIndex), oldIndex, newIndex);
        }
        setActiveId(null);
    };
    const modifiers = [
        direction === 'vertical'
            ? restrictToVerticalAxis
            : restrictToHorizontalAxis,
        ...(restrictToAncestor ? [restrictToFirstScrollableAncestor] : []),
    ];
    return (_jsxs(DndContext, { onDragStart: ({ active }) => setActiveId(active.id), onDragEnd: handleDragEnd, onDragCancel: () => setActiveId(null), sensors: sensors, collisionDetection: closestCenter, modifiers: modifiers, children: [_jsx(SortableContext, { items: items.map(i => i.id), disabled: disabled, strategy: direction === 'vertical'
                    ? verticalListSortingStrategy
                    : horizontalListSortingStrategy, children: _jsx(Stack, { component: "ul", sx: {
                        listStyle: 'none',
                        listStyleType: 'none',
                        appearance: 'none',
                        padding: 0,
                        margin: 0,
                        ...(direction === 'vertical'
                            ? { flexDirection: 'column', overflowY: 'auto' }
                            : { flexDirection: 'row', overflowX: 'auto' }),
                        ...sx,
                    }, children: items.map((item, index) => (_jsx(SortableItem, { dragByHandler: dragByHandler, ItemComponent: ItemComponent, item: item, index: index, slotProps: slotProps }, item.id))) }) }), hasDragOverlay && (_jsx(Portal, { children: _jsx(DragOverlay, { dropAnimation: hasDragOverlay ? customDropAnimationConfig : undefined, children: activeId && (_jsx(SortableItem, { dragByHandler: dragByHandler, ItemComponent: ItemComponent, item: items.find(item => item.id === activeId), hasDragOverlay: hasDragOverlay, slotProps: slotProps, index: -1 })) }) }))] }));
};
export default SortableList;
