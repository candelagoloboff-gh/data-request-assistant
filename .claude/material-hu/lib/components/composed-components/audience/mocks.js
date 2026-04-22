import { useInfiniteQuery } from 'react-query';
import usersService from '../../../mock/services/users';
/**
 * Infinite-query hook that fetches mock users for story/test usage.
 *
 * @param search - Text filter forwarded to the mock service.
 * @param empty  - When `true` the service returns an empty result set.
 */
export const useMockUsersQuery = (search = '', empty = false) => {
    return useInfiniteQuery({
        queryKey: ['mockUsers', search],
        queryFn: ({ pageParam }) => usersService.getUsers(pageParam, 5, search, empty),
        getNextPageParam: lastPage => lastPage.nextCursor,
        keepPreviousData: true,
        staleTime: Infinity,
        cacheTime: Infinity,
    });
};
/** Extracts a flat array of user items from a paginated infinite-query response. */
export const mockDataParser = (data) => data?.pages?.flatMap((page) => page.data) || [];
