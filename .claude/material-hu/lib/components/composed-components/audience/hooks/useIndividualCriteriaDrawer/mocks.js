import { createMockService } from '../useSelectedCollaboratorsDrawer/mocks';
export const useMockCount = () => ({
    count: 25,
    loading: false,
});
export const useMockCountLoading = () => ({
    count: 0,
    loading: true,
});
export const useMockService = () => createMockService();
