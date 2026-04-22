import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useSelectedCollaboratorsDrawer from '../../audience/hooks/useSelectedCollaboratorsDrawer';
import Alert from '../../../design-system/Alert';
import Button from '../../../design-system/Buttons/Button';
import Skeleton from '../../../design-system/Skeleton';
import Title from '../../../design-system/Title';
import { Stack } from '@mui/material';
import CriteriaSelector from './components/CriteriaSelector';
import CriteriaSummary from './components/CriteriaSummary';
const Audience = ({ title, description, segmentationDrawerProps, individualDrawerProps, selectedCollaboratorsDrawerProps, getSegmentationDescription, getIndividualDescription, useCount, onBeforeDelete, slotProps, sx, }) => {
    const { t } = useTranslation('material_hu_only');
    const { watch } = useFormContext();
    const formValues = watch();
    const criterias = formValues.criterias ?? [];
    const hasCriterias = criterias.length > 0;
    const { count, loading: countLoading } = useCount(formValues);
    const displayTitle = title || t('audience.audience_title');
    const displayDescription = description || t('audience.audience_description');
    const { selectedCollaboratorsDrawer, showSelectedCollaboratorsDrawer } = useSelectedCollaboratorsDrawer();
    const handleTotalCollaboratorsClick = () => {
        showSelectedCollaboratorsDrawer({
            ...selectedCollaboratorsDrawerProps,
            totalCount: count,
        });
    };
    return (_jsxs(Stack, { sx: { gap: 3, ...sx }, children: [selectedCollaboratorsDrawer, _jsxs(Stack, { sx: {
                    gap: 3,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }, children: [_jsx(Title, { ...slotProps?.title, title: displayTitle, description: displayDescription }), hasCriterias &&
                        (countLoading ? (_jsx(Skeleton, { variant: "rounded", width: 180, height: 40 })) : (_jsx(Button, { variant: "secondary", onClick: handleTotalCollaboratorsClick, children: t('audience.total_collaborators', { count }) })))] }), slotProps?.alert && _jsx(Alert, { ...slotProps.alert }), hasCriterias ? (_jsx(CriteriaSummary, { segmentationDrawerProps: segmentationDrawerProps, individualDrawerProps: individualDrawerProps, getSegmentationDescription: getSegmentationDescription, getIndividualDescription: getIndividualDescription, onBeforeDelete: onBeforeDelete })) : (_jsx(CriteriaSelector, { segmentationDrawerProps: segmentationDrawerProps, individualDrawerProps: individualDrawerProps }))] }));
};
export default Audience;
