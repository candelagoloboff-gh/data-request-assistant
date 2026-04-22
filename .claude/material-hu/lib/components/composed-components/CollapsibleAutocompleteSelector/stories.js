import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CollapsibleAutocompleteSelector from '.';
// Sample data
const mockCategories = [
    { id: 1, name: 'Technology', description: 'Tech related items' },
    { id: 2, name: 'Marketing', description: 'Marketing campaigns' },
    { id: 3, name: 'Human Resources', description: 'HR department' },
    { id: 4, name: 'Finance', description: 'Financial matters' },
    { id: 5, name: 'Engineering', description: 'Engineering team' },
    { id: 6, name: 'Design', description: 'Design and UX' },
    { id: 7, name: 'Sales', description: 'Sales department' },
    { id: 8, name: 'Operations', description: 'Operations management' },
    {
        id: 9,
        name: 'Customer Support with a very long name to test the ellipsis feature that is required',
        description: 'Support team',
    },
    { id: 10, name: 'Legal', description: 'Legal affairs' },
    { id: 11, name: 'Product', description: 'Product management' },
    { id: 12, name: 'Quality Assurance', description: 'QA team' },
    { id: 13, name: 'Research & Development', description: 'R&D department' },
    { id: 14, name: 'Data Science', description: 'Data analytics' },
    { id: 15, name: 'Security', description: 'Information security' },
    { id: 16, name: 'Compliance', description: 'Regulatory compliance' },
    { id: 17, name: 'Training', description: 'Employee training' },
    { id: 18, name: 'Facilities', description: 'Office management' },
    { id: 19, name: 'Procurement', description: 'Purchasing department' },
    {
        id: 20,
        name: 'Communications with a very long name to test the ellipsis feature that is required',
        description: 'Internal communications',
    },
];
// Simple mock for basic stories (no pagination)
const createSimpleMockQuery = (items) => {
    return (params) => {
        const filtered = params.name
            ? items.filter(item => item.name.toLowerCase().includes(params.name.toLowerCase()))
            : items;
        const paginated = filtered.slice(0, params.limit);
        return {
            data: {
                pages: [
                    {
                        data: {
                            items: paginated,
                            count: paginated.length,
                            total: filtered.length,
                        },
                    },
                ],
            },
            isLoading: false,
            fetchNextPage: () => { },
            isFetchingNextPage: false,
            hasNextPage: filtered.length > params.limit,
            isPreviousData: false,
        };
    };
};
// Hook-based infinite query with real pagination support
const useInfiniteQueryMock = (items, params) => {
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
    const prevSearchRef = useRef(params.name);
    const filteredItems = useMemo(() => {
        if (!params.name)
            return items;
        return items.filter(item => item.name.toLowerCase().includes(params.name.toLowerCase()));
    }, [items, params.name]);
    const totalPages = Math.ceil(filteredItems.length / params.limit);
    const currentPage = pages.length;
    // Reset on search change
    useEffect(() => {
        if (prevSearchRef.current !== params.name) {
            prevSearchRef.current = params.name;
            setPages([]);
            setIsLoading(true);
        }
    }, [params.name]);
    // Initial load
    useEffect(() => {
        if (pages.length === 0) {
            const timer = setTimeout(() => {
                const firstPage = filteredItems.slice(0, params.limit);
                setPages([firstPage]);
                setIsLoading(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [filteredItems, params.limit, pages.length]);
    const fetchNextPage = useCallback(() => {
        if (currentPage >= totalPages || isFetchingNextPage)
            return;
        setIsFetchingNextPage(true);
        setTimeout(() => {
            const start = currentPage * params.limit;
            const end = start + params.limit;
            const nextPageItems = filteredItems.slice(start, end);
            setPages(prev => [...prev, nextPageItems]);
            setIsFetchingNextPage(false);
        }, 400);
    }, [
        currentPage,
        totalPages,
        isFetchingNextPage,
        params.limit,
        filteredItems,
    ]);
    return {
        data: {
            pages: pages.map(pageItems => ({
                data: {
                    items: pageItems,
                    count: pageItems.length,
                    total: filteredItems.length,
                },
            })),
        },
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage: currentPage < totalPages,
        isPreviousData: false,
    };
};
const meta = {
    component: CollapsibleAutocompleteSelector,
    title: 'Composed Components/CollapsibleAutocompleteSelector',
    tags: ['autodocs'],
    argTypes: {
        sectionTitle: {
            control: 'text',
            description: 'Title displayed in the accordion header',
        },
        lackingOptionsMessage: {
            control: 'text',
            description: 'Message when no options available',
        },
        selectAllLabel: {
            control: 'text',
            description: 'Label for select all checkbox',
        },
        noResultsLabel: {
            control: 'text',
            description: 'Label when search returns no results',
        },
        paginationLimit: {
            control: 'number',
            description: 'Items per page',
        },
        showOnlyOnSearch: {
            control: 'boolean',
            description: 'Only show options when searching',
        },
        withSelectAll: {
            control: 'boolean',
            description: 'Show select all checkbox',
        },
        maxHeight: {
            control: 'number',
            description: 'Max height of options container',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
A collapsible autocomplete selector component with infinite scroll support.

## Features
- **Infinite scroll pagination** - Loads more items as you scroll
- **Search filtering** - Filter options by name with debounced search
- **Select all** - Optional checkbox to select/deselect all visible items
- **Controlled or Form mode** - Works with direct state or react-hook-form
- **Custom rendering** - Override default content with custom render function
- **Generic type support** - Type-safe with custom item types

## Required Labels
All text labels must be passed as props (no internal i18n):
- \`selectAllLabel\` - Text for "Select all" checkbox
- \`noResultsLabel\` - Text for "No results found"
- \`formatAndMore\` - Function to format "and N more" text
        `,
            },
        },
    },
};
export default meta;
// Wrapper component for controlled stories
const ControlledWrapper = ({ infiniteQuery = createSimpleMockQuery(mockCategories), sectionTitle = 'Categories', lackingOptionsMessage = 'No categories available', selectAllLabel = 'Select all', noResultsLabel = 'No results found', formatAndMore = (count) => `and ${count} more`, virtualized, paginationLimit, showOnlyOnSearch, withSelectAll, maxHeight, customMapper, getItemId, sx, renderContent, }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    return (_jsxs(Stack, { sx: { maxWidth: 600 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: infiniteQuery, sectionTitle: sectionTitle, lackingOptionsMessage: lackingOptionsMessage, selectAllLabel: selectAllLabel, noResultsLabel: noResultsLabel, formatAndMore: formatAndMore, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems, virtualized: virtualized, paginationLimit: paginationLimit, showOnlyOnSearch: showOnlyOnSearch, withSelectAll: withSelectAll, maxHeight: maxHeight, customMapper: customMapper, getItemId: getItemId, sx: sx, renderContent: renderContent }), _jsxs(Typography, { variant: "globalXS", sx: { mt: 2 }, children: ["Selected: ", selectedItems.map(c => c.name).join(', ') || 'None'] })] }));
};
export const Default = {
    render: () => _jsx(ControlledWrapper, {}),
    parameters: {
        docs: {
            description: {
                story: 'Default CollapsibleAutocompleteSelector with basic configuration.',
            },
        },
    },
};
export const VirtualizationOff = {
    render: () => _jsx(ControlledWrapper, { virtualized: false }),
    parameters: {
        docs: {
            description: {
                story: 'Virtualization disabled.',
            },
        },
    },
};
const WithPreselectedItemsRender = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedItems, setSelectedItems] = useState([
        mockCategories[0],
        mockCategories[2],
        mockCategories[4],
    ]);
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories), sectionTitle: "Categories", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems }), _jsxs(Typography, { variant: "globalXS", sx: { mt: 2 }, children: ["Selected: ", selectedItems.map(c => c.name).join(', ')] })] }));
};
export const WithPreselectedItems = {
    render: () => _jsx(WithPreselectedItemsRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Selector with items already selected on mount.',
            },
        },
    },
};
const WithManySelectionsRender = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedItems, setSelectedItems] = useState(mockCategories.slice(0, 6));
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories), sectionTitle: "Categories", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems }), _jsxs(Typography, { variant: "globalXS", sx: { mt: 2 }, children: ["Total selected: ", selectedItems.length] })] }));
};
export const WithManySelections = {
    render: () => _jsx(WithManySelectionsRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Shows how the description truncates with "and N more" when many items are selected.',
            },
        },
    },
};
export const ShowOnlyOnSearch = {
    render: () => (_jsx(ControlledWrapper, { showOnlyOnSearch: true, lackingOptionsMessage: "Type to search categories" })),
    parameters: {
        docs: {
            description: {
                story: 'Options are only displayed when the user types a search query. Useful for large datasets.',
            },
        },
    },
};
export const WithoutSelectAll = {
    render: () => _jsx(ControlledWrapper, { withSelectAll: false }),
    parameters: {
        docs: {
            description: {
                story: 'Selector without the "Select all" checkbox option.',
            },
        },
    },
};
export const CustomPaginationLimit = {
    render: () => _jsx(ControlledWrapper, { paginationLimit: 3 }),
    parameters: {
        docs: {
            description: {
                story: 'Selector with only 3 items per page.',
            },
        },
    },
};
export const CustomMaxHeight = {
    render: () => _jsx(ControlledWrapper, { maxHeight: 250 }),
    parameters: {
        docs: {
            description: {
                story: 'Selector with increased max height for the options container.',
            },
        },
    },
};
export const EmptyState = {
    render: () => (_jsx(ControlledWrapper, { infiniteQuery: createSimpleMockQuery([]), lackingOptionsMessage: "No categories have been created yet" })),
    parameters: {
        docs: {
            description: {
                story: 'Shows the empty state when no options are available.',
            },
        },
    },
};
export const CustomStyles = {
    render: () => (_jsx(ControlledWrapper, { sx: {
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            border: '1px solid #e0e0e0',
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Selector with custom styling via the sx prop.',
            },
        },
    },
};
const products = [
    { productId: 'p1', title: 'Laptop Pro', sku: 'LP-001' },
    { productId: 'p2', title: 'Wireless Mouse', sku: 'WM-002' },
    { productId: 'p3', title: 'USB-C Hub', sku: 'UH-003' },
    { productId: 'p4', title: 'Mechanical Keyboard', sku: 'MK-004' },
    { productId: 'p5', title: 'Monitor 27"', sku: 'MN-005' },
];
const productQuery = params => {
    const filtered = params.name
        ? products.filter(p => p.title.toLowerCase().includes(params.name.toLowerCase()))
        : products;
    return {
        data: {
            pages: [
                {
                    data: {
                        items: filtered.slice(0, params.limit),
                        count: filtered.length,
                        total: filtered.length,
                    },
                },
            ],
        },
        isLoading: false,
        fetchNextPage: () => { },
        isFetchingNextPage: false,
        hasNextPage: false,
    };
};
const CustomMapperRender = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: productQuery, sectionTitle: "Products", lackingOptionsMessage: "No products available", selectAllLabel: "Select all", noResultsLabel: "No products found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems, getItemId: (item) => item.productId, customMapper: (item) => ({
                    value: item.productId,
                    name: `${item.title} (${item.sku})`,
                }) }), _jsxs(Typography, { variant: "globalXS", sx: { mt: 2 }, children: ["Selected SKUs: ", selectedItems.map(p => p.sku).join(', ') || 'None'] })] }));
};
export const CustomMapper = {
    render: () => _jsx(CustomMapperRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Using customMapper and getItemId for items with non-standard id/name fields.',
            },
        },
    },
};
const departmentData = [
    { id: 101, name: 'North America' },
    { id: 102, name: 'Europe' },
    { id: 103, name: 'Asia Pacific' },
    { id: 104, name: 'Latin America' },
];
const MultipleSelectorsRender = () => {
    const [expandedSection, setExpandedSection] = useState('categories');
    const [categories, setCategories] = useState([]);
    const [departments, setDepartments] = useState([]);
    return (_jsxs(Stack, { sx: { maxWidth: 400, gap: 2 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories.slice(0, 8)), sectionTitle: "Categories", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: expandedSection === 'categories', setExpanded: expanded => setExpandedSection(expanded ? 'categories' : null), value: categories, onChange: setCategories }), _jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(departmentData), sectionTitle: "Regions", lackingOptionsMessage: "No regions available", selectAllLabel: "Select all", noResultsLabel: "No regions found", formatAndMore: (count) => `and ${count} more`, isExpanded: expandedSection === 'regions', setExpanded: expanded => setExpandedSection(expanded ? 'regions' : null), value: departments, onChange: setDepartments }), _jsxs(Typography, { variant: "globalXS", children: ["Categories: ", categories.map(c => c.name).join(', ') || 'None', _jsx("br", {}), "Regions: ", departments.map(d => d.name).join(', ') || 'None'] })] }));
};
export const MultipleSelectors = {
    render: () => _jsx(MultipleSelectorsRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Multiple selectors working together with accordion-style expansion (only one open at a time).',
            },
        },
    },
};
const CollapsedByDefaultRender = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedItems, setSelectedItems] = useState([
        mockCategories[0],
        mockCategories[1],
    ]);
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories), sectionTitle: "Categories", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems }), _jsx(Typography, { variant: "globalS", sx: { mt: 2 }, children: "Click the accordion to expand and see selections." })] }));
};
export const CollapsedByDefault = {
    render: () => _jsx(CollapsedByDefaultRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Selector collapsed by default, showing the selected items description in the header.',
            },
        },
    },
};
// Infinite scroll example with real pagination
const InfiniteScrollRender = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    // Create the infinite query hook for use in render
    const infiniteQueryHook = params => {
        return useInfiniteQueryMock(mockCategories, params);
    };
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsxs(Typography, { variant: "globalXS", sx: { mb: 2 }, children: ["Scroll down in the options list to load more items. There are", ' ', mockCategories.length, " total categories."] }), _jsx(CollapsibleAutocompleteSelector, { infiniteQuery: infiniteQueryHook, sectionTitle: "Categories (Infinite Scroll)", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all visible", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: selectedItems, onChange: setSelectedItems, paginationLimit: 5, maxHeight: 200 }), _jsxs(Typography, { variant: "globalS", sx: { mt: 2 }, children: ["Selected (", selectedItems.length, "):", ' ', selectedItems.map(c => c.name).join(', ') || 'None'] })] }));
};
export const InfiniteScroll = {
    render: () => _jsx(InfiniteScrollRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates infinite scroll pagination. Scroll down in the options list to trigger loading more items. Uses a mock hook that simulates API delay and pagination.',
            },
        },
    },
};
// Uncontrolled accordion state example
const UncontrolledAccordionRender = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    return (_jsxs(Stack, { sx: { maxWidth: 400 }, children: [_jsxs(Typography, { variant: "globalXS", sx: { mb: 2 }, children: ["This accordion manages its own expanded state internally. No", ' ', _jsx("code", { children: "isExpanded" }), " prop is passed."] }), _jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories), sectionTitle: "Categories (Uncontrolled)", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, defaultExpanded: true, value: selectedItems, onChange: setSelectedItems }), _jsxs(Typography, { variant: "globalS", sx: { mt: 2 }, children: ["Selected: ", selectedItems.map(c => c.name).join(', ') || 'None'] })] }));
};
export const UncontrolledAccordion = {
    render: () => _jsx(UncontrolledAccordionRender, {}),
    parameters: {
        docs: {
            description: {
                story: "The accordion manages its own expanded/collapsed state internally. Use `defaultExpanded` to set the initial state. This is useful when you don't need to control the accordion state from the parent component.",
            },
        },
    },
};
// Controlled vs Uncontrolled comparison
const ControlledVsUncontrolledRender = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [controlledItems, setControlledItems] = useState([]);
    const [uncontrolledItems, setUncontrolledItems] = useState([]);
    return (_jsxs(Stack, { sx: { maxWidth: 500, gap: 3 }, children: [_jsx(Typography, { variant: "globalS", children: "Controlled (state managed by parent):" }), _jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories.slice(0, 5)), sectionTitle: "Controlled Accordion", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, isExpanded: isExpanded, setExpanded: setIsExpanded, value: controlledItems, onChange: setControlledItems }), _jsxs(Typography, { variant: "globalXS", children: ["Parent knows expanded state:", ' ', _jsx("strong", { children: isExpanded ? 'true' : 'false' })] }), _jsx(Typography, { variant: "globalS", children: "Uncontrolled (state managed internally):" }), _jsx(CollapsibleAutocompleteSelector, { infiniteQuery: createSimpleMockQuery(mockCategories.slice(5, 10)), sectionTitle: "Uncontrolled Accordion", lackingOptionsMessage: "No categories available", selectAllLabel: "Select all", noResultsLabel: "No results found", formatAndMore: (count) => `and ${count} more`, defaultExpanded: false, value: uncontrolledItems, onChange: setUncontrolledItems }), _jsx(Typography, { variant: "globalXS", children: "Parent does not track expanded state" })] }));
};
export const ControlledVsUncontrolled = {
    render: () => _jsx(ControlledVsUncontrolledRender, {}),
    parameters: {
        docs: {
            description: {
                story: 'Comparison between controlled and uncontrolled accordion modes. The controlled accordion passes `isExpanded` and `setExpanded`, while the uncontrolled one only uses `defaultExpanded`. You can still pass `setExpanded` to an uncontrolled accordion to listen for state changes.',
            },
        },
    },
};
