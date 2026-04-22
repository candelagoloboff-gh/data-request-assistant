import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { getInitials } from '../../../utils/user';
import Alert from '../../design-system/Alert';
import Avatar from '../../design-system/Avatar';
import CardContainer from '../../design-system/CardContainer';
import FormInputClassic from '../../design-system/Inputs/Classic/form';
import AddMediaButtons from './AddMediaButtons';
import { MAX_ATTACHED_SIZE } from './constants';
import EditMediaCarrousel from './EditMediaCarrousel';
import FilesCarrousel from './FilesCarrousel';
import MediaSize from './MediaSize';
export const CreatePost = ({ profilePicture, fullName, handlePost, sx, existingPost, onCancel, uploadMedia, uploadFile, maxAttachedSize = MAX_ATTACHED_SIZE, maxInputSize, filesCarrouselProps, }) => {
    const { t } = useTranslation('material_hu_only');
    const form = useForm({
        defaultValues: {
            body: existingPost?.body || '',
            files: existingPost?.files || [],
            media: existingPost?.media || [],
        },
    });
    const { media, files, body } = form.watch();
    const submit = form.handleSubmit(async (values) => {
        await handlePost(values);
        form.reset();
    });
    const { formState } = form;
    const isValidPost = (body.trim() || [...files, ...media].length) && // has body or attachments
        (!existingPost || formState.isDirty) && // something changed when editing
        [...files, ...media].every(file => file.attachment) && // all files are uploaded
        !formState.errors.files; // no file exceeds the limit
    const canUploadAttachments = !!(uploadMedia || uploadFile);
    const hasAttachments = [...files, ...media].length > 0;
    return (_jsx(FormProvider, { ...form, children: _jsx(CardContainer, { fullWidth: true, sx: sx, padding: 24, children: _jsxs(Stack, { children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Avatar, { src: profilePicture, text: getInitials(fullName) }), _jsx(Typography, { sx: { flex: 1 }, children: fullName }), canUploadAttachments && _jsx(MediaSize, { maxInMB: maxAttachedSize })] }), _jsx(FormInputClassic, { name: "body", inputProps: {
                            sx: {
                                mt: 2,
                                mb: 1.5,
                            },
                            multiline: true,
                            maxLength: maxInputSize,
                            minRows: 1,
                            placeholder: t('posts.write_something'),
                            hasCounter: false,
                        } }), hasAttachments && (_jsxs(Stack, { sx: { gap: 2, mb: 1.5 }, children: [_jsx(EditMediaCarrousel, {}), _jsx(FilesCarrousel, { files: files, isEditable: true, filesCarrouselProps: filesCarrouselProps }), formState.errors.files && (_jsx(Alert, { title: t('posts.file_size_exceeded', { maxAttachedSize }), description: t('posts.file_size_exceeded_info'), severity: "error", hasClose: true }, formState.errors.files.message))] })), _jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            '& .MuiStack-root': {
                                flexDirection: 'row',
                                gap: 1,
                            },
                        }, children: [canUploadAttachments && (_jsx(AddMediaButtons, { uploadMedia: uploadMedia, uploadFile: uploadFile, maxAttachedSize: maxAttachedSize })), _jsxs(Stack, { sx: { ml: 'auto', '.MuiButton-root': { minWidth: 'unset' } }, children: [!!onCancel && (_jsx(LoadingButton, { variant: "tertiary", onClick: onCancel, children: t('posts.cancel') })), _jsx(LoadingButton, { variant: "primary", onClick: submit, disabled: !isValidPost, loading: formState.isSubmitting, size: "large", children: t(existingPost ? 'posts.edit' : 'posts.publish') })] })] })] }) }) }));
};
export default CreatePost;
