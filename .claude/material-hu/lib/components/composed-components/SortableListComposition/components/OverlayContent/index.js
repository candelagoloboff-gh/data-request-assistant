import { jsx as _jsx } from "react/jsx-runtime";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
/**
 * Wraps overlay content and applies the sortable transform so the overlay
 * moves correctly during drag (same pattern as SortableList's overlay SortableItem).
 * Must be rendered inside SortableContext.
 */
const OverlayContent = ({ id, children }) => {
    const { setNodeRef, transform, transition } = useSortable({
        id,
        disabled: false,
    });
    return (_jsx("div", { ref: setNodeRef, style: {
            cursor: 'grabbing',
            opacity: 0.95,
            transform: CSS.Transform.toString(transform),
            transition,
            listStyle: 'none',
        }, children: children }));
};
OverlayContent.displayName = 'SortableList.OverlayContent';
export default OverlayContent;
