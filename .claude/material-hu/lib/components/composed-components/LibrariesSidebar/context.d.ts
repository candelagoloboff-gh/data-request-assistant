import { type SidebarContextValue, type SidebarProviderProps } from './types';
export declare const SidebarContext: import("react").Context<SidebarContextValue | undefined>;
export declare const SidebarProvider: ({ items, children, onSort, onAddMouseEnter, }: SidebarProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useSidebarContext: () => SidebarContextValue;
