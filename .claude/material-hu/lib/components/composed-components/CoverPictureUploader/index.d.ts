import { type MouseEvent } from 'react';
import { type DropEvent } from 'react-dropzone';
declare const CoverPictureUploader: import("react").ForwardRefExoticComponent<{
    aspectRatio?: import("../Image/types").ImageAspectRatioTypes;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    maxSize?: number;
    recommendedSizeTooltip?: {
        format: string[];
        size: string;
    };
    recommendedWidth?: number;
    recommendedHeight?: number;
    sx?: import("@mui/material").FormControlProps["sx"];
    onChange: (value: import("./types").CoverPictureUploaderValue, event: DropEvent | MouseEvent<HTMLButtonElement>) => void;
    value?: import("./types").CoverPictureUploaderValue;
    defaultSrc?: string;
    onFileChange?: (file: File, event: DropEvent | MouseEvent<HTMLButtonElement>) => void;
} & Partial<Pick<import("./hooks/useHandleDropzone").UseHandleDropzoneProps, "onDropRejected" | "onDropAccepted">> & import("react").RefAttributes<HTMLDivElement>>;
export default CoverPictureUploader;
