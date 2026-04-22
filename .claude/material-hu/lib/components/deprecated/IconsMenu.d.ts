import { type FC, type MouseEvent } from 'react';
import { type IconButtonProps, type SxProps } from '@mui/material';
export type Option = {
    onClick: () => void;
    label: string;
    icon?: React.ReactNode;
    divider?: boolean;
    textProps?: SxProps;
    color?: string;
    disabled?: boolean;
};
export type IconsMenuProps = {
    options: Option[];
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose?: (event: MouseEvent) => void;
    disabled?: boolean;
    arrow?: boolean;
    iconButtonProps?: IconButtonProps;
};
/**
 * @deprecated This component needs to be updated to Hugo
 */
export declare const IconsMenu: FC<IconsMenuProps>;
export default IconsMenu;
