import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SelectionSummaryCard from '../../audience/SummaryCard';
import { IconUsers } from '@tabler/icons-react';
const IndividualSummaryCard = ({ onEdit, onDelete, description, }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SelectionSummaryCard, { Icon: IconUsers, title: t('audience.specific_collaborators_title'), description: description, onEdit: onEdit, onDelete: onDelete }));
};
export default IndividualSummaryCard;
