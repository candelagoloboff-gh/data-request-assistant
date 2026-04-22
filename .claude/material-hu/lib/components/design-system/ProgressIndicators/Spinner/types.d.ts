import { type CircularProgressProps } from '@mui/material';
export type SpinnerProps = CircularProgressProps & {
    /** Centers the spinner inside its container using absolute positioning */
    centered?: boolean;
    /** Controls the diameter of the spinner */
    width?: 'small' | 'medium';
    /** Uses a light color scheme suited for dark backgrounds */
    darkBackground?: boolean;
};
