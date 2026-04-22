import { isConditionEmpty } from '../../../ConditionLine/utils';
export const isSegmentationCriteriaEmpty = (values) => {
    if (!values?.conditions?.length)
        return true;
    return values.conditions.every(isConditionEmpty);
};
