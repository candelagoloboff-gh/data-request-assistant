import { type SkeletonProps as MuiSkeletonProps } from '@mui/material';
export type SkeletonProps = {
    /** Content shown when loading is false */
    children?: MuiSkeletonProps['children'];
    /** Custom styles applied to the skeleton */
    sx?: MuiSkeletonProps['sx'];
    /** Width of the skeleton placeholder */
    width?: MuiSkeletonProps['width'];
    /** Height of the skeleton placeholder */
    height?: MuiSkeletonProps['height'];
    /** Shape variant: text, rectangular, circular, or rounded */
    variant?: MuiSkeletonProps['variant'];
    /** When true, shows the skeleton placeholder instead of children */
    isLoading?: boolean;
};
