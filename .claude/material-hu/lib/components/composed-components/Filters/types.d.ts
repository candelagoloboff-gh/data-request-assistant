import { type BadgeProps, type ButtonProps, type IconButtonProps, type StackProps } from '@mui/material';
type FiltersButtonSlotProps = {
    root?: StackProps;
    button?: IconButtonProps;
    badge?: BadgeProps;
    clearButton?: ButtonProps;
};
export type FiltersButtonProps = {
    count: number;
    onClick: () => void;
    onClear?: () => void;
    slotProps?: FiltersButtonSlotProps;
};
export {};
