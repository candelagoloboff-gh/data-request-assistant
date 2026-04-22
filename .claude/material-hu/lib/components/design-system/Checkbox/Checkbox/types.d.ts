import { type ControllerProps } from 'react-hook-form';
import { type CheckboxProps as MuiCheckboxProps, type TypographyProps } from '@mui/material';
export type CustomProps = {
    /** Label displayed next to the checkbox */
    label?: string | React.ReactNode;
    /** Tooltip shown on the label */
    labelTooltip?: string;
    /** Secondary description text below the label */
    description?: string;
    /** Additional informational text rendered below the description */
    extraInfo?: string;
    /** Whether the checkbox is in an error state */
    error?: boolean;
    /** Props passed to inner slots */
    slotProps?: {
        extraInfo?: TypographyProps;
    };
};
export type OriginalProps = {
    /** Id of the element that describes the checkbox */
    'aria-describedby'?: MuiCheckboxProps['aria-describedby'];
    /** Accessible label for the checkbox */
    'aria-label'?: MuiCheckboxProps['aria-label'];
    /** Whether the checkbox is checked */
    checked?: MuiCheckboxProps['checked'];
    /** Prevents interaction with the checkbox */
    disabled?: MuiCheckboxProps['disabled'];
    /** HTML id attribute for the checkbox */
    id?: MuiCheckboxProps['id'];
    /** Shows a horizontal dash instead of a checkmark (partially selected) */
    indeterminate?: MuiCheckboxProps['indeterminate'];
    /** Ref forwarded to the underlying input element */
    inputRef?: MuiCheckboxProps['inputRef'];
    /** Callback fired when the checked state changes */
    onChange?: MuiCheckboxProps['onChange'];
    /** Callback fired when the checkbox is clicked */
    onClick?: MuiCheckboxProps['onClick'];
    /** Custom styles applied to the checkbox */
    sx?: MuiCheckboxProps['sx'];
    /** Tab order of the checkbox */
    tabIndex?: MuiCheckboxProps['tabIndex'];
};
export type CheckboxBaseProps = {
    /** Whether the checkbox is in an error state */
    error: boolean;
    /** Primary color applied to the checkbox */
    primaryColor: string | undefined;
    /** Background color shown on hover */
    hoverBackgroundColor: string | undefined;
} & OriginalProps;
export type CheckboxProps = CustomProps & OriginalProps;
export type FormCheckboxProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Checkbox component */
    checkBoxProps: CheckboxProps;
    /** Validation rules for the form field */
    rules?: ControllerProps['rules'];
};
