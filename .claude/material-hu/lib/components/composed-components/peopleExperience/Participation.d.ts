import { type ReactNode } from 'react';
import { type StackProps } from '@mui/material';
export declare const ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
type MiscProps = StackProps & {
    noDataMessage?: ReactNode;
    label: string;
    isEmpty?: boolean;
    value: number;
};
export type ParticipationItemProps = {
    primary: string;
    secondary?: string | null;
    value: MiscProps['value'];
    slotProps: {
        misc: Omit<MiscProps, 'value'>;
    };
};
export declare const ParticipationItem: ({ primary, secondary, slotProps, value, }: ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
export type ParticipationExpandableItemProps = ParticipationItemProps & {
    children: (expandable: boolean) => ReactNode;
};
export declare const ParticipationExpandableItem: ({ children, primary, secondary, slotProps, value, }: ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
