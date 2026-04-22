import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Link } from 'react-router-dom';
import HuListItem from '../../design-system/List/components/ListItem';
import { getFullName, getInitials } from './utils';
function UserAvatar({ user, sx, profileProps }) {
    const fullName = getFullName(user);
    const userAvatarContent = (_jsx(HuListItem, { sx: {
            '& .MuiTypography-root': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            '& .MuiListItem-root': { pl: 0 },
            '& .MuiListItem-root > .MuiStack-root': {
                gap: 1,
            },
            ...sx,
        }, avatar: {
            src: user.profilePicture ?? undefined,
            text: !user.profilePicture ? getInitials(fullName) : undefined,
            color: 'primary',
        }, text: {
            title: fullName,
            description: profileProps?.showEmployeeInternalId && user.employeeInternalId,
            copetin: profileProps?.showEmail && user.email,
        } }));
    if (profileProps?.redirectToPath) {
        return (_jsx(Link, { to: profileProps.redirectToPath, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: 'none' }, children: userAvatarContent }));
    }
    return userAvatarContent;
}
export default memo(UserAvatar);
