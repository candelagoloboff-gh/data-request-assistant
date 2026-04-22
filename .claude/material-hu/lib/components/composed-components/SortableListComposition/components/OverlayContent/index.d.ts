import { type ReactNode } from 'react';
import { type UniqueIdentifier } from '@dnd-kit/core';
type OverlayContentProps = {
    id: UniqueIdentifier;
    children: ReactNode;
};
/**
 * Wraps overlay content and applies the sortable transform so the overlay
 * moves correctly during drag (same pattern as SortableList's overlay SortableItem).
 * Must be rendered inside SortableContext.
 */
declare const OverlayContent: {
    ({ id, children }: OverlayContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default OverlayContent;
