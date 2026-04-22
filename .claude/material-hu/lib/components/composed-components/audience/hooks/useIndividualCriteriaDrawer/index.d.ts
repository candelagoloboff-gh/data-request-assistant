import { type IndividualCriteriaDrawerProps, type IndividualCriteriaValues, type UseIndividualCriteriaDrawerProps } from './types';
declare const useIndividualCriteriaDrawer: ({ defaultValues, inputProps, collaboratorsReach, }: UseIndividualCriteriaDrawerProps) => {
    showIndividualCriteriaDrawer: (props: IndividualCriteriaDrawerProps) => void;
    closeIndividualCriteriaDrawer: () => void;
    individualCriteriaDrawer: import("react/jsx-runtime").JSX.Element;
    individualCriteriaForm: import("react-hook-form").UseFormReturn<IndividualCriteriaValues, any, undefined>;
};
export default useIndividualCriteriaDrawer;
