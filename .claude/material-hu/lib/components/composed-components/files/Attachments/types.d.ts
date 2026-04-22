import { type ControllerProps } from 'react-hook-form';
import { type SortableAttachment, type UpdateAttachmentData, type UploadFile } from '../../../../types/attachments';
export type AttachmentsProps = {
    attachments: SortableAttachment[];
    editing?: boolean;
    onDownload?: (attachment: SortableAttachment, index: number) => void;
    onEdit?: (attachment: SortableAttachment, index: number, values: UpdateAttachmentData) => void;
    onDelete?: (attachment: SortableAttachment, index: number) => void;
    onAdd?: (attachments: SortableAttachment[]) => void;
    onSort?: (attachments: SortableAttachment[]) => void;
    upload?: UploadFile;
    editRules?: ControllerProps['rules'];
    emptyDescription?: string;
};
export type FormAttachmentsValues = {
    [k: string]: SortableAttachment[];
};
export type FormAttachmentsProps = {
    name: string;
    inputProps: Omit<AttachmentsProps, 'attachments' | 'editing'>;
};
