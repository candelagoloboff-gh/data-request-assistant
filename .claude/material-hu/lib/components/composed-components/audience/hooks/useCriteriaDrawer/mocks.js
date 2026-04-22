import { createMockService } from '../useSelectedCollaboratorsDrawer/mocks';
export const isFormEmpty = (values) => !values.name && !values.description;
export const useMockCount = () => ({
    count: 0,
    loading: false,
});
export const useMockCountReady = () => ({
    count: 42,
    loading: false,
});
export const useMockCountLoading = () => ({
    count: 0,
    loading: true,
});
export const useMockService = () => createMockService();
