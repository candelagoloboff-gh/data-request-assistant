export declare const SortableListComposition: {
    Root: {
        ({ children, onDragEnd, onDragOver, direction, dragByHandler, restrictToAncestor, dragActivationDistance, hasDragOverlay, sx, isDraggable, }: import("./types").RootProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Container: {
        ({ id, children, overlay, sx }: import("./types").ContainerProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Item: {
        ({ id, children, disabled }: import("./types").ItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DragHandle: {
        ({ children, sx }: import("./types").DragHandleProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
export * from './context';
export * from './hooks';
export * from './types';
export default SortableListComposition;
