import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import AllSummaryCard from '../../../audience/AllSummaryCard';
import CriteriaAutocomplete from '../../../audience/CriteriaAutocomplete';
import IndividualSummaryCard from '../../../audience/IndividualSummaryCard';
import SegmentationSummaryCard from '../../../audience/SegmentationSummaryCard';
import Alert from '../../../../design-system/Alert';
import useAudienceDrawers from '../hooks/useAudienceDrawers';
import { CriteriaType, } from '../types';
import { getAvailableCriteriaTypes } from '../utils';
const CriteriaSummary = ({ segmentationDrawerProps, individualDrawerProps, getSegmentationDescription, getIndividualDescription, onBeforeDelete, }) => {
    const { t } = useTranslation('material_hu_only');
    const { criterias, setValue, getValues, typedEmptyCondition, segmentationInputProps, segmentationCriteriaDrawer, showSegmentationCriteriaDrawer, segmentationCriteriaForm, individualCriteriaDrawer, showIndividualCriteriaDrawer, individualCriteriaForm, } = useAudienceDrawers({
        segmentationDrawerProps,
        individualDrawerProps,
    });
    const updateCriterias = (next) => {
        setValue('criterias', next, { shouldDirty: true });
    };
    const handleSegmentationClick = (editIndex) => {
        const existingEntry = editIndex !== undefined ? criterias[editIndex] : undefined;
        const conditions = existingEntry?.type === CriteriaType.SEGMENTATION
            ? existingEntry.conditions
            : [typedEmptyCondition];
        segmentationCriteriaForm.reset({ conditions });
        showSegmentationCriteriaDrawer({
            onConfirm: values => {
                const entry = {
                    type: CriteriaType.SEGMENTATION,
                    conditions: values.conditions,
                };
                if (editIndex !== undefined) {
                    updateCriterias(criterias.map((c, i) => (i === editIndex ? entry : c)));
                }
                else {
                    updateCriterias([...criterias, entry]);
                }
            },
            inputProps: segmentationInputProps,
        });
    };
    const handleIndividualClick = (editIndex) => {
        const existingEntry = editIndex !== undefined ? criterias[editIndex] : undefined;
        const userIds = existingEntry?.type === CriteriaType.INDIVIDUAL
            ? existingEntry.userIds
            : new Set();
        individualCriteriaForm.reset({ userIds, search: '' });
        showIndividualCriteriaDrawer({
            onConfirm: values => {
                const entry = {
                    type: CriteriaType.INDIVIDUAL,
                    userIds: values.userIds ?? new Set(),
                };
                if (editIndex !== undefined) {
                    updateCriterias(criterias.map((c, i) => (i === editIndex ? entry : c)));
                }
                else {
                    updateCriterias([...criterias, entry]);
                }
            },
        });
    };
    const handleDelete = (index) => {
        const doDelete = () => {
            const current = getValues('criterias') ?? [];
            updateCriterias(current.filter((_, i) => i !== index));
        };
        if (onBeforeDelete) {
            onBeforeDelete(index, criterias[index], doDelete);
        }
        else {
            doDelete();
        }
    };
    const availableTypes = getAvailableCriteriaTypes(criterias);
    const hasAll = criterias.some(c => c.type === CriteriaType.ALL);
    return (_jsxs(_Fragment, { children: [segmentationCriteriaDrawer, individualCriteriaDrawer, criterias.map((entry, index) => {
                if (entry.type === CriteriaType.ALL) {
                    return (_jsx(AllSummaryCard, { onDelete: () => handleDelete(index) }, `all-${index}`));
                }
                if (entry.type === CriteriaType.SEGMENTATION) {
                    return (_jsx(SegmentationSummaryCard, { description: getSegmentationDescription(entry), onEdit: () => handleSegmentationClick(index), onDelete: () => handleDelete(index) }, `segmentation-${index}`));
                }
                if (entry.type === CriteriaType.INDIVIDUAL) {
                    return (_jsx(IndividualSummaryCard, { description: getIndividualDescription(entry), onEdit: () => handleIndividualClick(index), onDelete: () => handleDelete(index) }, `individual-${index}`));
                }
                return null;
            }), hasAll && (_jsx(Alert, { severity: "highlight", title: t('audience.all_selected_alert_title'), description: t('audience.all_selected_alert_description') })), availableTypes.length > 0 && (_jsx(CriteriaAutocomplete, { onIndividual: availableTypes.includes(CriteriaType.INDIVIDUAL)
                    ? () => handleIndividualClick()
                    : undefined, onSegmentation: availableTypes.includes(CriteriaType.SEGMENTATION)
                    ? () => handleSegmentationClick()
                    : undefined }))] }));
};
export default CriteriaSummary;
