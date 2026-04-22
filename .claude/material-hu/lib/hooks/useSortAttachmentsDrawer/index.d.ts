import { type SortableAttachment } from '../../types/attachments';
export type SortAttachmentsDrawerProps = {
    attachments?: SortableAttachment[];
    onCancel?: () => void;
    onConfirm?: (attachments: SortableAttachment[]) => void;
};
/** Provides a drawer for reordering attachments via drag-and-drop. */
export declare const useSortAttachmentsDrawer: () => {
    sortAttachmentsDrawer: import("react/jsx-runtime").JSX.Element;
    showSortAttachmentsDrawer: (props: Partial<SortAttachmentsDrawerProps>) => void;
    closeSortAttachmentsDrawer: () => void;
};
