import { type AvatarProps } from '../../design-system/Avatar/types';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
import { type TitleProps } from '../../design-system/Title/types';
import { type LoadingButtonProps } from '@mui/lab';
import { type SxProps, type Theme } from '@mui/material';
export type StateCardProps = {
    slotProps?: StateCardSlotProps;
    sx?: SxProps<Theme>;
    cardContained?: boolean;
    /** @deprecated Use slotProps.title instead */
    title?: TitleProps['title'];
    /** @deprecated Use slotProps.title instead */
    description?: TitleProps['description'];
    /** @deprecated Use slotProps.title instead */
    variant?: TitleProps['variant'];
    /** @deprecated Use slotProps.avatar instead */
    Icon?: AvatarProps['Icon'];
    /** @deprecated Use slotProps.avatar instead */
    color?: AvatarProps['color'];
    /** @deprecated Use slotProps.button instead */
    action?: LoadingButtonProps;
};
export type StateCardSlotProps = {
    button?: LoadingButtonProps;
    title?: TitleProps;
    avatar?: AvatarProps;
    root?: CardContainerProps;
};
