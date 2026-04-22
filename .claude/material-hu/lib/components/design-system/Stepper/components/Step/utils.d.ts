import { type Theme } from '@mui/material';
export declare const getColorConfig: (theme: Theme, { isCurrent, hasError, isCompleted, }: {
    isCurrent?: boolean;
    hasError?: boolean;
    isCompleted?: boolean;
}) => {
    background: string;
    barBG: string;
    border: string;
    text: string;
    titleText: string;
};
