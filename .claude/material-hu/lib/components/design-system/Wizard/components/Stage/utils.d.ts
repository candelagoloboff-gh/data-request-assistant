import { type Theme } from '@mui/material';
export declare enum STATUS {
    ACTIVE = "active",
    COMPLETED = "completed",
    FUTURE = "future"
}
export declare const getStageColorConfig: (status: STATUS, hasError: boolean, theme: Theme) => {
    background: string;
    border: string;
    color: string;
};
export declare const getSubStageColorConfig: (status: STATUS, hasError: boolean, theme: Theme) => {
    color: string;
    border: string;
};
export declare const getStatus: (currentIndex: number, targetIndex: number, isStageCompleted: boolean) => STATUS;
