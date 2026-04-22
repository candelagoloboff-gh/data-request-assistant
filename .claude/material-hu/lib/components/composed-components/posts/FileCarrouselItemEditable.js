import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import FileCard from '../../design-system/FileCard';
const FileCarrouselItemEditable = ({ item }) => {
    const form = useFormContext();
    const isLoading = !item.attachment;
    return (_jsx(FileCard, { file: item.file, sx: { width: '100%' }, attachment: item.attachment, status: isLoading ? 'uploading' : 'success', showDownloadButton: false, onRemove: () => form.setValue('files', form.getValues('files').filter(f => f !== item), { shouldDirty: true }), onReupload: () => { } }));
};
export default FileCarrouselItemEditable;
