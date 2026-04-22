import { type FC } from 'react';
import { type TooltipProps } from '../../design-system/Tooltip';
import { type TypographyProps } from '@mui/material/Typography/Typography';
type TypographyOverflowTooltipProps = {
    tooltipProps: Omit<TooltipProps, 'children'>;
    typographyProps?: TypographyProps;
    children: React.ReactNode;
};
declare const TypographyOverflowTooltip: FC<TypographyOverflowTooltipProps>;
export default TypographyOverflowTooltip;
