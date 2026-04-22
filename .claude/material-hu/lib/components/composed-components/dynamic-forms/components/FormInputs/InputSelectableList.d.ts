import { type CheckboxProps } from '../../../../design-system/Checkbox/Checkbox';
import { type RadioButtonProps } from '../../../../design-system/RadioButton/RadioButton';
import { type SelectableListItemOption } from './InputSelectableListItem';
type InputSelectableListProps = {
    name: string;
    options: SelectableListItemOption[];
    disabled?: boolean;
    isMultipleSelect: boolean;
    fieldProps?: RadioButtonProps | CheckboxProps;
};
declare const InputSelectableList: ({ isMultipleSelect, options, disabled, name, fieldProps, }: InputSelectableListProps) => import("react/jsx-runtime").JSX.Element;
export default InputSelectableList;
