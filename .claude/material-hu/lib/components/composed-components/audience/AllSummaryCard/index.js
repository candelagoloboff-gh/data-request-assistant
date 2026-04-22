import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SummaryCard from '../../audience/SummaryCard';
import { IconBuildingSkyscraper } from '@tabler/icons-react';
const AllSummaryCard = ({ onEdit, onDelete }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SummaryCard, { Icon: IconBuildingSkyscraper, title: t('audience.all_community_title'), description: t('audience.all_community_description'), onEdit: onEdit, onDelete: onDelete }));
};
export default AllSummaryCard;
