import { type PropsWithChildren } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
export type SelectionCardProps = {
    onClick?: (param: boolean) => void;
    checked: boolean;
    disabled?: boolean;
} & Omit<CardContainerProps, 'onClick'>;
export type FormSelectionCardProps = Pick<SelectionCardProps, 'sx' | 'disabled'> & PropsWithChildren<{
    name: string;
    rules?: ControllerProps['rules'];
    isOnlyOption?: boolean;
}>;
