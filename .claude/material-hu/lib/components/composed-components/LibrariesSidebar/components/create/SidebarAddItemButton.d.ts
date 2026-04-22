type SidebarAddItemButtonProps = {
    onAdd: () => void;
    onAddMouseEnter?: () => void;
    depth?: number;
    hasChildren?: boolean;
};
export declare const SidebarAddItemButton: ({ onAdd, onAddMouseEnter, depth, hasChildren, }: SidebarAddItemButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
