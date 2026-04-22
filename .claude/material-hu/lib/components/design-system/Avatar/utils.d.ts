import { type SxProps, type Theme } from '@mui/material';
import { type BadgeProps } from '../Badge/types';
import { type AvatarProps } from './types';
export declare const getSkeletonVariant: (variant: AvatarProps["variant"]) => import("@mui/types").OverridableStringUnion<"text" | "rectangular" | "rounded" | "circular", import("@mui/material").SkeletonPropsVariantOverrides> | undefined;
export declare const getSizeInPixels: (size: AvatarProps["size"]) => string;
export declare const getIconSize: (size: AvatarProps["size"]) => 24 | 32;
export declare const getBorderVariant: (color: AvatarProps["color"], theme: Theme) => string | undefined;
export declare const getColorsVariant: (color: AvatarProps["color"], theme: Theme) => {
    backgroundColor: string;
    color: string;
};
export declare const getOffset: (size: AvatarProps["size"], variant: BadgeProps["variant"]) => SxProps<Theme>;
