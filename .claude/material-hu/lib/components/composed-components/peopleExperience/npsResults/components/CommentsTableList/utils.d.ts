import { type Theme } from '@mui/material';
import { FilterOption } from './types';
export type FilterColors = {
    backgroundColor: string;
    textColor: string;
    icon: React.ReactNode;
};
export declare const getFilterColors: (filter: FilterOption, theme: Theme) => FilterColors | null;
