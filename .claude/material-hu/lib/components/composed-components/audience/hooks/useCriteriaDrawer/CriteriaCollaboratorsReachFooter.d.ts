import { type FieldValues } from 'react-hook-form';
import { type CriteriaCollaboratorsReachConfig } from './types';
type CriteriaCollaboratorsReachFooterProps<TValues extends FieldValues> = {
    collaboratorsReach: CriteriaCollaboratorsReachConfig<TValues>;
};
declare const CriteriaCollaboratorsReachFooter: <TValues extends FieldValues>({ collaboratorsReach, }: CriteriaCollaboratorsReachFooterProps<TValues>) => import("react/jsx-runtime").JSX.Element;
export default CriteriaCollaboratorsReachFooter;
