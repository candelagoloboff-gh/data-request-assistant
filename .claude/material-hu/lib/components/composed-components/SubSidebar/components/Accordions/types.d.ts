import { type HandleClickItem, type SubSidebarProps } from '../../types';
export type SubSidebarAccordionsProps = Pick<SubSidebarProps, 'isLoading' | 'id' | 'accordionSections' | 'isCollapsed' | 'defaultOpenAccordions'> & {
    handleClickItem: HandleClickItem;
};
