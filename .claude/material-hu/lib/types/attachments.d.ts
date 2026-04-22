import { type FileCardType } from '../components/design-system/FileCard/types';
import { type Position } from './array';
export type SortableAttachment = Attachment & {
    id: number;
    file: File;
};
export type Attachment = Partial<Position> & {
    url: string;
    name: string;
    type: string;
    size: string;
    bytes: number;
};
export type CompleteFile = {
    file?: File;
    attachment?: Attachment;
    id: string | number;
};
export type FileAssetType = 'IMAGE' | 'VIDEO' | 'FILE';
export type FileAsset = {
    id: number;
    url: string;
    uploadUrl?: string;
    createdAt: string;
    updatedAt: string;
    type?: FileAssetType;
    externalReference: string | null;
    key: string;
    name: string;
    size: string;
    contentType: string;
    width: number | null;
    height: number | null;
    thumbnailUrl: string | null;
};
export type FormFile = Partial<Position> & {
    name: string | null;
    url?: string;
    size: number | null;
    mime: string;
    fileObject: File | null;
    type: string;
    toUpload?: boolean;
    height?: number;
    width?: number;
    metadata?: {
        durationInMs?: number;
    };
};
export type FileCompleterFunction = (file: Omit<CompleteFile, 'attachment'> & {
    file: File;
}) => Promise<Required<CompleteFile>>;
export type UpdateAttachmentData = {
    name: string;
    extension: string;
};
export type AddAttachmentData = {
    fileCards: FileCardType[];
};
export type SortAttachmentsData = {
    attachments: SortableAttachment[];
};
export type SignedUrlResponse = {
    url: string;
};
export type UploadFile = (file: File, options?: {
    signal?: AbortSignal;
}) => Promise<Attachment | undefined>;
