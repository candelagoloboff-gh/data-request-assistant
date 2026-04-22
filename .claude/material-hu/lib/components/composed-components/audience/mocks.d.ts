/**
 * Infinite-query hook that fetches mock users for story/test usage.
 *
 * @param search - Text filter forwarded to the mock service.
 * @param empty  - When `true` the service returns an empty result set.
 */
export declare const useMockUsersQuery: (search?: string, empty?: boolean) => import("react-query").UseInfiniteQueryResult<{
    data: {
        id: number;
        employeeInternalId: string;
        firstName: string;
        lastName: string;
        fullName: string;
        profilePicture: string;
        email: string;
    }[];
    nextCursor: string | undefined;
    hasNextPage: boolean;
}, unknown>;
/** Extracts a flat array of user items from a paginated infinite-query response. */
export declare const mockDataParser: (data: any) => any;
