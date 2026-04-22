import { type MouseEvent } from 'react';
import { type StackProps } from '@mui/material';
import { type AvatarProps } from '../../design-system/Avatar/types';
import { type ListItemProps } from '../../design-system/List/components/ListItem/types';
export type SubSidebarValue = string | number;
export type ClickEvent = MouseEvent<HTMLDivElement | HTMLButtonElement>;
export type OnClick = (value: SubSidebarValue, event: ClickEvent) => void;
export type SubSidebarItemProps = Omit<ListItemProps, 'onClick'> & {
    onClick?: OnClick;
    value: SubSidebarValue;
    disabled?: boolean;
};
export type SubSidebarCollapsableItemProps = SubSidebarItemProps & {
    items?: SubSidebarCollapsableItem[];
    handleClickItem: HandleClickItem;
    currentValue?: SubSidebarValue;
    depth?: number;
};
export type SubSidebarCollapsableItem = Omit<SubSidebarCollapsableItemProps, 'handleClickItem' | 'currentValue' | 'depth'>;
export type SubSidebarSectionProps = {
    value: SubSidebarValue;
    title: string;
    avatar?: AvatarProps;
    items: SubSidebarCollapsableItem[];
    selected?: boolean;
};
export type SubSidebarAccortionSectionProps = {
    value: SubSidebarValue;
    title: string;
    avatar?: AvatarProps;
    items: SubSidebarItemProps[];
    selected?: boolean;
};
export type HandleClickItem = (newValue: SubSidebarValue, onClick?: OnClick) => (event: ClickEvent) => void;
export type SubSidebarInternalComponentsProps = Pick<SubSidebarProps, 'id' | 'accordionSections'> & {
    handleOpenAccordion: (value: SubSidebarValue) => void;
    handleClickItem: HandleClickItem;
    section: SubSidebarSectionProps;
    openAccordions: SubSidebarValue[];
};
export type SubSidebarProps = Pick<StackProps, 'id' | 'sx'> & {
    title?: string;
    sections?: SubSidebarSectionProps[];
    accordionSections?: SubSidebarAccortionSectionProps[];
    onChange?: OnClick;
    value?: SubSidebarValue;
    isCollapsed?: boolean;
    onCollapse?: () => void;
    isCollapsible?: boolean;
    isLoading?: boolean;
    defaultOpenAccordions?: number[];
};
