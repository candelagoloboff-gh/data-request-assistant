import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ListItem from '../../../design-system/List/components/ListItem';
import { IconChevronRight } from '@tabler/icons-react';
import useProfileUsersDrawer from '../useProfileUsersDrawer';
const ProfileListUsersRow = ({ field, texts }) => {
    const { openDrawer } = useProfileUsersDrawer(field, texts);
    return (_jsx(_Fragment, { children: _jsx(ListItem, { onClick: () => openDrawer(), text: {
                title: texts.collaborator_count,
                copetin: field.name,
            }, action: { Icon: IconChevronRight }, slotProps: {
                container: {
                    sx: {
                        p: 1,
                        m: -1,
                        borderRadius: 2,
                        '& .MuiIconButton-root:hover': { background: 'transparent' },
                    },
                },
            } }) }));
};
export default ProfileListUsersRow;
