import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import FormUploader from '../../../components/design-system/Uploader/form';
import { isAbortError } from '../../../components/design-system/Uploader/utils';
const AddAttachmentFormContent = ({ upload, }) => {
    const { t } = useTranslation();
    const handleUpload = async (file, options) => {
        const { signal } = options ?? {};
        try {
            const attachment = upload ? await upload(file, { signal }) : undefined;
            if (!attachment) {
                return {
                    status: 'error',
                    file,
                };
            }
            return {
                status: 'success',
                attachment: {
                    url: attachment.url || '',
                    name: attachment.name || '',
                    size: attachment.size || '',
                    bytes: attachment.bytes || 0,
                    type: attachment.type,
                },
                file,
            };
        }
        catch (err) {
            if (isAbortError(err))
                throw err;
            return {
                status: 'error',
                file,
            };
        }
    };
    return (_jsx(FormUploader, { name: "fileCards", uploaderProps: {
            triggerOnChangeWhenUploading: true,
            acceptedTypes: ['image', 'pdf', 'msword', 'video'],
            uploadFunction: handleUpload,
            helperText: t('general:attachment.empty'),
            description: t('general:attachment.allowed_with_max_size', {
                maxSize: '100MB',
            }),
            fileSizeLimit: Infinity,
            slotProps: {
                fileCard: {
                    showRemoveUploadingButton: false,
                },
            },
        } }));
};
export default AddAttachmentFormContent;
