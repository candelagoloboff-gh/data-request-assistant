import { type Theme } from '@mui/material';
import { type BadgeProps, type CardContainerColors } from './types';
export declare const getBadgeProps: (type: string | undefined, theme: Theme) => BadgeProps;
export declare const getBackgroundColor: (color: CardContainerColors, theme: Theme) => string;
export declare const getBorderColor: (color: CardContainerColors, hasShadow: boolean, theme: Theme) => string;
