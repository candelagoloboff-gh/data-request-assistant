import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Box } from '@mui/material';
import { mockDataParser, useMockUsersQueryForAutocomplete } from './mocks';
import UserAutoComplete from './index';
const UserAutoCompleteWithMockQuery = ({ empty, ...rest }) => {
    const [search, setSearch] = useState('');
    const [selectedUserIds, setSelectedUserIds] = useState(rest.value);
    const usersQuery = useMockUsersQueryForAutocomplete(search, empty);
    return (_jsx(_Fragment, { children: _jsx(UserAutoComplete, { ...rest, usersQuery: usersQuery, usersQueryDataParser: mockDataParser, value: selectedUserIds, searchValue: search, onSearch: setSearch, onChange: setSelectedUserIds }) }));
};
const meta = {
    component: UserAutoCompleteWithMockQuery,
    title: 'Composed Components/Inputs/UserAutoComplete',
    tags: ['autodocs'],
    decorators: [
        Story => {
            const queryClient = new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            });
            return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Box, { sx: { height: '500px', width: '100%' }, children: _jsx(Story, {}) }) }));
        },
    ],
    args: {
        selectionLimit: 3,
        value: new Set([1, 3]),
        slotProps: {
            search: {
                placeholder: 'Buscar usuario',
            },
            emptyStateCard: {
                title: 'No hay usuarios disponibles',
                description: 'No se encontraron usuarios que coincidan con los criterios de búsqueda',
            },
            userAvatar: {
                profileProps: {
                    showEmail: true,
                },
            },
        },
    },
};
export default meta;
export const Default = {};
export const Empty = {
    args: {
        empty: true,
    },
};
