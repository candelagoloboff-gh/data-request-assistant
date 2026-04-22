import { type MouseEvent } from 'react';
import { type TablerIcon } from '@tabler/icons-react';
export type ToolButtonProps = {
    label: string;
    Icon: TablerIcon;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};
