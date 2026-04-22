import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import FileItem from '../../files/FileItem';
import Button from '../../../design-system/Buttons/Button';
import CardContainer from '../../../design-system/CardContainer';
import Title from '../../../design-system/Title';
import { useAddAttachmentDrawer } from '../../../../hooks/useAddAttachmentDrawer';
import { useEditAttachmentDrawer } from '../../../../hooks/useEditAttachmentDrawer';
import { useSortAttachmentsDrawer } from '../../../../hooks/useSortAttachmentsDrawer';
import Stack from '@mui/material/Stack';
import { IconPlus } from '@tabler/icons-react';
import { sortPositioned } from '../../../../utils/array';
import { downloadFile, downloadUrl } from '../../../../utils/files';
const Attachments = ({ attachments, editing = false, onDownload = () => null, onEdit = () => null, onDelete = () => null, onAdd = () => null, onSort = () => null, upload = undefined, editRules, emptyDescription, }) => {
    const { t } = useTranslation();
    const { editAttachmentDrawer, showEditAttachmentDrawer } = useEditAttachmentDrawer(editRules);
    const { addAttachmentDrawer, showAddAttachmentDrawer } = useAddAttachmentDrawer(upload);
    const { sortAttachmentsDrawer, showSortAttachmentsDrawer } = useSortAttachmentsDrawer();
    const isEmpty = !attachments?.length;
    const showEmpty = isEmpty && editing;
    const description = showEmpty ? emptyDescription : undefined;
    const handleDownload = (attachment, index) => {
        const name = attachment.name || 'download';
        if (attachment.file) {
            downloadFile(attachment.file, name);
        }
        else {
            if (!attachment.url)
                return;
            downloadUrl(attachment.url, name);
        }
        onDownload(attachment, index);
    };
    const handleEdit = (attachment, index) => {
        showEditAttachmentDrawer({
            attachment,
            onConfirm: (_, values) => onEdit(attachment, index, values),
        });
    };
    const handleDelete = (attachment, index) => {
        onDelete(attachment, index);
    };
    const handleAdd = () => {
        showAddAttachmentDrawer({
            onConfirm: onAdd,
        });
    };
    const handleSort = () => {
        showSortAttachmentsDrawer({
            attachments,
            onConfirm: onSort,
        });
    };
    const getActions = (attachment, index) => {
        const baseActions = [
            {
                title: t('general:download'),
                onClick: () => handleDownload(attachment, index),
            },
        ];
        const editingActions = [
            {
                title: t('general:edit'),
                onClick: () => handleEdit(attachment, index),
            },
            {
                title: t('general:delete'),
                onClick: () => handleDelete(attachment, index),
            },
        ];
        return [...baseActions, ...(editing ? editingActions : [])];
    };
    if (isEmpty && !showEmpty)
        return null;
    const sortedAttachments = sortPositioned(attachments) ?? [];
    return (_jsxs(_Fragment, { children: [editAttachmentDrawer, addAttachmentDrawer, sortAttachmentsDrawer, _jsxs(CardContainer, { sx: {
                    width: '100%',
                    '& > .MuiCardContent-root': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    },
                }, children: [_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 1,
                        }, children: [_jsx(Title, { variant: "S", fontWeight: "fontWeightSemiBold", title: t('general:attachments'), description: description }), editing && (_jsxs(Stack, { sx: {
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                }, children: [attachments && attachments.length > 0 && (_jsx(Button, { variant: "secondary", onClick: handleSort, children: t('general:reorder') })), _jsx(Button, { variant: "primary", onClick: handleAdd, startIcon: _jsx(IconPlus, {}), sx: { textWrap: 'nowrap' }, children: t('general:attachment.add.title_other') })] }))] }), sortedAttachments.map((attachment, index) => (_jsx(FileItem, { file: attachment, actions: getActions(attachment, index), sx: { width: '100%' } }, attachment.id)))] })] }));
};
export default Attachments;
