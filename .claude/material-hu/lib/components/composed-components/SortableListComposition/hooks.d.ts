import { type DragEvent } from './types';
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
export declare function useSortableContainers<TContainer, TItem extends {
    id: string;
}>({ items, setItems, getContainerId, getItemsArray, setItemsArray, }: {
    items: TContainer[];
    setItems: (items: TContainer[] | ((prev: TContainer[]) => TContainer[])) => void;
    getContainerId: (container: TContainer) => string;
    getItemsArray: (container: TContainer) => TItem[];
    setItemsArray: (container: TContainer, newItems: TItem[]) => TContainer;
}): (event: DragEvent) => void;
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
export declare function useSimpleSortableContainers<TContainer extends {
    id: string;
    [key: string]: any;
}, TItem extends {
    id: string;
}>({ containers, setContainers, itemsKey, }: {
    containers: TContainer[];
    setContainers: (containers: TContainer[] | ((prev: TContainer[]) => TContainer[])) => void;
    itemsKey?: string;
}): (event: DragEvent) => void;
