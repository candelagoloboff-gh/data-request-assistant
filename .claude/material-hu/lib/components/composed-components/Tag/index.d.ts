import { type FC } from 'react';
import { type TablerIcon } from '@tabler/icons-react';
import { TagColorVariant } from './types';
type Props = {
    label: string;
    onDelete?: () => void;
    onClick?: () => void;
    Icon?: TablerIcon;
    variant?: TagColorVariant;
    maxWidth?: string | number;
};
declare const Tag: FC<Props>;
export default Tag;
