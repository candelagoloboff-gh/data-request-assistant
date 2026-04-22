import { type MouseEvent } from 'react';
import { type DropEvent, type DropzoneInputProps } from 'react-dropzone';
import { type ControllerProps } from 'react-hook-form';
import { type ImageAspectRatioTypes } from '../Image/types';
import { type FormControlProps } from '@mui/material';
import { type UseHandleDropzoneProps } from './hooks/useHandleDropzone';
export type CoverPicture = string | File | null;
export type CoverPictureUploaderValue = {
    cropped?: CoverPicture;
    original?: CoverPicture;
};
type RecommendedSizeTooltip = {
    format: string[];
    size: string;
};
export type CoverPictureUploaderProps = {
    aspectRatio?: ImageAspectRatioTypes;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    maxSize?: number;
    recommendedSizeTooltip?: RecommendedSizeTooltip;
    recommendedWidth?: number;
    recommendedHeight?: number;
    sx?: FormControlProps['sx'];
    onChange: (value: CoverPictureUploaderValue, event: DropEvent | MouseEvent<HTMLButtonElement>) => void;
    value?: CoverPictureUploaderValue;
    defaultSrc?: string;
    onFileChange?: (file: File, event: DropEvent | MouseEvent<HTMLButtonElement>) => void;
} & Partial<Pick<UseHandleDropzoneProps, 'onDropAccepted' | 'onDropRejected'>>;
export type FormCoverPictureUploaderProps = {
    name: string;
    uploaderProps?: Omit<CoverPictureUploaderProps, 'value' | 'onChange'>;
    rules?: ControllerProps['rules'];
};
export type CoverPictureImageProps = {
    image?: CoverPicture;
    aspectRatio?: ImageAspectRatioTypes;
};
export type CoverPictureActionsProps = {
    onChange?: (event: MouseEvent<HTMLButtonElement>) => void;
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
    onReposition?: (event: MouseEvent<HTMLButtonElement>) => void;
    loadingReposition?: boolean;
    disabled?: boolean;
    isEdit?: boolean;
    inputProps?: DropzoneInputProps;
    recommendedSizeTooltip?: RecommendedSizeTooltip;
};
export {};
