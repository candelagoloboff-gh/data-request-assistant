import { type Attachment, type FileAsset } from '../../../types/attachments';
import { type CardContainerProps } from '../CardContainer/types';
export type FileCardType = {
    /** Current state of the file card */
    status: 'default' | 'uploading' | 'success' | 'error';
    /** Native File object for a file being uploaded */
    file?: File;
    /** Attachment metadata for an already-uploaded file */
    attachment?: Attachment;
    /** File asset data associated with the card */
    fileAsset?: FileAsset;
};
export type FileCardProps = FileCardType & {
    /** Custom styles applied to the card container */
    sx?: CardContainerProps['sx'];
    /** Callback fired when the user removes the file */
    onRemove?: () => void;
    /** Callback fired when the user re-uploads the file */
    onReupload?: () => void;
    /** Shows the download action button */
    showDownloadButton?: boolean;
    /** Shows the re-upload action button */
    showReuploadButton?: boolean;
    /** Shows the remove action button */
    showRemoveButton?: boolean;
    /** Shows the remove button while the file is uploading */
    showRemoveUploadingButton?: boolean;
    /** Disables all interactions on the card */
    disabled?: boolean;
    /** Renders the card in a read-only state with no actions */
    readOnly?: boolean;
};
