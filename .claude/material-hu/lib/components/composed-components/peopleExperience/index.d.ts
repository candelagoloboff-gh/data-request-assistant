export { default as PxDropdownList } from './DropdownList';
export { default as PxEmptyState } from './EmptyState';
export { EmptyStateProps as PxEmptyStateProps, EmptyStateVariant as PxEmptyStateVariant, } from './EmptyState/types';
export { default as PxHeatmap } from './Heatmap';
export { default as PxScaleQuestionChart } from './ScaleQuestionChart';
export { BaseDatum as PxScaleQuestionChartDatum } from './ScaleQuestionChart/types';
export { default as PxSegmentDropdown } from './SegmentDropdown';
export { default as PxTableRowSkeleton } from './TableRowSkeleton';
export declare const PeopleExperience: {
    DisplayGroup: <TData extends {
        id: import("react").Key;
    }>({ items, renderItem, }: {
        items: TData[];
        renderItem: (item: TData, index: number) => JSX.Element;
    }) => import("react/jsx-runtime").JSX.Element;
    DisplayGroupItem: import("@emotion/styled").StyledComponent<import("@mui/material").StackOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
    }, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/material").StackOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
        component?: React.ElementType;
    }, {}, {}>;
    ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
    ParticipationExpandableItem: ({ children, primary, secondary, slotProps, value, }: import("./Participation").ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;
    ParticipationItem: ({ primary, secondary, slotProps, value, }: import("./Participation").ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
    ValueIndicator: ({ value, label, loading, description, slotProps, }: {
        value: number | string;
        label: string;
        loading?: boolean;
        description?: string;
        slotProps?: Partial<{
            container: import("@mui/material").StackProps;
            description: Partial<import("@mui/material").TooltipProps>;
            value: Partial<import("@mui/material").TypographyProps & {
                endAdornment: import("react").ReactNode;
            }>;
            label: Partial<import("@mui/material").TypographyProps>;
        }>;
    }) => import("react/jsx-runtime").JSX.Element;
    ListWithDivider: ({ items, dividerProps, ...other }: import("@mui/material").ListOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
        ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
    }, "className" | "style" | "classes" | "children" | "sx" | "dense" | "disablePadding" | "subheader"> & {
        component?: React.ElementType;
    } & {
        items: import("react").ReactNode[];
        dividerProps?: import("@mui/material").DividerProps;
    }) => import("react/jsx-runtime").JSX.Element;
    ResultContainer: ({ title, children, subtitle, actions, sx, animateOnEnter, }: {
        title: string;
        subtitle?: string;
        children: import("react").ReactNode;
        actions?: import("react").ReactNode;
        sx?: import("@mui/material").StackProps["sx"];
        animateOnEnter?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    LinearProgressWithLabel: ({ linearProgressProps, value, ...other }: import("./LinearProgressWithLabel").LinearProgressWithLabelProps) => import("react/jsx-runtime").JSX.Element;
    ActionsMenu: ({ children, renderTrigger, closeOnSelect, onOpenChange, }: {
        children: import("react").ReactNode;
        renderTrigger: (props: {
            ariaProps: object;
            handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
            open: boolean;
        }) => JSX.Element;
        closeOnSelect?: boolean;
        onOpenChange?: (nextOpen: boolean) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    ActionsMenuItem: ({ onClick, sx, ...props }: import("@mui/material").MenuItemProps) => import("react/jsx-runtime").JSX.Element;
    SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, slotProps, }: {
        title: string;
        selectedIndex: number;
        onChangeIndex: (nextIndex: number) => void;
        tabs: import("./SideTabNavigation").Tab[];
        layout?: import("react").ComponentType<{
            children: import("react").ReactNode;
        }>;
        slotProps?: Partial<{
            tabs: import("@mui/material").StackProps;
            layout: {
                skipFilters?: boolean;
                skipComparisonFilter?: boolean;
            };
        }>;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanel: ({ children, value }: {
        children: import("react").ReactNode;
        value: number;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanelItem: ({ children, index, ...other }: import("./TabPanel").TabPanelItemProps) => import("react/jsx-runtime").JSX.Element;
};
export * as PxTypes from './types';
