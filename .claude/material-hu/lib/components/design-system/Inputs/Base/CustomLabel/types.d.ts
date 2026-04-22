import { type TooltipProps } from '../../../Tooltip/types';
import { type InputProps } from '../../Classic/types';
export type CustomLabelProps = Pick<InputProps, 'label' | 'success' | 'id'> & {
    labelTooltip?: string;
    slotProps?: {
        labelTooltip?: Omit<TooltipProps, 'title' | 'children'>;
    };
};
