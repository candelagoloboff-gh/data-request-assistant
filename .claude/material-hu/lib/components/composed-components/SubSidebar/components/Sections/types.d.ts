import { type HandleClickItem, type SubSidebarSectionProps, type SubSidebarValue } from '../../types';
export type SubSidebarSectionsProps = {
    sections?: SubSidebarSectionProps[];
    id: string;
    value?: SubSidebarValue;
    handleClickItem: HandleClickItem;
};
