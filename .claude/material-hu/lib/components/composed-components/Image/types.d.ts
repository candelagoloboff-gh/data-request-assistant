import { type SxProps } from '@mui/material';
export type ImageAspectRatioTypes = '1/1' | '4/5' | '16/9' | '4/1' | '3/2' | '3/1' | '2/1';
export type ImageProps = {
    /** Path to the image */
    src?: string;
    /** Path to the fallback image */
    defaultSrc?: string;
    /**
     * Defines text that can replace the image in the page. By default an empty string is used,
     * indicating that this image is not a key part of the content (it is decoration)
     **/
    alt?: string;
    /** Defines the desired width-to-height ratio */
    aspectRatio?: ImageAspectRatioTypes;
    /** Whether the image is in a loading state */
    loading?: boolean;
    /** Component styles */
    sx?: SxProps;
};
export type ImageSkeletonProps = {
    sx?: SxProps;
};
