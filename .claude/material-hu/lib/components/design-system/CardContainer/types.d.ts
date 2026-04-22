import { type ElementType } from 'react';
import { type CardActionAreaProps, type CardProps, type SxProps } from '@mui/material';
export type CardContainerFooterActionType = {
    /** Callback fired when the footer action is clicked */
    onClick: (e?: React.MouseEvent) => void;
    /** Label text for the footer action button */
    title: string;
};
export type CardContainerColors = 'white' | 'grey';
export type CardContainerBadgeTypes = 'error' | 'success' | 'warning' | 'info' | 'highlight';
export type CardContainerBadgeProps = {
    /** MUI sx prop for custom styling */
    sx?: SxProps;
    /** Badge configuration displayed on the card */
    badge?: {
        /** Text shown inside the badge */
        label: string;
        /** Color/semantic type of the badge */
        type?: CardContainerBadgeTypes;
        /** Shows an icon alongside the badge label */
        hasIcon?: boolean;
    };
};
export type CardContainerImageProps = {
    /** MUI sx prop for custom styling */
    sx?: SxProps;
    /** URL of the image displayed at the top of the card */
    img?: string;
};
export type CardContainerFooterProps = {
    /** MUI sx prop for custom styling */
    sx?: SxProps;
    /** Footer configuration with one or two action buttons */
    footer?: {
        action1: CardContainerFooterActionType;
        text?: string;
    } | {
        action1: CardContainerFooterActionType;
        action2: CardContainerFooterActionType;
    };
};
export type CardContainerProps = {
    /** Badge configuration displayed on the card */
    badge?: CardContainerBadgeProps['badge'];
    /** URL of the image displayed at the top of the card */
    img?: CardContainerImageProps['img'];
    /** Footer configuration with one or two action buttons */
    footer?: CardContainerFooterProps['footer'];
    /** Renders a drop shadow beneath the card */
    hasShadow?: boolean;
    /** Background color of the card */
    color?: CardContainerColors;
    /** Makes the card expand to fill its container width */
    fullWidth?: boolean;
    /** Callback fired when the card is clicked */
    onClick?: (e?: React.MouseEvent) => void;
    /** Internal padding of the card content area in pixels */
    padding?: 0 | 16 | 24;
    /** Disables the hover highlight effect */
    noHover?: boolean;
    /** Applies disabled styling and blocks interaction */
    disabled?: boolean;
    /** Props forwarded to inner slots */
    slotProps?: {
        actionArea?: CardActionAreaProps;
    };
} & CardProps;
export type BadgeProps = {
    /** Icon component rendered inside the badge */
    icon: ElementType;
    /** Background fill color of the badge */
    backgroundColor: string;
    /** Border color of the badge */
    borderColor: string;
    /** Text/icon color inside the badge */
    fontColor: string;
} | null;
