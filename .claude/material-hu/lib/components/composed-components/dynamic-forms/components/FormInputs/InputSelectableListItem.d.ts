import { type FieldValues, type UseControllerReturn } from 'react-hook-form';
import { type CheckboxProps } from '../../../../design-system/Checkbox/Checkbox';
import { type RadioButtonProps } from '../../../../design-system/RadioButton/RadioButton';
export type SelectableListItemOption = {
    id: number;
    label: string;
    value: string;
};
type InputSelectableListItemProps = {
    option: SelectableListItemOption;
    isMultipleSelect: boolean;
    controller: UseControllerReturn<FieldValues, string>;
    fieldProps?: RadioButtonProps | CheckboxProps;
    disabled?: boolean;
};
declare const InputSelectableListItem: ({ option, isMultipleSelect, controller, disabled, fieldProps, }: InputSelectableListItemProps) => import("react/jsx-runtime").JSX.Element;
export default InputSelectableListItem;
