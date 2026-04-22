import { type CountServiceResult } from '../hooks/useCriteriaDrawer/types';
import { type IndividualCriteriaEntry, type SegmentationCriteriaEntry } from './types';
/** Returns a static description string for a segmentation criteria entry. */
export declare const getSegmentationDescription: (_entry: SegmentationCriteriaEntry) => string;
/** Returns a count-based description string for an individual criteria entry. */
export declare const getIndividualDescription: (entry: IndividualCriteriaEntry) => string;
export declare const mockService: (params: {
    q?: string;
    limit: number;
    cursor?: string;
}) => Promise<{
    data: {
        cursor?: string;
        items: (import("../../UserAvatar/types").User & {
            id: number;
        })[];
    };
}>;
export declare const useMockCount: () => CountServiceResult;
export declare const useMockService: () => (params: {
    q?: string;
    limit: number;
    cursor?: string;
}) => Promise<{
    data: {
        cursor?: string;
        items: (import("../../UserAvatar/types").User & {
            id: number;
        })[];
    };
}>;
