import { type Theme } from '@mui/material/styles/createTheme';
import { TagColorVariant } from './types';
export declare const getTagColors: (variant: TagColorVariant, theme: Theme) => {
    backgroundColor: string | undefined;
    hoverColor: string | undefined;
    color: string | undefined;
};
