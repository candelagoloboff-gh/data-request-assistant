import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FileItem from '../../../components/composed-components/files/FileItem';
import SortableList from '../../../components/composed-components/SortableList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const SortAttachmentsFormContent = () => {
    const { t } = useTranslation();
    const { control, setValue } = useFormContext();
    const attachments = useWatch({ name: 'attachments', control });
    const handleSort = (sortedItems) => {
        setValue('attachments', sortedItems);
    };
    return (_jsxs(Stack, { sx: { gap: 2, height: '100%' }, children: [_jsx(Typography, { variant: "globalS", children: t('general:attachment.sort.description') }), _jsx(SortableList, { onSort: handleSort, items: attachments, dragByHandler: true, sx: { gap: 1, flex: 1, overflowX: 'hidden' }, ItemComponent: ({ item, dragHandleButton }) => (_jsx(FileItem, { startContent: dragHandleButton, file: item, sx: { width: '100%' } })) })] }));
};
export default SortAttachmentsFormContent;
