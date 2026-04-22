import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../../../design-system/Avatar';
import CardContainer from '../../../design-system/CardContainer';
import Skeleton from '../../../design-system/Skeleton';
import Title from '../../../design-system/Title';
import { IconButton, Stack } from '@mui/material';
import { IconEdit, IconTrash } from '@tabler/icons-react';
const SummaryCard = ({ Icon, title, description, onEdit, onDelete, loading = false, disabled = false, sx, slotProps = {}, }) => {
    const { root: rootProps, avatar: avatarProps, title: titleProps, editButton: editButtonProps, deleteButton: deleteButtonProps, } = slotProps;
    const handleEdit = () => {
        onEdit?.();
    };
    const handleDelete = () => {
        onDelete?.();
    };
    return (_jsx(CardContainer, { sx: sx, fullWidth: true, ...rootProps, children: _jsxs(Stack, { sx: { flexDirection: 'row', gap: 2, alignItems: 'center' }, children: [_jsx(Avatar, { Icon: Icon, ...avatarProps }), _jsxs(Stack, { children: [_jsx(Title, { variant: "S", title: title, description: !loading && description, ...titleProps }), loading && _jsx(Skeleton, { sx: { marginTop: 0.5 } })] }), _jsxs(Stack, { sx: {
                        flex: 1,
                        gap: 0.5,
                        alignItems: 'center',
                        justifyContent: 'end',
                        flexDirection: 'row',
                    }, children: [onEdit && (_jsx(IconButton, { variant: "tertiary", onClick: handleEdit, ...editButtonProps, disabled: editButtonProps?.disabled || disabled, children: _jsx(IconEdit, {}) })), onDelete && (_jsx(IconButton, { variant: "tertiary", onClick: handleDelete, ...deleteButtonProps, disabled: deleteButtonProps?.disabled || disabled, children: _jsx(IconTrash, {}) }))] })] }) }));
};
export default SummaryCard;
