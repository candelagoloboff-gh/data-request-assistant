import { jsx as _jsx } from "react/jsx-runtime";
import { JoinOperator } from '../../../ConditionLine/types';
import MenuList from '../../../MenuList';
import Button from '../../../../design-system/Buttons/Button';
import { IconChevronDown } from '@tabler/icons-react';
const JoinSelector = ({ disabled, title, options, value = JoinOperator.AND, readOnly, onChange, slotProps, }) => {
    const mappedOptions = options.map(option => ({
        title: option.label,
        value: option.value,
        onClick: () => onChange(option),
    }));
    const selectedOption = mappedOptions.find(option => option.value === value);
    return (_jsx(MenuList, { disableMenu: disabled || readOnly, options: mappedOptions, ...slotProps?.menuList, customButton: _jsx(Button, { variant: readOnly ? 'tertiary' : 'secondary', endIcon: readOnly ? undefined : _jsx(IconChevronDown, { size: 16 }), ...slotProps?.button, sx: {
                minWidth: '0',
                ...(readOnly && {
                    '&:disabled': {
                        color: theme => theme.palette.new.text.neutral.brand,
                    },
                }),
                ...slotProps?.button?.sx,
            }, children: title || selectedOption?.title }) }));
};
export default JoinSelector;
