import { type MouseEvent, type ReactElement } from 'react';
import { type ListItemProps } from '../../design-system/List/components/ListItem';
import { type MenuProps } from '../../design-system/Menu';
import { type MenuItemProps } from '../../design-system/Menu/components/MenuItem';
import { type IconButtonProps } from '@mui/material/IconButton';
import { type IconDotsVertical } from '@tabler/icons-react';
export type MenuListProps = Pick<IconButtonProps, 'variant' | 'size'> & {
    id?: string;
    'aria-label'?: string;
    Icon?: typeof IconDotsVertical;
    options: {
        Icon?: any;
        title: string;
        description?: string;
        onClick: (e?: MouseEvent<HTMLLIElement>) => void;
        disabled?: boolean;
        options?: MenuListProps['options'];
    }[];
    customButton?: ReactElement;
    disableMenu?: boolean;
    fixedDimensions?: boolean;
    position?: 'center' | 'left' | 'right' | 'top-right';
    minWidth?: string;
    onClose?: () => void;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    slotProps?: {
        button?: Partial<IconButtonProps>;
        menu?: Partial<MenuProps>;
        menuItem?: Partial<MenuItemProps> & {
            listItem?: Partial<ListItemProps>;
        };
    };
};
