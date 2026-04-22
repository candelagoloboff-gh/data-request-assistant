import { type ReactElement } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type StackProps, type TypographyProps } from '@mui/material';
import { type TooltipProps } from '../Tooltip/types';
export type SwitcherProps = {
    /** Label displayed next to the switch */
    title?: string;
    /** Typography props applied to the title */
    titleProps?: TypographyProps;
    /** Secondary text shown below the title */
    description?: string;
    /** Typography props applied to the description */
    descriptionProps?: TypographyProps;
    /** Prevents user interaction with the switcher */
    disabled?: boolean;
    /** Current on/off state of the switch */
    value: boolean;
    /** Callback fired when the switch state changes */
    onChange: (value: boolean) => void;
    /** Icon element rendered alongside the switch */
    Icon?: ReactElement;
    /** Custom styles applied to the root element */
    sx?: StackProps['sx'];
    /** Tooltip shown when the switcher is disabled */
    disabledTooltip?: Omit<TooltipProps, 'children'>;
};
export type FormSwitcherProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Switcher component */
    switcherProps: Omit<SwitcherProps, 'value' | 'onChange'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
