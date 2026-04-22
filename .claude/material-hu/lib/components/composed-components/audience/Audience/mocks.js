import { createMockService } from '../hooks/useSelectedCollaboratorsDrawer/mocks';
/** Returns a static description string for a segmentation criteria entry. */
export const getSegmentationDescription = (_entry) => 'País: México / Área: Operaciones / Sede: Oaxaca';
/** Returns a count-based description string for an individual criteria entry. */
export const getIndividualDescription = (entry) => `${entry.userIds.size} colaboradores seleccionados`;
export const mockService = createMockService();
export const useMockCount = () => ({
    count: 42,
    loading: false,
});
export const useMockService = () => mockService;
