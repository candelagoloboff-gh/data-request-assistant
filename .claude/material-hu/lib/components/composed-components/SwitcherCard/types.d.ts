import { type ControllerProps } from 'react-hook-form';
import { type CollapseProps } from '@mui/material';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
import { type SwitcherProps } from '../../design-system/Switcher/types';
import { type TitleProps } from '../../design-system/Title/types';
import { type TooltipProps } from '../../design-system/Tooltip/types';
export type SwitcherCardProps = {
    children: React.ReactNode;
    onContentToggle?: (isOpen?: boolean) => void;
    disabled?: boolean;
    slotProps?: {
        root?: Partial<CardContainerProps>;
        title?: Partial<TitleProps>;
        switcher?: Partial<SwitcherProps>;
        tooltip?: Partial<TooltipProps>;
        collapse?: Partial<CollapseProps>;
    };
    sx?: CardContainerProps['sx'];
    open?: boolean;
};
export type FormSwitcherCardProps = {
    name: string;
    children: React.ReactNode;
    switcherCardProps: Partial<SwitcherCardProps>;
    rules?: ControllerProps['rules'];
};
