import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import useCriteriaDrawer from '../../../audience/hooks/useCriteriaDrawer';
import FormConditionGroup from '../../../ConditionGroup/form';
import { merge } from 'lodash';
import { isSegmentationCriteriaEmpty } from './utils';
const useSegmentationCriteriaDrawer = ({ defaultValues, collaboratorsReach, }) => {
    const { t } = useTranslation('material_hu_only');
    const { criteriaDrawer, showCriteriaDrawer, closeCriteriaDrawer, criteriaForm, } = useCriteriaDrawer({
        defaultValues,
        collaboratorsReach: collaboratorsReach
            ? {
                ...collaboratorsReach,
                isFormEmpty: isSegmentationCriteriaEmpty,
            }
            : undefined,
    });
    const showSegmentationCriteriaDrawer = (props) => {
        showCriteriaDrawer({
            ...props,
            title: t('audience.segmentation_groups_title'),
            description: t('audience.segmentation_criteria_description'),
            cancelDescription: t('audience.segmentation_criteria_cancel_description'),
            children: (_jsx(FormConditionGroup, { name: "conditions", inputProps: merge({
                    disabled: props.disabled,
                }, props.inputProps) })),
        });
    };
    return {
        showSegmentationCriteriaDrawer,
        closeSegmentationCriteriaDrawer: closeCriteriaDrawer,
        segmentationCriteriaDrawer: criteriaDrawer,
        segmentationCriteriaForm: criteriaForm,
    };
};
export default useSegmentationCriteriaDrawer;
