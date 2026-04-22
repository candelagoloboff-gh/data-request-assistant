import { type TablerIcon } from '@tabler/icons-react';
export type CategoryProps = {
    label: string;
    Icon: TablerIcon;
    selected: boolean;
    onClick: () => void;
};
