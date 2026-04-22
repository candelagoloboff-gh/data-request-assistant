import { type CardContainerProps } from '../CardContainer';
import { type Button, type SxProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
export type StateCardVariant = 'primary' | 'success' | 'error' | 'warning' | 'wifi-off';
export type ButtonProps = React.ComponentProps<typeof Button>;
export type Action = {
    /** Label text rendered on the button */
    label: string;
    /** Handler called when the button is clicked */
    onClick: ButtonProps['onClick'];
};
export type StateCardProps = {
    /** Custom styles applied to the root element */
    sx?: SxProps;
    /** Main heading text of the state card */
    title: string;
    /** Descriptive content displayed below the title */
    description: React.ReactNode;
    /** Primary call-to-action button */
    primaryAction?: Action;
    /** Secondary call-to-action button */
    secondaryAction?: Action;
    /** Visual theme variant of the card */
    variant?: StateCardVariant;
    /** Icon rendered above the title */
    icon?: TablerIcon;
    /** Props forwarded to inner slot components */
    slotProps?: {
        card?: CardContainerProps;
    };
};
