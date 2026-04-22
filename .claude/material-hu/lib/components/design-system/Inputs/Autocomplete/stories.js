import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../Buttons/Button';
import { Stack, Typography } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { maxBy, sampleSize } from 'lodash';
import List from '../../List';
import ListItem from '../../List/components/ListItem';
import FormAutocomplete from './form';
import Autocomplete from '.';
const mockOptions = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
];
const mockColors = [
    [
        { value: 1, label: 'Yellow' },
        { value: 2, label: 'Blue' },
        { value: 3, label: 'Red' },
        { value: 4, label: 'Black' },
        { value: 5, label: 'White' },
        { value: 6, label: 'Gray' },
        { value: 7, label: 'Pink' },
        { value: 8, label: 'Purple' },
        { value: 9, label: 'Gold' },
        { value: 0, label: 'Silver' },
    ],
    [
        { value: 10, label: 'Green' },
        { value: 11, label: 'Orange' },
        { value: 12, label: 'Brown' },
        { value: 13, label: 'Cyan' },
        { value: 14, label: 'Magenta' },
        { value: 15, label: 'Teal' },
        { value: 16, label: 'Lavender' },
        { value: 17, label: 'Maroon' },
        { value: 18, label: 'Navy' },
        { value: 19, label: 'Olive' },
    ],
    [
        { value: 20, label: 'Coral' },
        { value: 21, label: 'Indigo' },
        { value: 22, label: 'Turquoise' },
        { value: 23, label: 'Beige' },
        { value: 24, label: 'Mint' },
        { value: 25, label: 'Salmon' },
        { value: 26, label: 'Khaki' },
        { value: 27, label: 'Plum' },
        { value: 28, label: 'Azure' },
        { value: 29, label: 'Lime' },
    ],
];
const meta = {
    component: Autocomplete,
    title: 'Design System/Inputs/Autocomplete',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        hasError: { control: 'boolean' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        isServerFiltered: { control: 'boolean' },
        virtualized: { control: 'boolean' },
        filterLimit: { control: 'number' },
        hasMoreOptions: { control: 'boolean' },
        options: { control: false },
        value: { control: false },
        onChange: { control: false },
        onCreate: { control: false },
        onLoadMore: { control: false },
        onInputChange: { control: false },
        renderTags: { control: false },
        noOptionsMessage: { control: false },
        fieldRef: { control: false },
    },
    args: {
        options: mockOptions,
        label: 'Label',
        placeholder: 'Select an option',
        isServerFiltered: false,
    },
    render: props => {
        const [state, setState] = useState(null);
        return (_jsx(Autocomplete, { ...props, value: state, onChange: nextValue => setState(nextValue) }));
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Error = {
    args: {
        hasError: true,
        helperText: 'Field is required',
    },
};
export const NoOptions = {
    args: {
        options: [],
    },
};
export const HelperText = {
    args: {
        helperText: 'Select or search an option',
    },
};
export const WithInputType = {
    args: {
        type: 'number',
        label: 'Numeric input type',
        placeholder: 'Underlying input uses type="number"',
        helperText: 'HTML input type is passed to the TextField (e.g. number, search)',
        options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
        ],
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const Loading = {
    args: {
        loading: true,
        options: [],
    },
};
export const multiple = {
    render: props => {
        const [state, setState] = useState([]);
        return (_jsx(Autocomplete, { ...props, value: state, onChange: nextValue => setState(nextValue), multiple: true }));
    },
};
export const NoTags = {
    render: props => {
        const [state, setState] = useState([]);
        const handleRemove = (option) => {
            setState(s => s.filter(item => item.value !== option.value));
        };
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Autocomplete, { ...props, value: state, onChange: nextValue => setState(nextValue), multiple: true, renderTags: () => null }), _jsx(List, { sx: {
                        borderRadius: 2,
                        backgroundColor: 'oklch(97% 0.009 254.604)',
                        gap: 1,
                    }, children: state?.map((option, index) => (_jsx(ListItem, { text: {
                            title: option.label,
                        }, divider: index !== state.length - 1, action: {
                            Icon: IconTrash,
                            onClick: () => handleRemove(option),
                        } }, option.value))) })] }));
    },
};
export const ServerFiltered = {
    render: () => {
        const [options, setOptions] = useState(mockOptions);
        const [loading, setLoading] = useState(false);
        const [state, setState] = useState(null);
        const handleFilterOptions = (searchText) => {
            setLoading(true);
            // Simulate a server request
            setTimeout(() => {
                setLoading(false);
                setOptions(mockOptions.filter(option => option.label.startsWith(searchText)));
            }, 1000);
        };
        return (_jsx(Autocomplete, { placeholder: "Search an option", helperText: "Filtered on the server", options: options, onInputChange: (_event, searchText) => handleFilterOptions(searchText), loading: loading, value: state, onChange: value => setState(value), isServerFiltered: true }));
    },
};
export const Creatable = {
    render: props => {
        const baseColors = mockColors[0];
        const sampleColors = sampleSize(baseColors, 5);
        const [options, setOptions] = useState(sampleColors);
        const [color, setColor] = useState(sampleColors[0]);
        return (_jsxs(Stack, { children: [_jsx(Autocomplete, { ...props, options: options, value: color, onChange: nextValue => {
                        setColor(nextValue);
                    }, onCreate: inputValue => {
                        const nextId = maxBy(sampleColors, item => item.value).value + 1;
                        const nextColor = {
                            label: inputValue,
                            value: nextId,
                        };
                        setOptions(state => [...state, nextColor]);
                        setColor(nextColor);
                    } }), _jsx(Typography, { children: "Selected:" }), _jsx(Typography, { children: _jsx("em", { children: JSON.stringify(color, null, 2) }) })] }));
    },
};
export const MultipleCreatable = {
    render: props => {
        const baseColors = mockColors[0];
        const sampleColors = sampleSize(baseColors, 5);
        const [options, setOptions] = useState(sampleColors);
        const [colors, setColors] = useState([]);
        return (_jsxs(Stack, { children: [_jsx(Autocomplete, { ...props, options: options, value: colors, onChange: nextValue => setColors(nextValue ?? []), multiple: true, onCreate: inputValue => {
                        const nextId = (maxBy(options, item => item.value)?.value ?? 0) + 1;
                        const nextColor = { label: inputValue, value: nextId };
                        setOptions(state => [...state, nextColor]);
                        setColors(prev => [...prev, nextColor]);
                    }, placeholder: "Select or create options", helperText: "Multiple selection with create option; new items are appended to selection" }), _jsx(Typography, { children: "Selected:" }), _jsx(Typography, { children: _jsx("em", { children: JSON.stringify(colors, null, 2) }) })] }));
    },
};
export const LoadMore = {
    render: () => {
        const [currentPage, setCurrentPage] = useState(1);
        const [options, setOptions] = useState(mockColors[0]);
        const [color, setColor] = useState(mockColors[0][0]);
        const hasMorePages = currentPage < mockColors.length - 1;
        const handleLoad = () => {
            if (hasMorePages) {
                setTimeout(() => {
                    setCurrentPage(currentPage + 1);
                }, 1500);
            }
        };
        useEffect(() => {
            setOptions(state => [...state, ...mockColors[currentPage]]);
        }, [currentPage]);
        return (_jsxs(Stack, { children: [_jsx(Autocomplete, { options: options, value: color, onChange: value => setColor(value), onLoadMore: handleLoad, hasMoreOptions: hasMorePages }), _jsx(Typography, { children: "Pagination:" }), _jsx(Typography, { children: _jsx("em", { children: JSON.stringify({
                            lastPageLoaded: currentPage,
                            loadedOptionsCount: options.length,
                        }, null, 2) }) })] }));
    },
};
const pinkOptions = [
    { value: 1, label: 'Pink' },
    { value: 2, label: 'Light Pink' },
    { value: 3, label: 'Dark Pink' },
    { value: 4, label: 'Pale Pink' },
    { value: 5, label: 'Hot Pink' },
    { value: 6, label: 'Intense Pink' },
    { value: 7, label: 'Magenta' },
    { value: 8, label: 'Rose' },
    { value: 9, label: 'Light Intense Pink' },
    { value: 10, label: 'Dark Intense Pink' },
    { value: 11, label: 'Pale Intense Pink' },
    { value: 12, label: 'Soft Pink' },
];
const usePaginatedOptions = (options, initialInput = '') => {
    const [input, setInput] = useState(initialInput);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [paginatedOptions, setPaginatedOptions] = useState([]);
    const [hasMorePages, setHasMorePages] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const PAGE_SIZE = 4;
    const filterOptions = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            const filtered = options.filter(option => option.label.toLowerCase().includes(input.toLowerCase()));
            setFilteredOptions(filtered);
            setCurrentPage(1);
            setIsLoading(false);
        }, 1500);
    }, [input, options]);
    const paginateOptions = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            const startIndex = (currentPage - 1) * PAGE_SIZE;
            const nextPageOptions = filteredOptions.slice(startIndex, startIndex + PAGE_SIZE);
            setPaginatedOptions(prev => [...prev, ...nextPageOptions]);
            setHasMorePages(startIndex + PAGE_SIZE < filteredOptions.length);
            setIsLoading(false);
        }, 1500);
    }, [currentPage, filteredOptions]);
    const loadMore = useCallback(() => {
        if (hasMorePages) {
            setCurrentPage(prev => prev + 1);
        }
    }, [hasMorePages]);
    const addOption = useCallback((label) => {
        const highestValue = Math.max(...options.map(option => option.value));
        const newOption = { label, value: highestValue + 1 };
        options.push(newOption);
        setFilteredOptions(prev => [...prev, newOption]);
        setPaginatedOptions(prev => [...prev, newOption]);
    }, [options]);
    useEffect(() => {
        filterOptions();
    }, [filterOptions]);
    useEffect(() => {
        paginateOptions();
    }, [filteredOptions, paginateOptions]);
    useEffect(() => {
        paginateOptions();
    }, [currentPage, paginateOptions]);
    return {
        paginatedOptions,
        hasMorePages,
        loadMore,
        setInput,
        isLoading,
        addOption,
    };
};
export const CreatableLoadMore = {
    render: props => {
        const [input, setInput] = useState('');
        const [selectedOption, setSelectedOption] = useState(null);
        const { hasMorePages, loadMore: handleLoadMore, paginatedOptions: data, addOption: handleCreate, isLoading, } = usePaginatedOptions(pinkOptions, input);
        return (_jsxs(Stack, { children: [_jsx(Autocomplete, { ...props, options: data, value: selectedOption, onChange: setSelectedOption, onCreate: handleCreate, onLoadMore: handleLoadMore, hasMoreOptions: hasMorePages, placeholder: "Select pink color", onInputChange: (_event, nextInput) => setInput(nextInput), loading: isLoading, isServerFiltered: true }), _jsx(Typography, { children: "Selected Option:" }), _jsx(Typography, { children: _jsx("em", { children: JSON.stringify(selectedOption, null, 2) }) })] }));
    },
};
export const Form = {
    render: () => {
        const form = useForm({
            defaultValues: {
                option: null,
            },
        });
        const { watch } = form;
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormAutocomplete, { name: "option", options: mockOptions, autocompleteProps: {
                            placeholder: 'Controlled by React Hook Form',
                        } }) }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) })] }));
    },
};
export const FormDisabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                color: mockColors[0][0],
            },
        });
        const submit = () => {
            form.handleSubmit(data => {
                alert(JSON.stringify(data, null, 2));
            })();
        };
        return (_jsx(Stack, { sx: { gap: 2 }, children: _jsxs(FormProvider, { ...form, children: [_jsx(FormAutocomplete, { name: "color", options: [
                            { value: 1, label: 'Yellow' },
                            { value: 2, label: 'Blue' },
                            { value: 3, label: 'Red' },
                        ], autocompleteProps: {
                            disabled: true,
                        } }), _jsx(Button, { onClick: submit, children: "Submit" })] }) }));
    },
};
export const FormLimitedTagsDisabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                colors: mockColors[0],
            },
        });
        const { watch } = form;
        return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormAutocomplete, { name: "colors", options: mockColors[0], autocompleteProps: {
                            multiple: true,
                            disabled: true,
                            limitTags: 2,
                        } }) }), _jsx("pre", { children: JSON.stringify(watch(), null, 2) })] }));
    },
};
const generateOptions = (count) => Array.from({ length: count }, (_, i) => ({
    label: `Option ${i + 1} — ${crypto.randomUUID().slice(0, 8)}`,
    value: i + 1,
    description: i % 5 === 0 ? `Description for option ${i + 1}` : undefined,
}));
export const StressTest15K = {
    render: () => {
        const options = useMemo(() => generateOptions(15_000), []);
        const [value, setValue] = useState(null);
        const handleChange = useCallback((next) => setValue(next), []);
        return (_jsxs(Stack, { sx: { maxWidth: 400, gap: 2 }, children: [_jsxs(Typography, { variant: "globalS", color: "text.secondary", children: ["Virtualized + filterLimit: ", options.length.toLocaleString(), " options"] }), _jsx(Autocomplete, { label: "15K Options (Virtualized)", placeholder: "Search options\u2026", options: options, value: value, onChange: handleChange, isServerFiltered: false, virtualized: true, filterLimit: 200 }), value && (_jsxs(Typography, { variant: "globalXS", children: ["Selected: ", value.label, " (value: ", value.value, ")"] }))] }));
    },
};
export const StressTest15KMultiple = {
    render: () => {
        const options = useMemo(() => generateOptions(15_000), []);
        const [value, setValue] = useState([]);
        const handleChange = useCallback((next) => setValue(next ?? []), []);
        return (_jsxs(Stack, { sx: { maxWidth: 500, gap: 2 }, children: [_jsxs(Typography, { variant: "globalS", color: "text.secondary", children: ["Multi-select virtualized: ", options.length.toLocaleString(), " options"] }), _jsx(Autocomplete, { multiple: true, label: "15K Options Multi (Virtualized)", placeholder: "Search options\u2026", options: options, value: value, onChange: handleChange, isServerFiltered: false, virtualized: true, filterLimit: 200, limitTags: 5 }), value.length > 0 && (_jsxs(Typography, { variant: "globalXS", children: ["Selected ", value.length.toLocaleString(), " option(s)"] }))] }));
    },
};
export const StressTest15KNoVirtualization = {
    render: () => {
        const options = useMemo(() => generateOptions(15_000), []);
        const [value, setValue] = useState(null);
        const handleChange = useCallback((next) => setValue(next), []);
        return (_jsxs(Stack, { sx: { maxWidth: 400, gap: 2 }, children: [_jsxs(Typography, { variant: "globalS", color: "text.secondary", children: ["No virtualization (baseline): ", options.length.toLocaleString(), ' ', "options \u2014 WARNING: expect freezing!"] }), _jsx(Autocomplete, { label: "15K Options (No Virtualization)", placeholder: "Search options\u2026", options: options, value: value, onChange: handleChange, isServerFiltered: false }), value && (_jsxs(Typography, { variant: "globalXS", children: ["Selected: ", value.label, " (value: ", value.value, ")"] }))] }));
    },
};
