import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Tooltip from '../../../design-system/Tooltip';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
const CoverPictureActions = ({ onDelete = () => null, onReposition = () => null, onChange = () => null, inputProps = {}, loadingReposition = false, disabled = false, isEdit = false, recommendedSizeTooltip, }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsxs(Stack, { className: "HuCoverPictureUploader-actions", sx: { gap: 0.5, flexDirection: 'row', alignItems: 'center' }, children: [!isEdit && (_jsxs(Button, { variant: "tertiary", onClick: onChange, disabled: disabled, children: [_jsx("input", { ...inputProps }), t('cover_picture_uploader.cover_picture_change')] })), isEdit && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "tertiary", onClick: onDelete, disabled: disabled, children: t('cover_picture_uploader.cover_picture_delete') }), _jsx(LoadingButton, { variant: "tertiary", onClick: onReposition, loading: loadingReposition, disabled: disabled, children: t('cover_picture_uploader.cover_picture_reposition') })] })), recommendedSizeTooltip && (_jsx(Tooltip, { description: t('cover_picture_uploader.cover_picture_tooltip', {
                    format: recommendedSizeTooltip.format.join(' - '),
                    size: recommendedSizeTooltip.size,
                }), direction: "bottom", children: _jsx(IconInfoCircle, { size: 16 }) }))] }));
};
export default CoverPictureActions;
