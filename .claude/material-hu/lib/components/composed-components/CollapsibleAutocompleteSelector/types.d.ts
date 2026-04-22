import { type ReactNode } from 'react';
import { type SxProps, type Theme } from '@mui/material';
/**
 * Generic option type used for display purposes
 */
export type FieldOption = {
    value: string | number;
    name: string;
};
/**
 * Minimal interface for paginated API response
 * Compatible with common pagination patterns (e.g., axios responses)
 */
export type PaginatedPage<T = unknown> = {
    data: {
        items: T[];
        count?: number;
        total?: number;
    };
};
/**
 * Minimal interface for infinite query results
 * Compatible with react-query's UseInfiniteQueryResult without importing it directly
 */
export type InfiniteQueryResult<T = unknown> = {
    data?: {
        pages?: PaginatedPage<T>[];
    };
    isLoading: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    hasNextPage?: boolean;
    isPreviousData?: boolean;
};
/**
 * Parameters passed to the infinite query function
 */
export type InfiniteQueryParams = {
    limit: number;
    name: string;
};
/**
 * Options passed to the infinite query function
 * Compatible with react-query options
 */
export type InfiniteQueryOptions = {
    keepPreviousData?: boolean;
    enabled?: boolean;
};
/**
 * Type for the infinite query hook function
 */
export type InfiniteQueryFn<T = unknown> = (params: InfiniteQueryParams, options?: InfiniteQueryOptions) => InfiniteQueryResult<T>;
export type CollapsibleAutocompleteSelectorProps<T = unknown> = {
    /**
     * The infinite query hook that fetches paginated data.
     * Should return a result compatible with react-query's UseInfiniteQueryResult.
     */
    infiniteQuery: InfiniteQueryFn<T>;
    /**
     * Title displayed in the accordion header
     */
    sectionTitle: string;
    /**
     * Message displayed when there are no options available (and no search is active)
     */
    lackingOptionsMessage: string;
    /**
     * Whether the accordion is expanded (controlled mode).
     * When provided, the component is in controlled mode and `setExpanded` should be used to handle state changes.
     */
    isExpanded?: boolean;
    /**
     * Callback when expansion state changes.
     * Required when using controlled mode (`isExpanded` is provided).
     */
    setExpanded?: (expanded: boolean) => void;
    /**
     * Default expanded state for uncontrolled mode.
     * Only used when `isExpanded` prop is not provided.
     * Defaults to false.
     */
    defaultExpanded?: boolean;
    /**
     * Number of items per page. Defaults to 7.
     */
    paginationLimit?: number;
    /**
     * Custom mapper to convert raw API items to FieldOption for display.
     * Defaults to { value: item.id, name: item.name }
     */
    customMapper?: (data: T) => FieldOption;
    /**
     * Only show the options list when there's an active search query.
     * Defaults to false.
     */
    showOnlyOnSearch?: boolean;
    /**
     * Function to extract unique identifier from a raw item.
     * Defaults to (item) => item.id
     */
    getItemId?: (item: T) => string | number;
    /**
     * Custom styles for the root Accordion component
     */
    sx?: SxProps<Theme>;
    /**
     * Custom content to render inside the accordion instead of the default checkboxes.
     * When provided, it receives all the internal state and handlers.
     */
    renderContent?: (params: RenderContentParams<T>) => ReactNode;
    /**
     * Text for "Select all" checkbox.
     */
    selectAllLabel: string;
    /**
     * Text for "No results found".
     */
    noResultsLabel: string;
    /**
     * Function to format "and N more" text.
     * Receives the count of remaining items.
     */
    formatAndMore: (count: number) => string;
    /**
     * Whether to show the "Select all" checkbox. Defaults to true.
     */
    withSelectAll?: boolean;
    /**
     * Maximum height of the scrollable options container. Defaults to 150.
     */
    maxHeight?: number;
    /**
     * Maximum number of items that can be selected.
     * When reached, unselected items will be disabled.
     */
    selectionLimit?: number;
    /**
     * Whether to use virtualization for the list. Defaults to true.
     * Uses react-window for better performance with large lists.
     */
    virtualized?: boolean;
    /**
     * Height of each row in the virtualized list. Defaults to 48.
     */
    rowHeight?: number;
    /**
     * Height of the virtualized list container. Defaults to 300.
     */
    listHeight?: number;
    /**
     * Custom renderer for list item content.
     * Receives the raw item and its mapped display option.
     * Defaults to showing the display option name.
     */
    itemRenderer?: (item: T, displayOption: FieldOption) => ReactNode;
} & ({
    /**
     * Form field name when using react-hook-form integration.
     * When provided, the component will use useFormContext to read/write values.
     */
    fieldName: string;
    value?: never;
    onChange?: never;
} | {
    /**
     * Controlled mode: current selected items
     */
    value: T[];
    /**
     * Controlled mode: callback when selection changes
     */
    onChange: (items: T[]) => void;
    fieldName?: never;
});
/**
 * Parameters passed to custom render function
 */
export type RenderContentParams<T = unknown> = {
    /** Raw items from the API (not mapped) */
    rawItems: T[];
    /** Mapped items for display */
    displayItems: FieldOption[];
    /** Currently selected items */
    selectedItems: T[];
    /** Check if a specific item is selected */
    isItemSelected: (item: T) => boolean;
    /** Toggle selection of an item */
    handleOptionCheck: (item: T) => void;
    /** Select/deselect all currently visible items */
    handleSelectAll: () => void;
    /** Whether all visible items are selected */
    allSelected: boolean;
    /** Whether some (but not all) visible items are selected */
    someSelected: boolean;
    /** Current search query */
    search: string;
    /** Set search query */
    setSearch: (value: string) => void;
    /** Loading state */
    isLoading: boolean;
    /** Fetching next page state */
    isFetchingNextPage: boolean;
    /** Whether there are more pages to fetch */
    hasNextPage: boolean;
    /** Function to fetch the next page */
    fetchNextPage: () => void;
    /** Maximum number of items that can be selected */
    selectionLimit?: number;
};
