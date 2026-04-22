import { type MenuItemProps } from '../../../../Menu/components/MenuItem/types';
export type TableMenuItemProps = TableMenuOption & {
    onClose: (event: React.MouseEvent<HTMLElement>) => void;
    onSubmenuOpen?: (closeFn: () => void) => void;
    onSubmenuClose?: (closeFn: () => void) => void;
};
export type TableMenuOption = MenuItemProps & {
    label: string;
    options?: Omit<TableMenuOption, 'options'>[];
};
export type TableMenuProps = {
    anchorRef: React.RefObject<HTMLDivElement>;
    open: boolean;
    onClose: (event: React.MouseEvent<HTMLElement>) => void;
    options: TableMenuOption[];
};
export type TableProps = {
    title: string;
};
