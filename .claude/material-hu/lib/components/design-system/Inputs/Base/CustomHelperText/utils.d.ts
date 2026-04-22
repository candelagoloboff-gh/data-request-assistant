import { type Theme } from '@mui/material';
export declare const getHelperColor: (theme: Theme, error: boolean | undefined, success: boolean | undefined, disabled: boolean | undefined) => string | undefined;
export declare const getCounterColor: (theme: Theme, error: boolean | undefined, success: boolean | undefined) => string | undefined;
export declare const shouldShowHelperText: (hasCounter: boolean | undefined, helperText: string | undefined, error: boolean | undefined) => boolean;
export declare const getCounterValue: (value: string | undefined, maxLength: number | undefined) => string;
