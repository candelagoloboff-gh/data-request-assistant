import { type CollapsibleInfoSidebarItem, type CollapsibleInfoSidebarPosition } from '../../types';
export type ExpandibleContentProps = {
    isExpanded: boolean;
    contentWidth: number;
    position: CollapsibleInfoSidebarPosition;
    activeItem: CollapsibleInfoSidebarItem | null;
    expandedIndex: number | null;
    alwaysExpanded: boolean;
    onCollapseClick: () => void;
};
