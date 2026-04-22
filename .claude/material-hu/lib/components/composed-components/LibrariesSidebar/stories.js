import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';
import useHuPagination from '../../../hooks/useHuPagination';
import Stack from '@mui/material/Stack';
import { SidebarWrapper } from './components/SidebarWrapper';
import { articleItemsMock, rootItemsMock } from './mock';
import LibrariesSidebar from '.';
const meta = {
    component: LibrariesSidebar,
    parameters: { layout: 'fullscreen' },
    title: 'Composed Components/LibrariesSidebar',
    tags: ['autodocs'],
    args: {
        items: rootItemsMock,
        headerTitle: '',
        onBack: () => console.log('onBack'),
        onSort: payload => console.log('onSort', payload),
        onAdd: () => console.log('onAdd'),
    },
    decorators: [
        Story => (_jsx(MemoryRouter, { children: _jsx(Stack, { sx: {
                    width: '100%',
                    minHeight: '100vh',
                    maxWidth: 'min-content',
                    mx: 'auto',
                }, children: _jsx(Story, {}) }) })),
    ],
};
export default meta;
const Template = (args) => {
    const { Search, form } = useHuPagination();
    const search = form.watch('params.search') ?? '';
    const [selected, setSelected] = useState({ parentId: undefined, title: '' });
    const items = selected.parentId ? articleItemsMock : args.items;
    const filteredItems = useMemo(() => {
        if (!search.trim())
            return items;
        return items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, items]);
    const formattedItems = useMemo(() => {
        return filteredItems.map(item => ({
            ...item,
            onClick: (item) => {
                const isRoot = !item.parentId;
                if (isRoot) {
                    setSelected({ parentId: item.id, title: item.title });
                }
                else {
                    console.log('onChildItemClick', item);
                }
            },
        }));
    }, [filteredItems]);
    const handleBack = () => setSelected({ parentId: undefined, title: '' });
    const handleSort = (sortedItems) => {
        console.log('handleOnSort', sortedItems);
    };
    return (_jsx(FormProvider, { ...form, children: _jsxs(SidebarWrapper, { children: [_jsx(Stack, { sx: { px: 1, py: 1, backgroundColor: 'white' }, children: _jsx(Search, { inputProps: { variant: 'custom' } }) }), _jsx(LibrariesSidebar, { ...args, items: formattedItems, headerTitle: selected.title, parentId: selected.parentId, onBack: handleBack, onSort: handleSort })] }) }));
};
export const Default = {
    render: args => _jsx(Template, { ...args }),
};
export const Empty = {
    args: { items: [] },
    render: args => _jsx(Template, { ...args }),
};
export const Loading = {
    args: { loading: true },
    render: args => _jsx(Template, { ...args }),
};
