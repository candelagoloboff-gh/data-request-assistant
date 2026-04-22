import { type AvatarProps } from '../../design-system/Avatar';
import { type CardContainerProps } from '../../design-system/CardContainer';
import { type PillsProps } from '../../design-system/Pills';
import { type SwitcherProps } from '../../design-system/Switcher';
import { type TitleProps } from '../../design-system/Title';
import { type IconButtonProps } from '@mui/material/IconButton';
import { type TablerIcon } from '@tabler/icons-react';
export type AvatarSwitcherCardProps = {
    checked?: boolean;
    sx?: CardContainerProps['sx'];
    title: string;
    description: string;
    icon: TablerIcon;
    onChange: (checked: boolean) => void;
    pills?: PillsProps[];
    actions?: IconButtonProps[];
    slotProps?: {
        root?: Partial<CardContainerProps>;
        title?: Partial<TitleProps>;
        avatar?: Partial<AvatarProps>;
        switcher?: Partial<SwitcherProps>;
    };
};
