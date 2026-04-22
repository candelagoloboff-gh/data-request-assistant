import { type JoinOperator } from '../../../ConditionLine/types';
import { type MenuListProps } from '../../../MenuList';
import { type ButtonProps } from '../../../../design-system/Buttons/Button';
/**
 * Individual option for the join operator selector
 */
export type JoinSelectorOption = {
    /** Display text for the option */
    label: string;
    /** Join operator value */
    value: JoinOperator;
};
/** Slot props for the join selector */
export type JoinSelectorSlotProps = {
    /** Slot props for the menu list */
    menuList?: Partial<MenuListProps>;
    /** Slot props for the button */
    button?: Partial<ButtonProps>;
};
/**
 * Props for the JoinSelector component
 */
export type JoinSelectorProps = {
    /** Disables the join selector */
    disabled?: boolean;
    /** Custom title to display in the button */
    title?: string;
    /** Currently selected join operator */
    value: JoinOperator;
    /** Function called when selection changes */
    onChange: (value: JoinSelectorOption) => void;
    /** Available options to select from */
    options: JoinSelectorOption[];
    /** Read only mode */
    readOnly?: boolean;
    /** Slot props for the join selector */
    slotProps?: JoinSelectorSlotProps;
};
