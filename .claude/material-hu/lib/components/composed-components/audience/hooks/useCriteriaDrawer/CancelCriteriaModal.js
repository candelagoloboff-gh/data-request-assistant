import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Dialog from '../../../../design-system/Dialog';
const CancelCriteriaModal = ({ onClose, onConfirm, body, }) => {
    const { t } = useTranslation('material_hu_only');
    const handleConfirm = () => {
        onClose();
        onConfirm();
    };
    return (_jsx(Dialog, { onClose: onClose, title: t('audience.exit_confirmation_title'), textBody: body || t('audience.exit_confirmation_body'), secondaryButtonProps: {
            children: t('audience.cancel'),
            onClick: onClose,
        }, primaryButtonProps: {
            children: t('audience.exit'),
            onClick: handleConfirm,
        } }));
};
export default CancelCriteriaModal;
