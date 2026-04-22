import { type ControllerProps } from 'react-hook-form';
import { type RadioProps, type SxProps, type TypographyProps } from '@mui/material';
import { type AvatarProps } from '../../Avatar/types';
export type FormRadioButtonProps = {
    /** Field name registered with react-hook-form */
    name: string;
    /** Props passed to the underlying RadioButton component */
    radioButtonProps: Omit<RadioProps, 'name'> & {
        /** Visible label for the radio option */
        label: string;
        /** Secondary metadata text shown next to the label */
        extraData?: string;
        /** Descriptive text shown below the label */
        description?: string;
        /** Additional styles applied to the wrapping Stack */
        stackSx?: SxProps;
        /** Additional styles applied to the label Typography */
        labelProps?: TypographyProps;
        /** Removes the radio indicator when there is only one option */
        isOnlyOption?: boolean;
    };
    /** Removes the radio indicator when there is only one option */
    isOnlyOption?: boolean;
    /** Validation rules forwarded to react-hook-form Controller */
    rules?: ControllerProps['rules'];
    /** If true, clicking on an already-selected radio button will deselect it */
    allowDeselect?: boolean;
};
export type RadioButtonProps = {
    /** Shows the radio in an error state */
    error?: boolean;
    /** Whether this radio option is currently selected */
    isActive?: boolean;
    /** Visible label for the radio option */
    label: string;
    /** Secondary metadata text shown next to the label */
    extraData?: string;
    /** Descriptive text shown below the label */
    description?: string;
    /** Callback fired when the radio is clicked, receives the new active state */
    onClick?: (param: boolean) => void;
    /** Additional styles applied to the wrapping Stack (parent) component */
    stackSx?: SxProps;
    /** Additional styles applied to the label Typography component */
    labelProps?: TypographyProps;
    /** Optional avatar displayed alongside the radio label */
    avatarProps?: AvatarProps;
} & Omit<RadioProps, 'label' | 'onClick'>;
