import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Stack, useTheme } from '@mui/material';
import { IconChevronUp } from '@tabler/icons-react';
import ListItem from '../../../../design-system/List/components/ListItem';
const SubSidebarCollapsableItem = ({ id, currentValue, handleClickItem, items, depth = 1, ...item }) => {
    const [open, setOpen] = useState(false);
    const { palette, shape, spacing } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const hasChildren = (items?.length ?? 0) > 0;
    const showChildren = hasChildren && open;
    const isSelected = item.value === currentValue;
    const isChildSelected = (children) => {
        if (!children || children.length === 0)
            return false;
        return children.some(child => child.value === currentValue || isChildSelected(child.items));
    };
    const handleToggleOpen = (event) => {
        event.stopPropagation();
        setOpen(!open);
    };
    const sideContent = hasChildren ? (_jsxs(Stack, { className: "side-content-container", sx: { position: 'relative' }, children: [_jsx(Stack, { className: "side-content", sx: { opacity: 1 }, children: item.sideContent }), _jsx(Stack, { className: "open-action", sx: { position: 'absolute', right: 0, top: 0, opacity: 0 }, children: _jsx(IconButton, { "aria-label": open ? t('sub_sidebar.close') : t('sub_sidebar.open'), onClick: handleToggleOpen, sx: {
                        p: 0,
                    }, children: _jsx(IconChevronUp, { style: {
                            transition: 'transform 0.2s ease-in-out',
                            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                        } }) }) })] })) : (item.sideContent);
    let stackBgColor;
    let textColor;
    if (isSelected && depth > 1) {
        stackBgColor = 'inherit';
        textColor = palette.new.text.neutral.brand;
    }
    else if (isSelected && depth === 1) {
        stackBgColor = palette.new.background.layout.default;
        textColor = palette.new.text.neutral.brand;
    }
    else if (isChildSelected(items)) {
        stackBgColor = palette.new.background.layout.default;
        textColor = palette.new.text.neutral.brand;
    }
    else if (open) {
        stackBgColor = palette.new.background.layout.default;
        textColor = palette.new.text.neutral.default;
    }
    return (_jsxs(Stack, { sx: {
            backgroundColor: stackBgColor,
            borderRadius: depth === 1 ? shape.borderRadiusL : undefined,
            overflow: 'hidden',
        }, children: [_jsx(ListItem, { ...item, id: id, onClick: handleClickItem(item.value, item.onClick), selected: isSelected, sideContent: sideContent, sx: {
                    ...item.sx,
                    backgroundColor: 'inherit',
                    color: textColor,
                    '& .MuiAvatar-root': {
                        color: textColor,
                        backgroundColor: 'inherit',
                    },
                    '& .MuiTypography-root': {
                        color: textColor,
                    },
                    '&:hover': {
                        ...(hasChildren && {
                            '& .side-content-container': {
                                width: '24px',
                                height: '24px',
                            },
                            '& .side-content-container > .side-content': {
                                opacity: 0,
                            },
                            '& .side-content-container > .open-action': {
                                opacity: 1,
                            },
                        }),
                    },
                    '& > .MuiButtonBase-root': {
                        pl: spacing(2 * depth),
                        borderRadius: depth === 1 ? shape.borderRadiusL : undefined,
                        borderBottomLeftRadius: showChildren ? 0 : undefined,
                        borderBottomRightRadius: showChildren ? 0 : undefined,
                    },
                } }), showChildren &&
                items?.map(child => (_createElement(SubSidebarCollapsableItem, { ...child, id: `${id}-item-${child.value}`, key: `${id}-item-${child.value}`, depth: depth + 1, currentValue: currentValue, handleClickItem: handleClickItem })))] }));
};
export default SubSidebarCollapsableItem;
