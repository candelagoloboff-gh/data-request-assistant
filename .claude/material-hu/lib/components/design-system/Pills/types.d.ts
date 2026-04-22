import { type ChipProps, type TypographyProps } from '@mui/material';
export type PillsProps = ChipProps & {
    /** Additional styles applied to the inner label Typography */
    typographySx?: TypographyProps['sx'];
    /** Text content of the pill */
    label: string;
    /** Semantic color variant that controls background, border, and text color */
    type?: 'error' | 'success' | 'warning' | 'info' | 'highlight' | 'neutral' | 'disabled';
    /** Visual size of the pill */
    size?: 'small' | 'medium';
    /** Whether to render the default status icon for the current type */
    hasIcon?: boolean;
    /** Custom icon component to render instead of the default type icon */
    customIcon?: React.ElementType;
};
export type PillTypeProps = {
    /** Background fill color for this pill variant */
    backgroundColor: string;
    /** Border color for this pill variant */
    borderColor: string;
    /** Text color for this pill variant */
    fontColor: string;
    /** Optional icon component associated with this pill variant */
    icon?: React.ElementType;
};
