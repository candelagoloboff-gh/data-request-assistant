import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, IconButton, Stack } from '@mui/material';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { times } from 'lodash';
import MenuList from '../../../../../composed-components/MenuList';
export const PaginationItem = ({ page, type, selected, disabled = false, items, onChange, ...item }) => {
    const { t } = useTranslation('material_hu_only');
    let children = null;
    if (type.includes('ellipsis')) {
        const currentItemIndex = items.findIndex(_item => _item.type === type);
        const previousItem = items[currentItemIndex - 1];
        const nextItem = items[currentItemIndex + 1];
        const previousItemPage = previousItem?.page ?? 0;
        const nextItemPage = nextItem?.page ?? 0;
        const ellipsedPagesCount = nextItemPage - previousItemPage - 1;
        const options = times(ellipsedPagesCount, (index) => {
            const itemPage = previousItemPage + index + 1;
            return {
                title: `${itemPage}`,
                onClick: (e) => {
                    onChange?.(e, itemPage);
                },
            };
        });
        children = (_jsx(MenuList, { options: options, minWidth: '72px', customButton: _jsx(Button, { ...item, variant: "tertiary", disabled: true, size: "small", sx: {
                    minWidth: '36px',
                }, "aria-label": t('hu_inputs.show_more_pages'), children: '...' }) }));
    }
    if (type === 'page') {
        children = (_jsx(Button, { ...item, variant: selected ? 'secondary' : 'tertiary', size: "small", disabled: disabled, sx: {
                minWidth: '36px',
            }, children: page }));
    }
    if (type === 'previous') {
        children = (_jsx(IconButton, { ...item, "aria-label": t('hu_inputs.previous'), size: "small", disabled: disabled, children: _jsx(IconChevronLeft, {}) }));
    }
    if (type === 'next') {
        children = (_jsx(IconButton, { ...item, "aria-label": t('hu_inputs.next'), size: "small", disabled: disabled, children: _jsx(IconChevronRight, {}) }));
    }
    return (_jsx(Stack, { component: "li", sx: { listStyle: 'none' }, children: children }));
};
export default PaginationItem;
