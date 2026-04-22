import { type MouseEvent } from 'react';
import { type MenuListProps } from '../../../MenuList/types';
import { type ListItemProps } from '../../../../design-system/List/components/ListItem';
import { type MenuItemProps } from '../../../../design-system/Menu/components/MenuItem';
export type MenuListOptionProps = MenuItemProps & {
    option: MenuListProps['options'][number];
    onClick: (e: MouseEvent<HTMLLIElement>) => void;
    onClose: () => void;
    minWidth?: string;
    menuId?: string;
    slotProps?: Partial<MenuItemProps> & {
        listItem?: Partial<ListItemProps>;
    };
};
