import { type AvatarProps } from '../../../design-system/Avatar/types';
import { type CardContainerProps } from '../../../design-system/CardContainer/types';
import { type TitleProps } from '../../../design-system/Title/types';
import { type IconButtonProps, type SxProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
/** Props for the SummaryCard component. */
export type SummaryCardProps = {
    /** Tabler icon displayed inside the avatar. */
    Icon: TablerIcon;
    /** Primary heading shown next to the avatar. */
    title: string;
    /** Secondary text displayed below the title. */
    description: string;
    /** When `true`, replaces the description with a skeleton loader. @default false */
    loading?: boolean;
    /** Callback fired when the edit button is clicked. If omitted the button is not rendered. */
    onEdit?: () => void;
    /** Callback fired when the delete button is clicked. If omitted the button is not rendered. */
    onDelete?: () => void;
    /** When `true`, disables both action buttons. @default false */
    disabled?: boolean;
    /** MUI `sx` style overrides applied to the root container. */
    sx?: SxProps;
    /** Props forwarded to each inner slot of the card. */
    slotProps?: SummaryCardSlotProps;
};
/** Slot-level prop overrides for inner elements of SummaryCard. */
export type SummaryCardSlotProps = {
    /** Props forwarded to the root `CardContainer`. */
    root?: Partial<CardContainerProps>;
    /** Props forwarded to the `Avatar` component. */
    avatar?: Partial<AvatarProps>;
    /** Props forwarded to the `Title` component. */
    title?: Partial<TitleProps>;
    /** Props forwarded to the edit `IconButton`. */
    editButton?: Partial<IconButtonProps>;
    /** Props forwarded to the delete `IconButton`. */
    deleteButton?: Partial<IconButtonProps>;
};
