import { type ButtonProps } from '@mui/material';
export type Value = number | null;
export type SlotProps = {
    button: {
        sx?: ButtonProps['sx'];
    };
};
export type ButtonGroupProps = {
    /** Labels for each button in the group */
    labels: string[];
    /** Callback fired when the selected button changes */
    onChange?: (nextValue: Value) => void;
    /** Currently selected button index (controlled) */
    value?: Value;
    /** Makes the button group expand to fill its container width */
    fullWidth?: boolean;
    /** Prevents deselecting the active button by clicking it again */
    disableUnselect?: boolean;
    /** Keeps the selected state fixed and non-interactive */
    fixedCheck?: boolean;
    /** Shows a checkmark icon on the active button */
    showCheckIcon?: boolean;
    /** Initially selected button index (uncontrolled) */
    defaultValue?: Value;
    /** Props forwarded to inner slots */
    slotProps?: SlotProps;
};
