import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import useCriteriaDrawer from '../../../audience/hooks/useCriteriaDrawer';
import { useTheme } from '@mui/material';
import { merge } from 'lodash';
import IndividualSelectionContent from './content';
import { IndividualCriteriaProvider } from './context';
import { isIndividualCriteriaEmpty } from './utils';
const useIndividualCriteriaDrawer = ({ defaultValues, inputProps, collaboratorsReach, }) => {
    const { palette } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { criteriaDrawer, showCriteriaDrawer, closeCriteriaDrawer, criteriaForm, } = useCriteriaDrawer({
        defaultValues,
        collaboratorsReach: collaboratorsReach
            ? {
                ...collaboratorsReach,
                isFormEmpty: isIndividualCriteriaEmpty,
            }
            : undefined,
    });
    const mergedInputProps = merge({
        sx: {
            overflow: 'hidden',
            backgroundColor: palette.new.background.elements.grey,
        },
        slotProps: {
            search: { placeholder: t('audience.search_placeholder') },
            emptyStateCard: {
                title: t('audience.no_collaborators_match_title'),
                description: t('audience.no_collaborators_match_description'),
            },
            selectAllCheckbox: {
                label: t('audience.select_all'),
            },
        },
    }, inputProps);
    const showIndividualCriteriaDrawer = (props) => {
        showCriteriaDrawer({
            ...props,
            title: t('audience.specific_collaborators_title'),
            description: t('audience.specific_collaborators_description'),
            cancelDescription: t('audience.individual_criteria_cancel_description'),
            children: _jsx(IndividualSelectionContent, {}),
        });
    };
    return {
        showIndividualCriteriaDrawer,
        closeIndividualCriteriaDrawer: closeCriteriaDrawer,
        individualCriteriaDrawer: (_jsx(IndividualCriteriaProvider, { value: mergedInputProps, children: criteriaDrawer })),
        individualCriteriaForm: criteriaForm,
    };
};
export default useIndividualCriteriaDrawer;
