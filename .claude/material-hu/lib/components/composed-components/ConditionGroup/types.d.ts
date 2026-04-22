import { type ConditionLineProps, type ConditionLineValues, type DefaultItemType } from '../ConditionLine/types';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
import { type ButtonProps } from '@mui/material';
/**
 * Result returned by dynamic item hooks.
 * Provides the fetched items along with pagination and loading metadata.
 */
export type DynamicItemsResult<T> = {
    /** Currently loaded items. */
    items: T[];
    /** Whether the initial page is loading. */
    loading?: boolean;
    /** Whether more pages are available for infinite scroll. */
    hasNextPage?: boolean;
    /** Fetches the next page of items. */
    fetchNextPage?: () => void;
    /** Whether the next page fetch is in progress. */
    isFetchingNextPage?: boolean;
};
/**
 * Configuration for lazily loading field and value items per condition line.
 *
 * Each function is a **custom React hook** called once per condition line,
 * so it may use `useQuery` / `useInfiniteQuery` internally.
 * The functions must be stable references (module-level or memoised).
 *
 * @template FieldItemType - Type for selectable field items.
 * @template ValueItemType - Type for selectable value items.
 */
export type DynamicItemsConfig<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Hook that returns field items. Receives IDs of fields already used in other lines and an optional search query. */
    useFieldItems: (params: {
        excludeFieldIds: number[];
        q?: string;
    }) => DynamicItemsResult<FieldItemType>;
    /** Hook that returns value items for the currently selected field. Receives the field ID (null when no field selected) and an optional search query. */
    useValueItems: (params: {
        fieldId: number | null;
        q?: string;
    }) => DynamicItemsResult<ValueItemType>;
};
/**
 * Props for the ConditionGroup component.
 *
 * Renders a list of ConditionLine components inside a card container,
 * with the ability to add and remove conditions.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType)
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType)
 */
export type ConditionGroupProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Callback fired when a condition line is deleted. Receives the deleted condition and its index. */
    onDelete?: (field: ConditionLineValues<FieldItemType, ValueItemType>, index: number) => void;
    /** Callback fired when a new condition line is added. */
    onAdd?: () => void;
    /** Callback fired when any condition value changes. Receives the full updated array. */
    onChange?: (values: ConditionGroupValues<FieldItemType, ValueItemType>) => void;
    /** If true, disables the entire condition group including all condition lines and the add button. */
    disabled?: boolean;
    /** Current array of condition line values. Must contain at least one condition. */
    value: ConditionGroupValues<FieldItemType, ValueItemType>;
    /** Override props for internal sub-components (root card, condition lines, add button). */
    slotProps?: ConditionGroupSlotProps<FieldItemType, ValueItemType>;
    /**
     * When provided, field and value items are loaded lazily per condition line
     * instead of using the static `fieldSelectorItems` / `valueSelectorItems`
     * from `slotProps.conditionLine`.
     */
    dynamicItems?: DynamicItemsConfig<FieldItemType, ValueItemType>;
};
/**
 * Array of condition line values representing the full state of a condition group.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType)
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType)
 */
export type ConditionGroupValues<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = ConditionLineValues<FieldItemType, ValueItemType>[];
/**
 * Slot props for customizing internal sub-components of ConditionGroup.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType)
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType)
 */
export type ConditionGroupSlotProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Props forwarded to the root CardContainer. */
    root?: Partial<CardContainerProps>;
    /** Props forwarded to each ConditionLine instance. Shared across all lines. */
    conditionLine?: Partial<ConditionLineProps<FieldItemType, ValueItemType>>;
    /** Props forwarded to the "add condition" Button. */
    addButton?: Partial<ButtonProps>;
};
/**
 * Props for the FormConditionGroup wrapper component.
 *
 * Integrates ConditionGroup with react-hook-form via useFieldArray.
 * The `name` prop determines the field array path in the form state,
 * and `value`/`onChange` are managed internally by the form.
 *
 * @template FieldItemType - Type for selectable field items (must extend DefaultItemType)
 * @template ValueItemType - Type for selectable value items (must extend DefaultItemType)
 */
export type FormConditionGroupProps<FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType> = {
    /** Field array name path in the form (e.g. "conditions", "group.conditions"). */
    name: string;
    /** Props passed to the underlying ConditionGroup component (excluding value and onChange, which are managed by the form). */
    inputProps: Omit<ConditionGroupProps<FieldItemType, ValueItemType>, 'value' | 'onChange'>;
};
