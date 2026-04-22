import { jsx as _jsx } from "react/jsx-runtime";
import MenuList from '../../../MenuList';
import ListItem from '../../../../design-system/List/components/ListItem';
import MenuItem from '../../../../design-system/Menu/components/MenuItem';
import { IconChevronRight } from '@tabler/icons-react';
const MenuListOption = ({ option, onClick, onClose, minWidth, menuId, slotProps, ...rest }) => {
    if (option?.options) {
        return (_jsx(MenuList, { options: option.options, minWidth: minWidth, onClose: () => {
                onClose?.();
            }, id: `${menuId}-sub-menu-${option.title}`, position: "top-right", customButton: _jsx(ListItem, { component: "div", text: {
                    title: option.title,
                    description: option?.description,
                }, onClick: () => undefined, sx: {
                    '.MuiListItem-root': { p: 0 },
                    justifyContent: 'center',
                    ...(minWidth && { minWidth }),
                    minHeight: 0,
                    '.MuiIconButton-root': {
                        ml: 2,
                        p: 0,
                    },
                }, avatar: option.Icon && { Icon: option.Icon }, action: { Icon: IconChevronRight, disabled: true }, ...slotProps?.listItem }) }));
    }
    return (_jsx(MenuItem, { onClick: onClick, disabled: option.disabled, ...rest, children: _jsx(ListItem, { component: "div", text: {
                title: option.title,
                description: option?.description,
            }, sx: {
                '.MuiListItem-root': { p: 0 },
                justifyContent: 'center',
                ...(minWidth && { minWidth }),
                minHeight: 0,
            }, avatar: option.Icon && { Icon: option.Icon }, ...slotProps?.listItem }) }, option.title));
};
export default MenuListOption;
