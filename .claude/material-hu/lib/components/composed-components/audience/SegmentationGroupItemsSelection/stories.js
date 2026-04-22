import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { segmentations } from '../../../../mock/data/segmentations';
import segmentationsService from '../../../../mock/services/segmentations';
import SegmentationGroupItemsSelection from './index';
const useMockSegmentationsQuery = (empty = false) => {
    return useQuery({
        queryKey: ['segmentations'],
        queryFn: () => segmentationsService.getSegmentations(),
        enabled: !empty,
        staleTime: Infinity,
        cacheTime: Infinity,
    });
};
const sampleSlotProps = {
    title: {
        title: 'Selección por Segmentación',
        description: 'Selecciona segmentaciones específicas para tu audiencia',
    },
    search: {
        placeholder: 'Buscar por nombre de segmentación...',
    },
    stateCard: {
        title: 'No se encontraron segmentaciones',
        description: 'No hay segmentaciones que coincidan con tu búsqueda',
    },
    collapsibleSelectionList: {
        virtualized: true,
        allowSelectAll: false,
        listHeight: 250,
        rowHeight: 48,
        overscanCount: 5,
        slotProps: {
            accordion: {
                getDescription: (selected, total) => selected.size > 0
                    ? `${selected.size} de ${total} segmentaciones seleccionadas`
                    : '',
            },
            stateCard: {
                title: 'No se encontraron segmentaciones',
                description: 'No hay segmentaciones que coincidan con tu búsqueda',
            },
        },
    },
};
const SegmentationGroupSelectionWithMockQuery = ({ empty, ...props }) => {
    const [selectedSegmentationIds, setSelectedSegmentationIds] = useState(props?.selectedSegmentationIds || {});
    const segmentationsQuery = useMockSegmentationsQuery(empty);
    return (_jsx(SegmentationGroupItemsSelection, { ...props, segmentationsQuery: segmentationsQuery, segmentationsQueryDataParser: (data) => data?.data || [], value: selectedSegmentationIds, onChange: ({ selectedSegmentationIds: _selectedSegmentationIds }) => setSelectedSegmentationIds(_selectedSegmentationIds), error: { message: 'Error al obtener las segmentaciones' }, slotProps: sampleSlotProps }));
};
const defaultArgs = {
    selectedSegmentationIds: {
        [segmentations[0].id]: new Set([1, 3, 5]),
    },
    setSelectedSegmentationIds: () => { },
    allowSelectAll: false,
    excludedGroupsIds: new Set(),
};
const meta = {
    component: SegmentationGroupSelectionWithMockQuery,
    title: 'Composed Components/Audience/SegmentationGroupItemsSelection',
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
            return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Story, {}) }));
        },
    ],
    args: defaultArgs,
};
export default meta;
export const Default = {};
