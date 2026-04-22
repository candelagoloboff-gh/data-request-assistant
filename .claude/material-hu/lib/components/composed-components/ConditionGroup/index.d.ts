import { type DefaultItemType } from '../ConditionLine/types';
import { type ConditionGroupProps } from './types';
declare const ConditionGroup: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>({ onAdd, onDelete, onChange, disabled, value, slotProps, dynamicItems, }: ConditionGroupProps<FieldItemType, ValueItemType>) => import("react/jsx-runtime").JSX.Element;
export default ConditionGroup;
