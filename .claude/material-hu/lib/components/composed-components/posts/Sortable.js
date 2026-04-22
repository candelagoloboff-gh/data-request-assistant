import { jsx as _jsx } from "react/jsx-runtime";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, } from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { arrayMove, horizontalListSortingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Stack } from '@mui/material';
const SortableItem = ({ item, ItemComponent, }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (_jsx("div", { ref: setNodeRef, style: style, ...attributes, ...listeners, children: _jsx(ItemComponent, { item: item }) }));
};
export const Sortable = ({ onSort, items, ItemComponent, }) => {
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8, // for buttons inside draggable items
        },
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = items.findIndex(f => f.id === active.id);
            const newIndex = items.findIndex(f => f.id === over?.id);
            onSort(arrayMove(items, oldIndex, newIndex));
        }
    };
    return (_jsx(DndContext, { onDragEnd: handleDragEnd, sensors: sensors, collisionDetection: closestCenter, modifiers: [restrictToHorizontalAxis], children: _jsx(SortableContext, { items: items, strategy: horizontalListSortingStrategy, children: _jsx(Stack, { sx: { flexDirection: 'row', gap: 2, overflowX: 'auto' }, children: items.map(item => (_jsx(SortableItem, { ItemComponent: ItemComponent, item: item }, item.id))) }) }) }));
};
export default Sortable;
