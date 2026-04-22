import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Avatar from '../Avatar';
import CardContainer from '../CardContainer';
import Title from '../Title';
import { IconButton, LinearProgress, Stack, useTheme } from '@mui/material';
import { IconAlertTriangle, IconCheck, IconDownload, IconExchange, IconFile, IconTrash, IconX, } from '@tabler/icons-react';
import { bytesToSize } from '../../../utils/bytes';
import { downloadFile, downloadUrl, getFileExtension } from '../../../utils/files';
const FileCard = ({ status, sx, onRemove, onReupload, file, attachment, fileAsset, showDownloadButton = true, showReuploadButton = true, showRemoveButton = true, showRemoveUploadingButton = true, disabled = false, readOnly = false, }) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    let Icon = null;
    let iconColor = 'primary';
    let description = '';
    let descriptionColor = null;
    let showRemove = showRemoveButton;
    let RemoveIcon = IconTrash;
    let ReuploadIcon = null;
    let DownloadIcon = null;
    let cardProps = {};
    const finalFile = file || attachment || fileAsset;
    // Get size string - fileAsset.size is already formatted, file.size needs conversion
    const getSize = () => {
        if (fileAsset)
            return fileAsset.size;
        if (attachment)
            return attachment.size;
        if (file)
            return bytesToSize(file.size);
        return '';
    };
    switch (status) {
        case 'default':
            Icon = IconFile;
            description = `${getSize()} • ${(getFileExtension(finalFile?.name ?? '') ?? '').toUpperCase()}`;
            DownloadIcon = IconDownload;
            break;
        case 'success':
            Icon = IconCheck;
            description = `${getSize()} • ${(getFileExtension(finalFile?.name ?? '') ?? '').toUpperCase()}`;
            DownloadIcon = IconDownload;
            break;
        case 'uploading':
            Icon = IconFile;
            description = `${getSize()} • ${t('hu_file_card.loading')}...`;
            RemoveIcon = IconX;
            showRemove = showRemoveUploadingButton;
            break;
        case 'error':
            Icon = IconAlertTriangle;
            ReuploadIcon = IconExchange;
            iconColor = 'error';
            cardProps = {
                backgroundColor: theme.palette.new.background.feedback.error,
                borderColor: theme.palette.new.border.states.error,
            };
            description = t('hu_file_card.loading_error');
            descriptionColor = theme.palette.new.text.feedback.error;
            break;
    }
    return (_jsxs(CardContainer, { sx: { ...cardProps, ...sx }, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    gap: 1,
                }, children: [_jsx(Avatar, { color: iconColor, size: "medium", Icon: Icon }), _jsx(Title, { variant: "S", title: _jsx("span", { title: finalFile.name, children: finalFile.name }), description: description, withEllipsis: true, sx: {
                            flex: 1,
                            minWidth: 0,
                            wordBreak: 'break-all',
                            '.MuiTypography-globalXS': {
                                color: descriptionColor,
                            },
                        } }), ReuploadIcon && onReupload && showReuploadButton && (_jsx(IconButton, { onClick: onReupload, disabled: disabled, children: _jsx(ReuploadIcon, { size: 24 }) })), DownloadIcon && showDownloadButton && (_jsx(IconButton, { onClick: () => {
                            if (file) {
                                downloadFile(file);
                            }
                            else {
                                const asset = attachment || fileAsset;
                                downloadUrl(asset.url, asset.name);
                            }
                        }, disabled: disabled, children: _jsx(DownloadIcon, { size: 24 }) })), onRemove && showRemove && !readOnly && (_jsx(IconButton, { onClick: onRemove, disabled: disabled, children: _jsx(RemoveIcon, { size: 24 }) }))] }), status === 'uploading' && (_jsx(LinearProgress, { sx: { mt: 2, borderRadius: 1 }, variant: "indeterminate" }))] }));
};
export default FileCard;
