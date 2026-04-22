import { type DefaultItemType } from '../ConditionLine/types';
import { type FormConditionGroupProps } from './types';
declare const FormConditionGroup: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>({ name, inputProps, }: FormConditionGroupProps<FieldItemType, ValueItemType>) => import("react/jsx-runtime").JSX.Element;
export type { FormConditionGroupProps };
export default FormConditionGroup;
