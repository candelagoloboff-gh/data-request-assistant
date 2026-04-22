import { type CountServiceResult } from '../useCriteriaDrawer/types';
export declare const useMockCount: () => CountServiceResult;
export declare const useMockCountLoading: () => CountServiceResult;
export declare const useMockService: () => (params: {
    q?: string;
    limit: number;
    cursor?: string;
}) => Promise<{
    data: {
        cursor?: string;
        items: (import("../../../UserAvatar/types").User & {
            id: number;
        })[];
    };
}>;
