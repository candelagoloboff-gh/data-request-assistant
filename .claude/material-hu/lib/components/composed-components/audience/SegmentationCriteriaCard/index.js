import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SelectionCriteriaCard from '../../audience/SelectionCriteriaCard';
import { IconUsersGroup } from '@tabler/icons-react';
const SegmentationCriteriaCard = ({ sx, ...props }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SelectionCriteriaCard, { ...props, Icon: IconUsersGroup, title: t('audience.segmentation_groups_title'), description: t('audience.segmentation_groups_description'), info: t('audience.automatic_update'), infoTooltip: t('audience.segmentation_groups_info_tooltip'), sx: { animationDelay: `0ms`, ...sx } }));
};
export default SegmentationCriteriaCard;
