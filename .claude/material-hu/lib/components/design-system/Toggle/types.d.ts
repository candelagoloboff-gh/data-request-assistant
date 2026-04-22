import { type SwitchProps as MuiSwitchProps } from '@mui/material';
export type ToggleProps = {
    /** Prevents user interaction with the toggle */
    disabled?: MuiSwitchProps['disabled'];
    /** Whether the toggle is in the on position */
    checked?: MuiSwitchProps['checked'];
    /** Callback fired when the toggle state changes */
    onChange: (value: boolean) => void;
};
