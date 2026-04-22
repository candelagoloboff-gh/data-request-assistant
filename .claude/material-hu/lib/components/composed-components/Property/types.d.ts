import { type ReactNode } from 'react';
import { type TablerIcon } from '@tabler/icons-react';
export type PropertyProps = {
    /** Icon to show */
    Icon?: TablerIcon;
    /** Title of the property */
    title?: string;
    /** Description of the property */
    description?: ReactNode;
    /** Typography variant */
    variant?: 'XL' | 'L' | 'M' | 'S' | 'XS';
    /** Whether the property is shown */
    visible?: boolean;
    /** Whether the property is in a loading state */
    loading?: boolean;
};
export type PropertySkeletonProps = Required<Pick<PropertyProps, 'variant'>>;
