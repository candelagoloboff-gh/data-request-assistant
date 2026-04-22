import { type DefaultItemType } from '../../../ConditionLine/types';
import { type SegmentationCriteriaDrawerProps, type SegmentationCriteriaValues, type UseSegmentationCriteriaDrawerProps } from './types';
declare const useSegmentationCriteriaDrawer: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>({ defaultValues, collaboratorsReach, }: UseSegmentationCriteriaDrawerProps<FieldItemType, ValueItemType>) => {
    showSegmentationCriteriaDrawer: (props: SegmentationCriteriaDrawerProps<FieldItemType, ValueItemType>) => void;
    closeSegmentationCriteriaDrawer: () => void;
    segmentationCriteriaDrawer: import("react/jsx-runtime").JSX.Element;
    segmentationCriteriaForm: import("react-hook-form").UseFormReturn<SegmentationCriteriaValues<FieldItemType, ValueItemType>, any, undefined>;
};
export default useSegmentationCriteriaDrawer;
