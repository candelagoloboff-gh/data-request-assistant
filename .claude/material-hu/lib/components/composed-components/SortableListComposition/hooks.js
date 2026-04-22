import { useCallback } from 'react';
/**
 * Generic hook to handle item reordering between containers
 *
 * Useful when you have custom data structures or need total control.
 *
 * @example
 * ```tsx
 * type CustomFolder = {
 *   folderId: string;
 *   documents: Document[];
 * };
 *
 * const [folders, setFolders] = useState<CustomFolder[]>(initialFolders);
 *
 * const handleDragOver = useSortableContainers({
 *   items: folders,
 *   setItems: setFolders,
 *   getContainerId: (folder) => `container-${folder.folderId}`,
 *   getItemsArray: (folder) => folder.documents,
 *   setItemsArray: (folder, newDocs) => ({ ...folder, documents: newDocs }),
 * });
 *
 * // Use in SortableListComposition
 * <SortableListComposition.Root onDragOver={handleDragOver}>
 *   ...
 * </SortableListComposition.Root>
 * ```
 */
export function useSortableContainers({ items, setItems, getContainerId, getItemsArray, setItemsArray, }) {
    const handleDragOver = useCallback((event) => {
        const { active, over, activeContainer, overContainer } = event;
        if (!over || active === over)
            return;
        // If they are in the same container, reorder in real time
        if (activeContainer === overContainer) {
            setItems(prevItems => {
                return prevItems.map(container => {
                    const containerId = getContainerId(container);
                    if (containerId === activeContainer) {
                        const containerItems = getItemsArray(container);
                        const oldIndex = containerItems.findIndex(item => item.id === active);
                        const newIndex = containerItems.findIndex(item => item.id === over);
                        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
                            const newItems = [...containerItems];
                            const [removed] = newItems.splice(oldIndex, 1);
                            newItems.splice(newIndex, 0, removed);
                            return setItemsArray(container, newItems);
                        }
                    }
                    return container;
                });
            });
        }
        else if (activeContainer && overContainer) {
            // If they are in different containers, move between containers in real time
            setItems(prevItems => {
                const sourceIndex = prevItems.findIndex(c => getContainerId(c) === activeContainer);
                const destIndex = prevItems.findIndex(c => getContainerId(c) === overContainer);
                if (sourceIndex === -1 || destIndex === -1)
                    return prevItems;
                const sourceContainer = prevItems[sourceIndex];
                const destContainer = prevItems[destIndex];
                const sourceItems = getItemsArray(sourceContainer);
                const destItems = getItemsArray(destContainer);
                // Check if the item is already in the destination
                const isAlreadyInDest = destItems.some(item => item.id === active);
                if (isAlreadyInDest)
                    return prevItems;
                const itemIndex = sourceItems.findIndex(item => item.id === active);
                if (itemIndex === -1)
                    return prevItems;
                const itemToMove = sourceItems[itemIndex];
                const newSourceItems = sourceItems.filter(item => item.id !== active);
                const destItemIndex = destItems.findIndex(item => item.id === over);
                const newDestItems = [...destItems];
                newDestItems.splice(destItemIndex >= 0 ? destItemIndex : newDestItems.length, 0, itemToMove);
                const newItems = [...prevItems];
                newItems[sourceIndex] = setItemsArray(sourceContainer, newSourceItems);
                newItems[destIndex] = setItemsArray(destContainer, newDestItems);
                return newItems;
            });
        }
    }, [items, setItems, getContainerId, getItemsArray, setItemsArray]);
    return handleDragOver;
}
/**
 * Simplified hook for common cases where containers have an 'items' or 'children' property
 *
 * @example
 * ```tsx
 * const [folders, setFolders] = useState(initialFolders);
 *
 * const handleDragOver = useSimpleSortableContainers({
 *   containers: folders,
 *   setContainers: setFolders,
 *   itemsKey: 'files', // The property that contains the items
 * });
 * ```
 */
export function useSimpleSortableContainers({ containers, setContainers, itemsKey = 'items', }) {
    return useSortableContainers({
        items: containers,
        setItems: setContainers,
        getContainerId: container => `container-${container.id}`,
        getItemsArray: container => container[itemsKey],
        setItemsArray: (container, newItems) => ({
            ...container,
            [itemsKey]: newItems,
        }),
    });
}
