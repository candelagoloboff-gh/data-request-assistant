import { type AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material';
import { type AvatarProps } from '../Avatar/types';
export type AvatarGroupProps = {
    /** Size applied to all avatars in the group */
    size?: AvatarProps['size'];
    /** List of avatar data to render */
    avatars: Pick<AvatarProps, 'src' | 'color' | 'alt' | 'text'>[];
    /** Total count shown in the overflow indicator without requiring all avatar data */
    totalAvatars?: number;
    /** MUI sx prop for custom styling */
    sx?: MuiAvatarGroupProps['sx'];
};
