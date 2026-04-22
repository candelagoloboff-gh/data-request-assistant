import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SelectionCriteriaCard from '../../audience/SelectionCriteriaCard';
import { IconBuildingSkyscraper } from '@tabler/icons-react';
const AllCriteriaCard = ({ sx, ...props }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SelectionCriteriaCard, { ...props, Icon: IconBuildingSkyscraper, title: t('audience.all_community_title'), description: t('audience.all_community_description'), info: t('audience.automatic_update'), infoTooltip: t('audience.all_community_info_tooltip'), sx: { animationDelay: `50ms`, ...sx } }));
};
export default AllCriteriaCard;
