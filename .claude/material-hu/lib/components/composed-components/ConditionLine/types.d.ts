import { type UseControllerProps } from 'react-hook-form';
import { type MenuListItemsProps } from '../MenuListItems';
import { type ButtonProps } from '../../design-system/Buttons/Button';
import { type IconButtonProps } from '@mui/material/IconButton';
import { type JoinSelectorProps } from './components/JoinSelector';
/**
 * Available condition operators for filtering values
 */
export declare enum ConditionOperator {
    /** Exactly equals to */
    IS = "IS",
    /** Not equal to */
    IS_NOT = "IS_NOT",
    /** Is within a list of values */
    IS_IN = "IS_IN",
    /** Is not within a list of values */
    IS_NOT_IN = "IS_NOT_IN",
    /** Contains the specified value */
    CONTAINS = "CONTAINS",
    /** Does not contain the specified value */
    NOT_CONTAINS = "NOT_CONTAINS",
    /** Is greater than */
    IS_GREATER_THAN = "IS_GREATER_THAN",
    /** Is less than */
    IS_LESS_THAN = "IS_LESS_THAN",
    /** Is greater than or equal to */
    IS_GREATER_THAN_OR_EQUAL_TO = "IS_GREATER_THAN_OR_EQUAL_TO",
    /** Is less than or equal to */
    IS_LESS_THAN_OR_EQUAL_TO = "IS_LESS_THAN_OR_EQUAL_TO",
    /** Field is empty */
    IS_EMPTY = "IS_EMPTY",
    /** Field is not empty */
    IS_NOT_EMPTY = "IS_NOT_EMPTY"
}
/**
 * Logical operators for joining conditions
 */
export declare enum JoinOperator {
    /** AND operator - both conditions must be met */
    AND = "AND",
    /** OR operator - at least one condition must be met */
    OR = "OR"
}
/**
 * Base type for condition line values (legacy version)
 */
export type ConditionLineValuesType = {
    /** Selected field (ID) */
    field: number | string | null;
    /** Value(s) for the condition */
    value: (number | string)[] | string | Date | null;
    /** Applied condition operator */
    conditionOperator: ConditionOperator | null;
    /** Operator to join with the next condition */
    joinOperator?: JoinOperator;
};
/**
 * Type for defining join operators with labels
 */
export type JoinOperatorType = {
    /** Operator ID */
    id: JoinOperator;
    /** Main label to display */
    label: string;
    /** Secondary label or description */
    subLabel: string;
};
/**
 * Minimum required structure for selectable items
 */
export type DefaultItemType = {
    /** Unique identifier of the item */
    id: number;
    /** Visible name of the item */
    name: string;
};
/**
 * Complete values of a condition line with generic types
 */
export type ConditionLineValues<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Operator to join with the next condition */
    joinOperator: JoinOperator;
    /** Selected field */
    field: FieldItemType | null;
    /** Applied condition operator */
    conditionOperator: ConditionOperator;
    /** Selected values for the condition */
    value: ValueItemType[] | null;
};
export type ConditionLineSlotProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Props for the join operator selector (AND/OR) */
    joinOperatorSelector?: Partial<JoinSelectorProps>;
    /** Props for the field selector */
    fieldSelector?: Partial<MenuListItemsProps<FieldItemType>>;
    /** Props for the condition operator button */
    conditionOperatorSelector?: Partial<ButtonProps>;
    /** Props for the value selector */
    valueSelector?: Partial<MenuListItemsProps<ValueItemType>>;
    /** Props for the delete button */
    deleteButton?: Partial<IconButtonProps>;
};
/**
 * Props for the ConditionLine component
 */
export type ConditionLineProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Function executed when the condition line is deleted */
    onDelete?: () => void;
    /** Function executed when condition values change */
    onChange?: (values: ConditionLineValues<FieldItemType, ValueItemType>) => void;
    /** Disables the entire condition line */
    disabled?: boolean;
    /** Tooltip text for the delete button */
    deleteTooltip?: string;
    /** Array of available fields to select */
    fieldSelectorItems: FieldItemType[];
    /** Array of available values to select (based on selected field) */
    valueSelectorItems: ValueItemType[];
    /** Current values of the condition line */
    value: ConditionLineValues<FieldItemType, ValueItemType>;
    /** Custom props for internal components */
    slotProps?: ConditionLineSlotProps<FieldItemType, ValueItemType>;
    /** Errors for the condition line */
    errors?: ConditionLineErrors;
};
export type ConditionLineErrors = {
    field?: {
        message: string;
    };
    value?: {
        message: string;
    };
};
/**
 * Validation rules for individual fields in ConditionLine
 */
export type ConditionLineValidationRules = {
    /** Validation rules for the join operator field */
    joinOperator?: UseControllerProps['rules'];
    /** Validation rules for the field selector */
    field?: UseControllerProps['rules'];
    /** Validation rules for the condition operator */
    conditionOperator?: UseControllerProps['rules'];
    /** Validation rules for the value selector */
    value?: UseControllerProps['rules'];
};
/**
 * Props for the form wrapper for react-hook-form integration
 */
export type FormConditionLineProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Base name for the form fields (will be used as prefix for individual fields) */
    name: string;
    /** Validation rules for individual fields */
    rules?: ConditionLineValidationRules;
    /** Props passed to the base ConditionLine component */
    conditionLineProps: Omit<ConditionLineProps<FieldItemType, ValueItemType>, 'value' | 'onChange'>;
};
