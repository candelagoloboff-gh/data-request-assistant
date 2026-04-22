import { type SxProps } from '@mui/material';
import { type TitleProps } from '../../../design-system/Title/types';
import { type SeeMoreTextProps } from '../../SeeMoreText/types';
export type TextInformationProps = {
    /** Text to show as copetin */
    copetin?: TitleProps['copetin'];
    /** Text to show as title */
    title?: TitleProps['title'];
    /** Text to show inside SeeMoreText */
    description?: SeeMoreTextProps['text'];
    /** Title variant - adjusts copetin and description */
    variant?: TitleProps['variant'];
    /** Whether the information is in a loading state */
    loading?: boolean;
    /** Component styles */
    sx?: SxProps;
    /** Props for inner components */
    slotProps?: {
        title?: Omit<TitleProps, 'copetin' | 'title' | 'variant'>;
        seeMoreText?: Omit<SeeMoreTextProps, 'text'>;
    };
};
export type TextInformationSkeletonProps = Pick<TextInformationProps, 'variant' | 'sx'>;
