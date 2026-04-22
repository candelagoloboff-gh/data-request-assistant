import { type ConditionLineValues, type DefaultItemType } from '../../../ConditionLine/types';
import { type AudienceFormValues, type CriteriaSelectorProps } from '../types';
declare const useAudienceDrawers: <FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType>({ segmentationDrawerProps, individualDrawerProps, }: CriteriaSelectorProps<FieldItemType, ValueItemType>) => {
    criterias: import("../types").CriteriaEntry<FieldItemType, ValueItemType>[];
    setValue: import("react-hook-form").UseFormSetValue<AudienceFormValues<FieldItemType, ValueItemType>>;
    getValues: import("react-hook-form").UseFormGetValues<AudienceFormValues<FieldItemType, ValueItemType>>;
    typedEmptyCondition: ConditionLineValues<FieldItemType, ValueItemType>;
    segmentationInputProps: Omit<import("../../../ConditionGroup/types").ConditionGroupProps<FieldItemType, ValueItemType>, "onChange" | "value">;
    segmentationCriteriaDrawer: import("react/jsx-runtime").JSX.Element;
    showSegmentationCriteriaDrawer: (props: import("../../hooks/useSegmentationCriteriaDrawer/types").SegmentationCriteriaDrawerProps<FieldItemType, ValueItemType>) => void;
    segmentationCriteriaForm: import("react-hook-form").UseFormReturn<import("../../hooks/useSegmentationCriteriaDrawer/types").SegmentationCriteriaValues<FieldItemType, ValueItemType>, any, undefined>;
    individualCriteriaDrawer: import("react/jsx-runtime").JSX.Element;
    showIndividualCriteriaDrawer: (props: import("../../hooks/useIndividualCriteriaDrawer/types").IndividualCriteriaDrawerProps) => void;
    individualCriteriaForm: import("react-hook-form").UseFormReturn<import("../../hooks/useIndividualCriteriaDrawer/types").IndividualCriteriaValues, any, undefined>;
};
export default useAudienceDrawers;
