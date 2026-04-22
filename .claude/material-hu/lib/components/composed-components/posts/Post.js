import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';
import { insertIf } from '../../../utils/array';
import { getDistanceToNow } from '../../../utils/time';
import { getInitials } from '../../../utils/user';
import MenuList from '../../composed-components/MenuList';
import SeeMoreText from '../../composed-components/SeeMoreText';
import CardContainer from '../../design-system/CardContainer';
import ListItem from '../../design-system/List/components/ListItem';
import FilesCarrousel from './FilesCarrousel';
import MediaCarrousel from './MediaCarrousel';
export const Post = ({ profilePicture, fullName, body, publicationDatetime, sx, actions, media, files, }) => {
    const { t } = useTranslation('material_hu_only');
    const actionsList = [
        ...insertIf(!!actions?.onEdit, {
            title: t('posts.edit'),
            Icon: IconEdit,
            onClick: actions?.onEdit,
        }),
        ...insertIf(!!actions?.onDelete, {
            title: t('posts.delete'),
            Icon: IconTrash,
            onClick: actions?.onDelete,
        }),
    ];
    return (_jsx(CardContainer, { fullWidth: true, padding: 24, sx: sx, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(ListItem, { avatar: { src: profilePicture, text: getInitials(fullName) }, text: {
                        title: fullName,
                        description: t('posts.time_distance', {
                            distance: getDistanceToNow(publicationDatetime),
                        }),
                    }, actionMenuList: actionsList.length ? (_jsx(MenuList, { Icon: IconDots, options: actionsList })) : undefined, sx: { '.MuiListItem-root': { p: 0 } } }), _jsx(SeeMoreText, { text: body, lines: 6 }), _jsx(MediaCarrousel, { media: media }), _jsx(FilesCarrousel, { files: files })] }) }));
};
export default Post;
