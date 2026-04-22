import { type ControllerProps } from 'react-hook-form';
import { type RatingProps as MuiRatingProps } from '@mui/material';
export type RatingProps = Omit<MuiRatingProps, 'precision'> & {
    /** Applies error styling to the rating */
    error?: boolean;
    /** Helper text shown below the rating */
    helperText?: string;
};
export type FormRatingProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Rating component */
    inputProps?: RatingProps;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
