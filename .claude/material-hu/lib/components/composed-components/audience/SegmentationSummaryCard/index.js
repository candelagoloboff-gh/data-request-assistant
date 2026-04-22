import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SummaryCard from '../../audience/SummaryCard';
import { IconUsersGroup } from '@tabler/icons-react';
const SegmentationSummaryCard = ({ onEdit, onDelete, description, }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SummaryCard, { Icon: IconUsersGroup, title: t('audience.segmentation_groups_title'), description: description, onEdit: onEdit, onDelete: onDelete }));
};
export default SegmentationSummaryCard;
