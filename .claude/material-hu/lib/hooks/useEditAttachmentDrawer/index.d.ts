import { type ControllerProps } from 'react-hook-form';
import { type Attachment, type UpdateAttachmentData } from '../../types/attachments';
export type EditAttachmentDrawerProps = {
    onCancel?: (attachment: Attachment) => void;
    onConfirm?: (attachment: Attachment, values: UpdateAttachmentData) => void;
    attachment: Attachment;
};
/** Provides a drawer for renaming an existing attachment. */
export declare const useEditAttachmentDrawer: (rules: ControllerProps["rules"]) => {
    editAttachmentDrawer: import("react/jsx-runtime").JSX.Element;
    showEditAttachmentDrawer: (props: Partial<EditAttachmentDrawerProps>) => void;
    closeEditAttachmentDrawer: () => void;
};
