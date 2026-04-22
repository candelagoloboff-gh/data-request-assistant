import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AllCriteriaCard from '../../../audience/AllCriteriaCard';
import IndividualCriteriaCard from '../../../audience/IndividualCriteriaCard';
import SegmentationCriteriaCard from '../../../audience/SegmentationCriteriaCard';
import useAudienceDrawers from '../hooks/useAudienceDrawers';
import { CriteriaType, } from '../types';
const CriteriaSelector = ({ segmentationDrawerProps, individualDrawerProps, }) => {
    const { criterias, setValue, segmentationInputProps, segmentationCriteriaDrawer, showSegmentationCriteriaDrawer, individualCriteriaDrawer, showIndividualCriteriaDrawer, } = useAudienceDrawers({
        segmentationDrawerProps,
        individualDrawerProps,
    });
    const addCriteria = (entry) => {
        setValue('criterias', [...criterias, entry], { shouldDirty: true });
    };
    const handleSegmentationClick = () => {
        showSegmentationCriteriaDrawer({
            onConfirm: values => {
                addCriteria({
                    type: CriteriaType.SEGMENTATION,
                    conditions: values.conditions,
                });
            },
            inputProps: segmentationInputProps,
        });
    };
    const handleIndividualClick = () => {
        showIndividualCriteriaDrawer({
            onConfirm: values => {
                addCriteria({
                    type: CriteriaType.INDIVIDUAL,
                    userIds: values.userIds ?? new Set(),
                });
            },
        });
    };
    const handleAllClick = () => {
        addCriteria({ type: CriteriaType.ALL });
    };
    return (_jsxs(_Fragment, { children: [_jsx(SegmentationCriteriaCard, { onClick: handleSegmentationClick }), _jsx(IndividualCriteriaCard, { onClick: handleIndividualClick }), _jsx(AllCriteriaCard, { onClick: handleAllClick }), segmentationCriteriaDrawer, individualCriteriaDrawer] }));
};
export default CriteriaSelector;
