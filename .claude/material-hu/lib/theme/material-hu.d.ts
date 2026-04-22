import { type Theme } from '@mui/material';
import { type BaseColorType } from './hugo/colors';
declare module '@mui/system' {
    interface Shape {
        borderRadiusS: number;
        borderRadiusM: number;
        borderRadiusL: number;
        borderBottomLeftRadiusL: number;
        borderBottomRightRadiusL: number;
        borderBottomLeftRadiusS: number;
        borderBottomRightRadiusS: number;
        borderBottomLeftRadiusM: number;
        borderBottomRightRadiusM: number;
        borderTopLeftRadiusL: number;
        borderTopRightRadiusL: number;
        borderTopLeftRadiusS: number;
        borderTopRightRadiusS: number;
        borderTopLeftRadiusM: number;
        borderTopRightRadiusM: number;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface ColorRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }
    interface Palette {
        neutral: ColorRange;
    }
    interface PaletteColor {
        lightest?: string;
        darkest?: string;
        alpha4?: string;
        alpha8?: string;
        alpha12?: string;
        alpha30?: string;
        alpha50?: string;
    }
    interface PaletteOptions {
        neutral?: ColorRange;
    }
    interface TypeBackground {
        paper: string;
        default: string;
    }
}
export type ColorPreset = 'blue' | 'green' | 'indigo' | 'purple';
export type Contrast = 'normal' | 'high';
export type Direction = 'ltr' | 'rtl';
export type PaletteMode = 'dark' | 'light';
declare module '@mui/material/TableCell' {
    interface TableCellPropsVariantOverrides {
        titleField: true;
        shortField: true;
        userField: true;
    }
}
type ThemeConfig = {
    responsiveFontSizes?: boolean;
    colorPreset?: string;
    contrast?: Contrast;
    direction?: Direction;
    paletteMode?: PaletteMode;
};
declare module '@mui/material/styles' {
    interface Palette extends Partial<BaseColorType> {
        /** @deprecated use new tokens instead. */
        humand?: Palette['primary'];
    }
    interface PaletteOptions extends Partial<BaseColorType> {
        /** @deprecated use new tokens instead. */
        humand?: PaletteOptions['primary'];
    }
    interface TypographyOptions {
        globalXXS?: React.CSSProperties;
        globalXS?: React.CSSProperties;
        globalS?: React.CSSProperties;
        globalM?: React.CSSProperties;
        globalL?: React.CSSProperties;
        globalXL?: React.CSSProperties;
        globalXXL?: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        globalXXS?: React.CSSProperties;
        globalXS?: React.CSSProperties;
        globalS?: React.CSSProperties;
        globalM?: React.CSSProperties;
        globalL?: React.CSSProperties;
        globalXL?: React.CSSProperties;
        globalXXL?: React.CSSProperties;
    }
    interface ButtonVariantsOptions {
        primary: React.CSSProperties;
        secondary: React.CSSProperties;
        tertiary: React.CSSProperties;
    }
    interface LoadingButtonVariantsOptions {
        primary: React.CSSProperties;
        secondary: React.CSSProperties;
        tertiary: React.CSSProperties;
    }
    interface IconButtonVariantsOptions {
        primary: React.CSSProperties;
        secondary: React.CSSProperties;
        tertiary: React.CSSProperties;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface Palette extends Partial<BaseColorType> {
        /** @deprecated use new tokens instead. */
        humand?: import('@mui/material/styles').Palette['primary'];
    }
    interface PaletteOptions extends Partial<BaseColorType> {
        /** @deprecated use new tokens instead. */
        humand?: import('@mui/material/styles').PaletteOptions['primary'];
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        globalXXS: true;
        globalXS: true;
        globalS: true;
        globalM: true;
        globalL: true;
        globalXL: true;
        globalXXL: true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        /** @deprecated use new tokens instead. */
        humand: true;
    }
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        'tertiary-filled': true;
        success: true;
        error: true;
    }
    interface ButtonPropsSizeOverrides {
    }
}
declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides {
        /** @deprecated use new tokens instead. */
        disabled: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        /** @deprecated use new tokens instead. */
        humand: true;
    }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        /** @deprecated use new tokens instead. */
        humand: true;
    }
    interface IconButtonPropsSizeOverrides {
    }
    interface IconButtonOwnProps {
        variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-filled' | 'success' | 'error';
    }
}
declare module '@mui/material/Fab' {
    interface FabPropsSizeOverrides {
        /** @deprecated use new tokens instead. */
        large: true;
    }
}
declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        /** @deprecated use new tokens instead. */
        humand: true;
    }
}
export declare const createNewTheme: (config?: ThemeConfig) => Theme;
export {};
