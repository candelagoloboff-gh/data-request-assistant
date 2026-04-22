import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import SelectableListItem from '../SelectableListItem';
import Button from '../../design-system/Buttons/Button';
import Search from '../../design-system/Inputs/Search';
import Menu from '../../design-system/Menu';
import Skeleton from '../../design-system/Skeleton';
import Tooltip from '../../design-system/Tooltip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { IconChevronDown, IconExclamationCircle } from '@tabler/icons-react';
import DefaultList from './components/DefaultList';
import { MENU_LIST_ITEMS_WIDTH } from './constants';
import { getTooltipTitle as defaultGetTooltipTitle, getTriggerTitle as defaultGetTriggerTitle, } from './utils';
const defaultRenderList = (props) => {
    return (_jsx(DefaultList, { items: props.items, selected: props.selected, maxSelection: props.maxSelection, onItemClick: props.onItemClick, disabled: props.disabled }));
};
const MenuListItems = ({ disabled, error, errorText, getTooltipTitle = defaultGetTooltipTitle, getTriggerTitle = defaultGetTriggerTitle, items, loading, maxSelection, onChange, renderList = defaultRenderList, showTooltip = true, slotProps, sx, title, value = [], showSelection: initialShowSelection = false, onSearchChange, }) => {
    const theme = useTheme();
    const [showSelection, setShowSelection] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const selected = useMemo(() => new Set(value.map(item => item.id)), [value]);
    const filteredItems = useMemo(() => {
        if (onSearchChange) {
            // If `onSearchChange` is provided, use it to filter the items
            return items?.filter(item => showSelection
                ? selected.has(item.id)
                : item.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        return (items?.filter(item => !showSelection
            ? item.name.toLowerCase().includes(searchValue.toLowerCase())
            : selected.has(item.id) &&
                item.name.toLowerCase().includes(searchValue.toLowerCase())) || []);
    }, [items, searchValue, showSelection, selected]);
    const selectedItems = useMemo(() => {
        return items.filter(item => selected.has(item.id));
    }, [items, selected]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSearchValue('');
    };
    const handleMenuItemClick = useCallback((optionId) => {
        if (optionId === 0) {
            setShowSelection(prev => !prev);
            return;
        }
        const newSet = new Set(selected);
        if (newSet.size === 1 && maxSelection && maxSelection === 1) {
            setOpen(false);
            const selectedItem = items.find(item => item.id === optionId);
            onChange?.(selectedItem ? [selectedItem] : []);
            return;
        }
        if (newSet.has(optionId)) {
            newSet.delete(optionId);
        }
        else {
            if (maxSelection && newSet.size >= maxSelection) {
                return;
            }
            newSet.add(optionId);
        }
        if (newSet.size === 0) {
            setShowSelection(false);
        }
        const newSelectedItems = Array.from(newSet)
            .map(id => items.find(item => item.id === id))
            .filter(Boolean);
        onChange?.(newSelectedItems);
        if (maxSelection && maxSelection === 1) {
            setOpen(false);
        }
    }, [maxSelection, items, onChange, selected]);
    const handleSearchChange = useCallback((newSeachValue) => {
        setSearchValue(newSeachValue);
        if (onSearchChange) {
            onSearchChange(newSeachValue);
        }
    }, [onSearchChange]);
    const tooltipTitle = useMemo(() => getTooltipTitle?.(selectedItems) || title, [selectedItems]);
    const triggerTitle = useMemo(() => getTriggerTitle(selectedItems), [selectedItems]);
    if (loading) {
        return (_jsx(Skeleton, { variant: "text", sx: { flex: 1 }, height: 58 }));
    }
    const TriggerTitleWrapper = showTooltip ? Tooltip : Fragment;
    const shouldShowSelection = items.length > 10 && initialShowSelection;
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            flex: 1,
            minWidth: '0',
            ...(disabled && {
                cursor: 'not-allowed !important',
            }),
            ...sx,
        }, children: [_jsx(Button, { ref: anchorRef, onClick: handleOpen, variant: "secondary", endIcon: _jsx(IconChevronDown, { size: 16 }), disabled: disabled, sx: {
                    flex: 1,
                    minWidth: '0',
                }, ...slotProps?.triggerButton, children: _jsx(TriggerTitleWrapper, { description: tooltipTitle, disableTooltip: !tooltipTitle, delay: 300, slotProps: {
                        popper: {
                            disablePortal: false,
                        },
                    }, ...slotProps?.triggerTooltip, children: _jsx(Stack, { sx: {
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            textAlign: 'start',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            maxWidth: '100%',
                        }, children: triggerTitle }) }) }), error && errorText && (_jsx(Tooltip, { description: errorText, disableTooltip: !errorText, direction: "top", children: _jsx(IconExclamationCircle, { color: theme.palette.new.text.feedback.error }) })), _jsxs(Menu, { open: open, onClose: handleClose, anchorEl: anchorRef.current, sx: {
                    width: MENU_LIST_ITEMS_WIDTH,
                    '& ul.MuiStack-root': {
                        overflowX: 'auto',
                    },
                    ...slotProps?.menu?.sx,
                }, ...slotProps?.menu, children: [_jsx(Stack, { sx: {
                            padding: 2,
                            backgroundColor: theme.palette.new.background.elements.default,
                            flex: 0,
                            position: 'sticky',
                            top: 0,
                            left: 0,
                            zIndex: 10,
                            borderTopLeftRadius: 2,
                            borderTopRightRadius: 2,
                        }, children: _jsx(Search, { onChange: handleSearchChange, value: searchValue, variant: "custom" }) }), shouldShowSelection && (_jsx(SelectableListItem, { id: "show-selection", selected: showSelection, onSelect: () => setShowSelection(prev => !prev), ...slotProps?.showSelection, sx: {
                            paddingY: 2,
                            backgroundColor: theme.palette.new.background.elements.default,
                            ...slotProps?.showSelection?.sx,
                        }, children: slotProps?.showSelection?.children || (_jsx(Typography, { variant: "globalS", sx: { fontWeight: 'fontWeightSemiBold' }, children: "Show Selection" })) })), renderList({
                        items: filteredItems,
                        selected,
                        maxSelection,
                        onItemClick: handleMenuItemClick,
                        showSelection,
                        disabled: Boolean(maxSelection && maxSelection > 1 && selected.size >= maxSelection),
                    })] })] }));
};
export default MenuListItems;
