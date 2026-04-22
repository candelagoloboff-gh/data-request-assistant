import { type SummaryCardProps } from '../../audience/SummaryCard/types';
/**
 * Props for the IndividualSummaryCard component.
 * Inherits `onEdit`, `onDelete` and `description` from {@link SummaryCardProps}.
 */
export type IndividualSummaryCardProps = Pick<SummaryCardProps, 'onEdit' | 'onDelete' | 'description'>;
