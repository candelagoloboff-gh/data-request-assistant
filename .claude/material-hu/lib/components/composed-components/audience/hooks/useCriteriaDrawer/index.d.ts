import { type FieldValues } from 'react-hook-form';
import { type CriteriaDrawerProps, type UseCriteriaDrawerProps } from './types';
declare const useCriteriaDrawer: <TValues extends FieldValues>({ defaultValues, collaboratorsReach, }: UseCriteriaDrawerProps<TValues>) => {
    criteriaDrawer: import("react/jsx-runtime").JSX.Element;
    showCriteriaDrawer: (props: Partial<CriteriaDrawerProps<TValues>>) => void;
    closeCriteriaDrawer: () => void;
    criteriaForm: import("react-hook-form").UseFormReturn<TValues, any, undefined>;
};
export default useCriteriaDrawer;
