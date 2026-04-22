import { type AvatarProps } from '../../../design-system/Avatar/types';
import { type CardContainerProps } from '../../../design-system/CardContainer/types';
import { type PillsProps } from '../../../design-system/Pills/types';
import { type TitleProps } from '../../../design-system/Title/types';
import { type SxProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
/** Props for the SelectionCriteriaCard component. */
export type SelectionCriteriaCardProps = {
    /** Callback fired when the card is clicked. */
    onClick?: () => void;
    /** Tabler icon displayed inside the avatar on the left side of the card. */
    Icon: TablerIcon;
    /** Primary text shown as the card heading. */
    title: string;
    /** Secondary text displayed below the title. */
    description: string;
    /** Optional text rendered as a pill badge on the right side of the card. */
    info?: string;
    /** Optional tooltip text shown when hovering the info pill badge. */
    infoTooltip?: string;
    /** When `true`, renders a chevron arrow on the right side of the card. @default true */
    withArrow?: boolean;
    /** MUI `sx` style overrides applied to the root `CardContainer`. */
    sx?: SxProps;
    /** Props forwarded to each inner slot of the card. */
    slotProps?: SelectionCriteriaCardSlotProps;
};
/** Slot-level prop overrides for inner elements of SelectionCriteriaCard. */
export type SelectionCriteriaCardSlotProps = {
    /** Props forwarded to the root `CardContainer` component. */
    root?: Partial<CardContainerProps>;
    /** Props forwarded to the `Avatar` component. */
    avatar?: Partial<AvatarProps>;
    /** Props forwarded to the `Title` component. */
    title?: Partial<TitleProps>;
    /** Props forwarded to the info `Pills` component. */
    pills?: Partial<PillsProps>;
};
