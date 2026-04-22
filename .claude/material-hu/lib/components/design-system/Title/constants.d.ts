import { type TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { type TitleVariantTypes } from './types';
export declare const tooltipSize: {
    XL: {
        copetin: number;
        description: number;
    };
    L: {
        copetin: number;
        description: number;
    };
    M: {
        copetin: number;
        description: number;
    };
    S: {
        copetin: number;
        description: number;
    };
};
export declare const adjustedCopetin: Record<TitleVariantTypes, keyof TypographyPropsVariantOverrides>;
export declare const adjustedDescription: Record<TitleVariantTypes, keyof TypographyPropsVariantOverrides>;
