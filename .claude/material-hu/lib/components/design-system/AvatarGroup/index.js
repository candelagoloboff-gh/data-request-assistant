import { jsx as _jsx } from "react/jsx-runtime";
import { AvatarGroup as AvatarGroupMui, useTheme } from '@mui/material';
import Avatar from '../Avatar';
import { getColorsVariant, getSizeInPixels } from '../Avatar/utils';
const MAX_AVATARS = 4;
export const formatSurplus = (surplus) => surplus > 999 ? `+${Math.trunc(surplus / 1000)}K` : `+${surplus}`;
const AvatarGroup = ({ size = 'medium', avatars, totalAvatars, }) => {
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    const colorsVariant = getColorsVariant('default', theme);
    return (_jsx(AvatarGroupMui, { spacing: "small", sx: {
            justifyContent: 'start',
            '& .MuiAvatar-root': {
                height: sizeInPixels,
                width: sizeInPixels,
                position: 'static',
                border: `1px solid ${theme.palette.new.text.neutral.inverted}`,
            },
        }, slotProps: {
            additionalAvatar: {
                sx: {
                    height: sizeInPixels,
                    width: sizeInPixels,
                    fontSize: (totalAvatars || avatars.length) > 99 ? 14 : 'initial',
                    border: `1px solid ${theme.palette.new.text.neutral.inverted}`,
                    ...colorsVariant,
                },
            },
        }, max: MAX_AVATARS, renderSurplus: formatSurplus, total: totalAvatars || avatars.length, children: avatars.map(avatar => (_jsx(Avatar, { ...avatar }, avatar.text || avatar.src))) }));
};
export default AvatarGroup;
