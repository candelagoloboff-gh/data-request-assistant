import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import FormWrapper from '../../storybook/FormWrapper';
import { useDrawerV2 } from '../../../../hooks/useDrawerV2';
import { mockDataParser, useMockUsersQuery } from '../mocks';
import FormIndividualSelection from './form';
import IndividualSelection from './index';
const IndividualSelectionWithMockQuery = ({ empty, ...props }) => {
    const [selectedAll, setSelectedAll] = useState(props.selectedAll);
    const [search, setSearch] = useState('');
    const [selectedUserIds, setSelectedUserIds] = useState(props.value);
    const usersQuery = useMockUsersQuery(search, empty);
    const filterDrawer = useDrawerV2(() => {
        return {
            title: 'Filtros de Segmentación',
            children: _jsx("div", { children: "Contenido del drawer de filtros" }),
            primaryButtonProps: {
                children: 'Guardar cambios',
                onClick: () => filterDrawer.closeDrawer(),
            },
            secondaryButtonProps: {
                children: 'Limpiar filtros',
                onClick: () => filterDrawer.closeDrawer(),
            },
        };
    });
    return (_jsxs(_Fragment, { children: [_jsx("pre", { children: JSON.stringify(Array.from(selectedUserIds || [])) }), filterDrawer.drawer, _jsx(IndividualSelection, { ...props, slotProps: {
                    ...props.slotProps,
                    filterButton: {
                        ...props.slotProps?.filterButton,
                        onClick: () => filterDrawer.showDrawer({}),
                    },
                }, usersQuery: usersQuery, usersQueryDataParser: mockDataParser, value: selectedUserIds, searchValue: search, onSearch: setSearch, onSelectAll: setSelectedAll, selectedAll: selectedAll, onChange: setSelectedUserIds })] }));
};
const meta = {
    component: IndividualSelectionWithMockQuery,
    title: 'Composed Components/Audience/IndividualSelection',
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
            return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx("div", { style: { height: '400px', width: '100%' }, children: _jsx(Story, {}) }) }));
        },
    ],
    args: {
        selectionLimit: 3,
        filterCount: 0,
        value: new Set([1, 3]),
        slotProps: {
            search: {
                placeholder: 'Buscar usuario',
            },
            title: {
                title: 'Selección Individual',
                description: 'Selecciona usuarios específicos para tu audiencia',
            },
            filterButton: {
                children: 'Filtros',
            },
            selectAllCheckbox: {
                label: 'Seleccionar todo',
            },
            emptyStateCard: {
                title: 'No hay usuarios disponibles',
                description: 'No se encontraron usuarios que coincidan con los criterios de búsqueda',
            },
            infiniteListLoaderButton: {
                children: 'Cargar más',
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
const FormIndividualSelectionStory = ({ empty, ...props }) => {
    const form = useForm({
        defaultValues: {
            selectedUsers: new Set([1, 3]),
            search: '',
        },
    });
    const search = form.watch('search');
    const usersQuery = useMockUsersQuery(search, empty);
    return (_jsx(FormWrapper, { form: form, children: _jsx(FormIndividualSelection, { name: "selectedUsers", searchName: "search", inputProps: {
                ...props,
                usersQuery,
                usersQueryDataParser: mockDataParser,
                slotProps: props.slotProps,
            } }) }));
};
export const WithForm = {
    render: args => _jsx(FormIndividualSelectionStory, { ...args }),
    parameters: {
        docs: {
            description: {
                story: 'Usage with `FormIndividualSelection` integrated into react-hook-form. ' +
                    'The selected user IDs and search text are managed by the form state.',
            },
        },
    },
};
