import { type SummaryCardProps } from '../../audience/SummaryCard/types';
/**
 * Props for the AllSummaryCard component.
 * Inherits `onEdit` and `onDelete` from {@link SummaryCardProps}.
 */
export type AllSummaryCardProps = Pick<SummaryCardProps, 'onEdit' | 'onDelete'>;
