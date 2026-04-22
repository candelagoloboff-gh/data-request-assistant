import { useQuery } from 'react-query';
import { users as mockUsers } from '../../../../mock/data/users';
const PAGE_SIZE = 20;
/**
 * useQuery mock that returns { count, items, limit, page, totalPages } for Storybook.
 */
export const useMockUsersQueryForAutocomplete = (search = '', empty = false) => {
    return useQuery({
        queryKey: ['mockUsersAutocomplete', search],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            if (empty) {
                return {
                    count: 0,
                    items: [],
                    limit: PAGE_SIZE,
                    page: 1,
                    totalPages: 0,
                };
            }
            let filtered = mockUsers;
            if (search.trim()) {
                const searchLower = search.toLowerCase();
                filtered = mockUsers.filter(user => user.firstName.toLowerCase().includes(searchLower) ||
                    user.lastName.toLowerCase().includes(searchLower) ||
                    (user.fullName?.toLowerCase().includes(searchLower) ?? false) ||
                    (user.email?.toLowerCase().includes(searchLower) ?? false));
            }
            const items = filtered.slice(0, PAGE_SIZE);
            return {
                count: filtered.length,
                items,
                limit: PAGE_SIZE,
                page: 1,
                totalPages: Math.ceil(filtered.length / PAGE_SIZE) || 1,
            };
        },
        staleTime: Infinity,
    });
};
/** Parser for the useQuery response: returns items array for the list. */
export const mockDataParser = (data) => (data?.items ?? []);
