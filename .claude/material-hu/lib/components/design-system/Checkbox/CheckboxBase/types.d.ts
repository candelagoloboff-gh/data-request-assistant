import { type CheckboxProps as MuiCheckboxProps } from '@mui/material';
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
    /** Makes the checkbox read-only (visible but not editable) */
    readOnly?: MuiCheckboxProps['readOnly'];
};
export type CheckboxBaseProps = {
    /** Whether the checkbox is in an error state */
    error?: boolean | undefined;
    /** Primary color applied to the checkbox */
    primaryColor?: string | undefined;
    /** Background color shown on hover */
    hoverBackgroundColor?: string | undefined;
} & OriginalProps;
