import { type ConditionLineProps, type ConditionLineValues, type DefaultItemType } from '../../ConditionLine/types';
import { type DynamicItemsConfig } from '../types';
type DynamicConditionLineProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    condition: ConditionLineValues<FieldItemType, ValueItemType>;
    allConditions: ConditionLineValues<FieldItemType, ValueItemType>[];
    index: number;
    dynamicItems: DynamicItemsConfig<FieldItemType, ValueItemType>;
    conditionLineProps?: Partial<ConditionLineProps<FieldItemType, ValueItemType>>;
    onChange: (condition: ConditionLineValues<FieldItemType, ValueItemType>) => void;
    onDelete: () => void;
    disabled?: boolean;
};
/**
 * Wraps a {@link ConditionLine} with per-line lazy loading of field and value items.
 * Each instance manages its own search state and calls the dynamic item hooks independently.
 */
declare const DynamicConditionLine: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>({ condition, allConditions, index, dynamicItems, conditionLineProps, onChange, onDelete, disabled, }: DynamicConditionLineProps<FieldItemType, ValueItemType>) => import("react/jsx-runtime").JSX.Element;
export default DynamicConditionLine;
