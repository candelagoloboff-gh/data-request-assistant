import { type Theme } from '@mui/material';
import './theme-augmentation';
type HuGoThemeOptions = {
    mode?: 'light' | 'dark';
    baseColor?: string;
};
export declare const createHuGoTheme: (options?: HuGoThemeOptions) => Theme;
export {};
