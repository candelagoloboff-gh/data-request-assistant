import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import FormCheckbox from '../../design-system/Checkbox/Checkbox/form';
import Chips from '../../design-system/Chip';
import FormSearch from '../../design-system/Inputs/Search/form';
import MenuItem from '../../design-system/Menu/components/MenuItem';
import Title from '../../design-system/Title';
import { useTheme } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
export const CheckboxAutocomplete = ({ name, label, options, disabled = false, uncheckedDisabled = false, searchLoading = false, searchDisabled = false, searchEmpty = false, searchLoadingTitle, searchEmptyTitle, helperText, }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [containerEl, setContainerEl] = useState(null);
    const showMenu = !searchDisabled && Boolean(anchorEl);
    const { palette } = useTheme();
    const { setValue, control } = useFormContext();
    const selected = useWatch({ name, control });
    useEffect(() => {
        if (searchDisabled)
            setAnchorEl(null);
    }, [searchDisabled]);
    const handleSearchFocus = () => {
        const container = document.querySelector('#checkbox-autocomplete-search-input');
        const input = document.querySelector('#checkbox-autocomplete-search-input .MuiInputBase-root');
        setAnchorEl(input);
        setContainerEl(container);
    };
    const isChecked = (option) => {
        if (!selected || !option)
            return false;
        return option.checked || selected.some(v => v.id === option.id);
    };
    const isDisabled = (option) => {
        if (!option)
            return false;
        return option.disabled || (uncheckedDisabled && !isChecked(option));
    };
    const handleDelete = (option) => setValue(name, selected.filter(v => v.id !== option.id));
    const handleAdd = (option) => setValue(name, [...selected, { ...option, checked: true }]);
    const handleToggle = (option) => isChecked(option) ? handleDelete(option) : handleAdd(option);
    const handleClickAway = (event) => {
        if (anchorEl?.contains(event.target))
            return;
        setAnchorEl(null);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Escape' || event.key === 'Tab') {
            setAnchorEl(null);
        }
    };
    const isMenuOverflow = (height) => {
        if (!containerEl || !height)
            return false;
        const menuTop = containerEl.offsetHeight + containerEl.offsetTop;
        const menuBottom = menuTop + height;
        const parentEl = containerEl.offsetParent;
        const parentHeight = parentEl.offsetHeight;
        return menuBottom > parentHeight;
    };
    const getMenuHeight = () => {
        const itemHeight = 75.6;
        const maxHeight = itemHeight * 5;
        const minHeight = itemHeight * 3;
        return !isMenuOverflow(maxHeight) ? maxHeight : minHeight;
    };
    return (_jsxs(Stack, { onKeyDown: handleKeyDown, sx: {
            gap: 2,
            p: 2,
            borderRadius: 2,
            backgroundColor: palette.hugoBackground?.neutralBg,
        }, children: [_jsx(Stack, { id: "checkbox-autocomplete-search-input", children: _jsx(FormSearch, { name: "search", inputProps: {
                        disabled: searchDisabled,
                        loading: searchLoading,
                        label,
                        helperText,
                        autoFocus: true,
                        onFocus: handleSearchFocus,
                    } }) }), _jsx(Popper, { open: showMenu, anchorEl: anchorEl, modifiers: [
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            altAxis: true,
                            altBoundary: true,
                            padding: 8,
                        },
                    },
                ], sx: {
                    zIndex: 2000,
                    width: anchorEl?.clientWidth,
                    maxHeight: getMenuHeight(),
                }, children: _jsx(ClickAwayListener, { onClickAway: handleClickAway, children: _jsxs(Paper, { sx: {
                            maxHeight: getMenuHeight(),
                            overflow: 'auto',
                        }, children: [(searchLoading || searchEmpty) && (_jsxs(Stack, { sx: { p: 2 }, children: [searchLoading && (_jsx(Title, { variant: "S", title: searchLoadingTitle })), searchEmpty && (_jsx(Title, { variant: "S", title: searchEmptyTitle }))] })), options?.map(option => (_jsxs(MenuItem, { onClick: () => handleToggle(option), disabled: isDisabled(option), sx: {
                                    '&.Mui-disabled': {
                                        opacity: 'unset',
                                    },
                                }, children: [_jsx(FormCheckbox, { name: `options.${name}.${option.id}`, checkBoxProps: {
                                            label: option.label,
                                            description: option.description,
                                            checked: isChecked(option),
                                            disabled: isDisabled(option),
                                        } }), _jsx(Typography, { variant: "globalXS", sx: {
                                            alignSelf: 'flex-start',
                                            ml: 'auto',
                                            color: palette.textColors?.neutralTextDisabled,
                                        }, children: option.info })] }, option.id)))] }) }) }), _jsx(Stack, { sx: {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                }, children: selected.map(option => (_jsx(Chips, { label: option.label, onDelete: () => handleDelete(option), disabled: disabled }, option.id))) })] }));
};
export default CheckboxAutocomplete;
