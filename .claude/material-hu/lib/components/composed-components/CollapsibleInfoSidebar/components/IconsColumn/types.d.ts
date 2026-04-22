import { type CollapsibleInfoSidebarItem, type CollapsibleInfoSidebarPosition } from '../../types';
export type IconsColumnProps = {
    items: CollapsibleInfoSidebarItem[];
    expandedIndex: number | null;
    onItemClick: (index: number) => void;
    position: CollapsibleInfoSidebarPosition;
};
