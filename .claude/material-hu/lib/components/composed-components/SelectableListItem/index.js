import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import CheckboxBase from '../../design-system/Checkbox/CheckboxBase';
import ListItemButton from '@mui/material/ListItemButton';
import { appearFromBottom } from '../../../utils/animations';
const SelectableListItem = memo(({ children, disabled, id, indeterminate, onSelect, selected, showCheckbox = true, sx, ...props }) => {
    const handleSelect = useCallback(() => {
        onSelect(id);
    }, [onSelect, id]);
    return (_jsxs(ListItemButton, { ...props, disabled: disabled, onClick: handleSelect, selected: selected, sx: {
            py: 0,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1.25,
            animation: `${appearFromBottom} 125ms ease-in-out backwards`,
            transition: 'background-color 125ms ease-in-out, opacity 125ms ease-in-out',
            '&.Mui-selected': {
                '&:hover,&:focus-visible': {
                    backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                },
                backgroundColor: 'transparent',
            },
            '&:hover,&:focus-visible': {
                backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
            },
            ...sx,
        }, children: [showCheckbox && (_jsx(CheckboxBase, { checked: selected || false, indeterminate: indeterminate, tabIndex: -1 })), children] }));
});
SelectableListItem.displayName = 'SelectableListItem';
export default SelectableListItem;
