import { type CountServiceResult } from './types';
type FormValues = {
    name: string;
    description: string;
};
export declare const isFormEmpty: (values: FormValues) => boolean;
export declare const useMockCount: () => CountServiceResult;
export declare const useMockCountReady: () => CountServiceResult;
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
export {};
