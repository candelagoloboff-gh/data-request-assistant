import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Dropdown from '../../design-system/Dropdown';
import List from '../../design-system/List';
import ListItem from '../../design-system/List/components/ListItem';
const DropdownList = ({ options, onChange, value, loading = false, disabled = false, }) => {
    const [open, setOpen] = useState(false);
    return (_jsx(Dropdown, { label: value.name, position: "left", open: open, onOpen: () => setOpen(true), onClose: () => setOpen(false), buttonProps: {
            size: 'small',
            disabled,
        }, children: _jsxs(List, { sx: { width: 300, maxHeight: 360 }, children: [options.map(item => (_jsx(ListItem, { onClick: () => {
                        onChange(item);
                        setOpen(false);
                    }, text: {
                        title: item.name,
                        description: item.description,
                    }, sx: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1,
                        cursor: 'pointer',
                        backgroundColor: theme => value.id === item.id
                            ? theme.palette.new.action.background.neutral.hover
                            : 'transparent',
                        '&:hover': {
                            backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                        },
                    } }, item.id))), loading && _jsx(ListItem, { loading: true })] }) }));
};
export default DropdownList;
