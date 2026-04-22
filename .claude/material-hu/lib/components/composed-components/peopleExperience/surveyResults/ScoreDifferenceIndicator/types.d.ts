import { type ScoreDifferencePopoverProps } from '../ScoreDifferencePopover/types';
export type ScoreDifferenceIndicatorProps = {
    difference: number;
    popoverMeta: Pick<ScoreDifferencePopoverProps, 'score' | 'baseScore' | 'scorePostFix' | 'scoreLabel' | 'baseScoreLabel' | 'footerLabel' | 'scoreDifferenceDescription'>;
    slotProps?: Partial<{
        popover: Pick<ScoreDifferencePopoverProps, 'anchorOrigin' | 'transformOrigin'>;
    }>;
};
