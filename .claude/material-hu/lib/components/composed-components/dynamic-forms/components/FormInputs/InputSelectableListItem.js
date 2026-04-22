import { jsx as _jsx } from "react/jsx-runtime";
import SelectionCard from '../../../SelectionCard';
import Checkbox from '../../../../design-system/Checkbox/Checkbox';
import RadioButton from '../../../../design-system/RadioButton/RadioButton';
const InputSelectableListItem = ({ option, isMultipleSelect, controller, disabled, fieldProps, }) => {
    const fieldValue = controller.field.value ?? (isMultipleSelect ? [] : null);
    const isSelected = isMultipleSelect
        ? fieldValue?.some(id => id === option.id) || false
        : fieldValue === option.id;
    const handleClickOption = (selectedOption) => {
        if (disabled)
            return;
        if (!isMultipleSelect)
            controller.field.onChange(selectedOption.id);
        else {
            const currentValues = fieldValue || [];
            const isSelectedOption = currentValues.some(id => id === selectedOption.id);
            const newValues = isSelectedOption
                ? currentValues.filter(id => id !== selectedOption.id)
                : [...currentValues, selectedOption.id];
            controller.field.onChange(newValues);
        }
    };
    // We do this because if the card is disabled there is no contrast and the selected option is not visible.
    const isCardDisabled = disabled && !isSelected;
    return (_jsx(SelectionCard, { sx: { width: '100%' }, checked: isSelected, disabled: isCardDisabled, "aria-disabled": isCardDisabled, onClick: () => handleClickOption(option), children: _jsx("span", { style: { pointerEvents: 'none' }, children: isMultipleSelect ? (_jsx(Checkbox, { checked: isSelected, disabled: disabled, label: option.label, ...fieldProps })) : (_jsx(RadioButton, { checked: isSelected, isActive: isSelected, disabled: disabled, ...fieldProps, label: option.label })) }) }, option.id));
};
export default InputSelectableListItem;
