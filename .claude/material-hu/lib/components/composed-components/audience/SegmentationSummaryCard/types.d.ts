import { type SummaryCardProps } from '../../audience/SummaryCard/types';
/**
 * Props for the SegmentationSummaryCard component.
 * Inherits `onEdit`, `onDelete` and `description` from {@link SummaryCardProps}.
 */
export type SegmentationSummaryCardProps = Pick<SummaryCardProps, 'onEdit' | 'onDelete' | 'description'>;
