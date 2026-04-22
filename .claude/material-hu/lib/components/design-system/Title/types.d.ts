import { type ReactNode } from 'react';
import { type SxProps } from '@mui/material';
export type TitleVariantTypes = 'XL' | 'L' | 'M' | 'S';
export type TitleWeightTypes = 'fontWeightSemiBold' | 'fontWeightRegular';
export type TitleOverflowTypes = 'hidden' | 'tooltip';
export type BaseProps = {
    /** HTML id attribute for the element */
    id?: string;
    /** Controls the size of the text */
    variant?: TitleVariantTypes;
    /** Truncates text with an ellipsis when it overflows */
    withEllipsis?: boolean;
    /** Strategy used when text overflows its container */
    overflow?: TitleOverflowTypes;
};
export type CopetinTextProps = BaseProps & {
    /** Small text or node rendered above the title */
    copetin?: ReactNode;
    /** Tooltip content shown when hovering the copetin */
    copetinTooltip?: ReactNode;
    /** Custom styles applied to the copetin element */
    sx?: SxProps;
};
export type DescriptionTextProps = BaseProps & {
    /** Descriptive content displayed below the title */
    description?: ReactNode;
    /** Tooltip content shown when hovering the description */
    descriptionTooltip?: ReactNode;
    /** Date string displayed alongside the description */
    date?: string;
    /** Custom styles applied to the description element */
    sx?: SxProps;
};
export type TitleTextProps = BaseProps & {
    /** Main heading content */
    title?: ReactNode;
    /** Applies disabled styling to the title */
    disabled?: boolean;
    /** Controls the font weight of the title text */
    fontWeight?: TitleWeightTypes;
    /** Custom styles applied to the title element */
    sx?: SxProps;
    /** HTML element or component used to render the title */
    component?: React.ElementType;
    /** Fired when overflow detection (scroll vs client size) changes; for layout-dependent UI such as row actions. */
    onOverflowChange?: (overflowed: boolean) => void;
    onClick?: () => void;
};
export type TitleProps = CopetinTextProps & DescriptionTextProps & TitleTextProps & {
    /** Aligns content to the right */
    right?: boolean;
    /** Centers content horizontally */
    centered?: boolean;
    /** Custom styles applied to the root element */
    sx?: SxProps;
    /** Props forwarded to inner slot components */
    slotProps?: {
        copetin?: CopetinTextProps;
        title?: TitleTextProps;
        description?: DescriptionTextProps;
    };
};
