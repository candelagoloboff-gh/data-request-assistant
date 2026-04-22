import { type DropzoneProps } from 'react-dropzone';
import { type ControllerProps } from 'react-hook-form';
import { type FormControlProps } from '@mui/material';
import { type FileCardProps as FileCardOriginalProps, type FileCardType } from '../FileCard/types';
export type UploaderProps = {
    /** Custom content rendered inside the dropzone area. When provided, replaces the default Title and upload Button. */
    children?: React.ReactNode;
    /** Heading text displayed in the dropzone area */
    title?: string;
    /** Secondary text displayed in the dropzone area */
    description?: string;
    /** Helper text shown below the uploader */
    helperText?: string;
    /** Label displayed above the uploader */
    label?: string;
    /** Currently uploaded files */
    value?: FileCardType[];
    /** Callback fired when the list of files changes */
    onChange: (files: FileCardType[], options?: {
        signal?: AbortSignal;
    }) => void;
    /** Maximum allowed file size in bytes */
    fileSizeLimit?: number;
    /** Function called to upload a single file; must resolve to a FileCardType */
    uploadFunction: (file: File, options?: {
        signal?: AbortSignal;
    }) => Promise<FileCardType>;
    /** Callback fired when dropped files pass validation */
    onDropAccepted?: (files: File[]) => void;
    /** Callback fired after all dropped files finish uploading */
    onFilesUploaded?: (files: FileCardType[]) => void;
    /** Applies error styling to the uploader */
    error?: boolean;
    /** Custom styles applied to the root element */
    sx?: FormControlProps['sx'];
    /** MIME type categories accepted by the dropzone */
    acceptedTypes?: FileType[];
    /** Maximum number of files that can be uploaded */
    maxFiles?: number;
    /** Prevents adding or removing files */
    disabled?: boolean;
    /** @deprecated Use slotProps.fileCard instead */
    fileCardProps?: FileCardProps;
    /** Calls onChange while files are still uploading */
    triggerOnChangeWhenUploading?: boolean;
    /** Shows the upload button even when the max file count is reached */
    showUploadButtonOnMaxFiles?: boolean;
    /** Props forwarded to inner slot components */
    slotProps?: {
        root?: Partial<FormControlProps>;
        fileCard?: Partial<FileCardOriginalProps>;
    };
    /** Prevents modifying uploaded files without applying error styling */
    readOnly?: boolean;
    /** Callback fired when dropped files are rejected (wrong type, too large, etc.) */
    onDropRejected?: DropzoneProps['onDropRejected'];
};
export type FileType = 'image' | 'pdf' | 'msword' | 'video' | 'compressed' | 'xml';
export type FormUploaderProps = {
    /** Custom content rendered inside the dropzone area. Forwarded to the Uploader component. */
    children?: React.ReactNode;
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Uploader component */
    uploaderProps: Omit<UploaderProps, 'value' | 'onChange' | 'children'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
    /** @deprecated Use uploaderProps.slotProps.fileCard instead */
    fileCardProps?: FileCardProps;
};
export type FileCardProps = {
    /** Callback fired when a file card's remove button is clicked */
    onRemove?: (fileCard: FileCardType) => void;
    /** Prevents the file card from being removed */
    disabled?: boolean;
};
