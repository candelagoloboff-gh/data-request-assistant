import { type User } from '../../../UserAvatar/types';
/** Props consumed by the drawer **content** (search + virtualized list). */
export type SelectedCollaboratorsDrawerContentProps = {
    /**
     * Async function that fetches a page of collaborators.
     *
     * @param params.q     - Optional search query typed by the user.
     * @param params.limit - Maximum number of items to return per page.
     * @param params.cursor - Opaque cursor returned by the previous page; `undefined` for the first page.
     * @returns A response whose `data` contains the next `cursor` (if more pages exist) and the `items` array.
     */
    service: (params: {
        q?: string;
        limit: number;
        cursor?: string;
    }) => Promise<{
        data: {
            cursor?: string;
            items: (User & {
                id: number;
            })[];
        };
    }>;
    /**
     * Base key used by `useInfiniteQuery` to cache and invalidate the collaborator list.
     * The current search term is appended automatically as a second element of the query key.
     */
    queryKey: string;
    /**
     * Total number of selected collaborators.
     * Displayed in the list header regardless of how many items have been loaded so far.
     */
    totalCount: number;
};
/**
 * Full set of props accepted by `useSelectedCollaboratorsDrawer` when calling `showSelectedCollaboratorsDrawer`.
 * Extends `SelectedCollaboratorsDrawerContentProps` with drawer-level callbacks.
 */
export type SelectedCollaboratorsDrawerProps = SelectedCollaboratorsDrawerContentProps & {
    /** Callback fired when the drawer is dismissed (close button, overlay click, or the "back" button). */
    onClose?: () => void;
};
