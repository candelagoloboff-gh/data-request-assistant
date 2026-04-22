export type SubSidebarCollapsibleHeaderProps = {
    isControlled: boolean;
    collapsed: boolean;
    setInternalCollapsed: (collapsed: boolean) => void;
    onCollapse?: () => void;
};
