import { type ReactNode } from 'react';
import { type CardContainerProps } from '../../../../../design-system/CardContainer/types';
export type EnpsTotalProps = {
    title: ReactNode;
    description: ReactNode;
    value: number | null;
    nullValueTooltip?: string;
    footer?: ReactNode;
    slotProps?: {
        root?: CardContainerProps;
    };
};
