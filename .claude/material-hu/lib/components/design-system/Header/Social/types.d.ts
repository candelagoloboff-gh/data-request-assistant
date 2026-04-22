import { type AvatarProps } from '../../Avatar/types';
import { type HeaderBaseProps, type HeaderSlotProps } from '../types';
export type SocialHeaderSlotProps = HeaderSlotProps & {
    avatar?: Partial<AvatarProps>;
};
export type SocialHeaderProps = Omit<HeaderBaseProps, 'slotProps'> & {
    avatar: Pick<AvatarProps, 'src' | 'text' | 'Icon'>;
    slotProps?: SocialHeaderSlotProps;
};
