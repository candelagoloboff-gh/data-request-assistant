import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import SelectionCriteriaCard from '../../audience/SelectionCriteriaCard';
import { IconUsers } from '@tabler/icons-react';
const IndividualCriteriaCard = ({ sx, ...props }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(SelectionCriteriaCard, { ...props, Icon: IconUsers, title: t('audience.specific_collaborators_title'), description: t('audience.specific_collaborators_description'), sx: { animationDelay: `25ms`, ...sx } }));
};
export default IndividualCriteriaCard;
