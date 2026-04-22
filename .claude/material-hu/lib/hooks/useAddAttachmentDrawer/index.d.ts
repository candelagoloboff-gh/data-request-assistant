import { type SortableAttachment, type UploadFile } from '../../types/attachments';
export type AddAttachmentDrawerProps = {
    onCancel?: () => void;
    onConfirm?: (attachments: SortableAttachment[]) => void;
};
/** Provides a drawer for uploading and adding new attachments. */
export declare const useAddAttachmentDrawer: (upload?: UploadFile) => {
    addAttachmentDrawer: import("react/jsx-runtime").JSX.Element;
    showAddAttachmentDrawer: (props: Partial<AddAttachmentDrawerProps>) => void;
    closeAddAttachmentDrawer: () => void;
};
