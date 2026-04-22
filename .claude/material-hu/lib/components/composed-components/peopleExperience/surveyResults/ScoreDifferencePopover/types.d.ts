import { type ReactElement } from 'react';
import { type PopoverProps } from '@mui/material';
export type ScoreDifferencePopoverProps = Pick<PopoverProps, 'anchorOrigin' | 'transformOrigin'> & {
    children: ReactElement;
    scorePostFix?: string;
    scoreLabel?: string;
    baseScoreLabel?: string;
    footerLabel?: string;
    scoreDifferenceDescription: React.ReactNode;
    score: number;
    baseScore: number;
};
