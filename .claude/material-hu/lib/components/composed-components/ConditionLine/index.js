import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuListItems from '../MenuListItems';
import Button from '../../design-system/Buttons/Button';
import Tooltip from '../../design-system/Tooltip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { IconX } from '@tabler/icons-react';
import JoinSelector from './components/JoinSelector';
const ConditionLine = ({ disabled, fieldSelectorItems, valueSelectorItems, value, errors, onDelete, onChange, slotProps, deleteTooltip, }) => {
    return (_jsxs(Stack, { sx: {
            gap: 2,
            flexDirection: 'row',
            alignItems: 'center',
            color: theme => theme.palette.new.text.neutral.brand,
        }, children: [_jsx(JoinSelector, { disabled: disabled, options: slotProps?.joinOperatorSelector?.options || [], value: value.joinOperator, onChange: _value => onChange?.({ ...value, joinOperator: _value.value }), ...slotProps?.joinOperatorSelector }), _jsx(MenuListItems, { disabled: disabled, items: fieldSelectorItems, maxSelection: 1, value: value.field ? [value.field] : [], onChange: _value => onChange?.({ ...value, field: _value[0] }), error: !!errors?.field?.message, errorText: errors?.field?.message, ...slotProps?.fieldSelector, sx: {
                    flex: 1,
                    transition: 'all 0.25s ease-in-out',
                    ...slotProps?.fieldSelector?.sx,
                } }), _jsx(Button, { variant: "tertiary", disabled: disabled, ...slotProps?.conditionOperatorSelector, sx: {
                    width: 'auto',
                    minWidth: '0',
                    px: 1,
                    transition: 'all 0.25s ease-in-out',
                    // TODO: Remove this when this is implemented.
                    pointerEvents: 'none',
                    ...slotProps?.conditionOperatorSelector?.sx,
                } }), _jsx(MenuListItems, { disabled: disabled || !valueSelectorItems?.length, value: value.value || [], onChange: _value => onChange?.({ ...value, value: _value }), items: valueSelectorItems, maxSelection: 50, error: !!errors?.field?.message, errorText: errors?.field?.message, ...slotProps?.valueSelector, sx: {
                    flex: 1,
                    transition: 'all 0.25s ease-in-out',
                    ...slotProps?.valueSelector?.sx,
                } }), _jsx(Tooltip, { title: deleteTooltip, disableTooltip: !deleteTooltip, children: _jsx("div", { children: _jsx(IconButton, { sx: { flex: 0 }, onClick: onDelete, disabled: disabled, ...slotProps?.deleteButton, children: _jsx(IconX, { size: 16 }) }) }) })] }));
};
export default ConditionLine;
