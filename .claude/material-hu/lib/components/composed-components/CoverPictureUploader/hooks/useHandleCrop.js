import { useTranslation } from 'react-i18next';
import { useModal } from '../../../../hooks/useModal';
import CroppingModal from '../../CroppingModal';
const useHandleCrop = ({ recommendedWidth = 798, recommendedHeight = 399, onSave = () => null, }) => {
    const { t } = useTranslation('material_hu_only');
    return useModal(CroppingModal, { fullWidth: true, maxWidth: 'lg' }, {
        onSave,
        recommendedWidth,
        recommendedHeight,
        title: t('cover_picture_uploader.cover_picture_reposition'),
        saveLabel: t('cover_picture_uploader.confirm'),
    });
};
export default useHandleCrop;
