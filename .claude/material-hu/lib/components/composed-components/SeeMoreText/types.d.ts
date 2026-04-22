import { type ButtonProps, type TypographyProps } from '@mui/material';
export type SeeMoreTextProps = {
    seeMoreText?: string;
    seeLessText?: string;
    lines?: number;
    isHtmlText?: boolean;
    text: string;
    buttonSx?: ButtonProps['sx'];
    typographyProps?: TypographyProps;
};
