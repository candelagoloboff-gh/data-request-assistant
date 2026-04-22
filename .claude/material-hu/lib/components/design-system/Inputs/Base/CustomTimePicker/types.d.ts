import { type TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers';
export type CustomTimePickerProps = MuiTimePickerProps<Date> & {
    value: Date | null;
    disabled?: boolean;
    error?: boolean;
    size?: 'small' | 'medium';
    placeholder?: string;
    noIcon?: boolean;
    onClear?: () => void;
    onTextFieldClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onTextFieldBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
export type AmPmToolbarProps = {
    value: Date | null;
    onChange: (value: Date, selectionState: 'partial' | 'finish') => void;
};
export type TimePickerEndAdornmentProps = {
    noIcon: boolean;
    disabled: boolean;
    error: boolean;
    showClear: boolean;
    iconSize: number;
    iconPadding: number;
    onOpen: () => void;
    onClear: () => void;
};
