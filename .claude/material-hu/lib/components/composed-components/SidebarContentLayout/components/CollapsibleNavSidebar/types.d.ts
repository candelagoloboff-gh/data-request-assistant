export type NavOption = {
    label: string;
    to: string;
};
export type CollapsibleNavSidebarProps = {
    buttonLabel: string;
    loading?: boolean;
    options: NavOption[];
};
