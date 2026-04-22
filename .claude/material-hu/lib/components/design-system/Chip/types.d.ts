import { type ChipProps as MuiChipProps } from '@mui/material';
export type ChipProps = {
    /** Size of the chip */
    size?: MuiChipProps['size'];
    /** Whether the chip is disabled */
    disabled?: MuiChipProps['disabled'];
    /** Callback fired when the delete icon is clicked; shows the delete icon when set */
    onDelete?: MuiChipProps['onDelete'];
    /** Callback fired when the chip is clicked */
    onClick?: MuiChipProps['onClick'];
    /** Custom styles applied to the root element */
    sx?: MuiChipProps['sx'];
} & {
    /** Text displayed inside the chip */
    label: string;
    /** Whether the chip is in a selected state */
    isSelected?: boolean;
    /** Props passed to inner slots */
    slotProps?: {
        /** Props for the label element, e.g. native tooltip via `title` */
        label?: {
            title?: string;
        };
    };
};
