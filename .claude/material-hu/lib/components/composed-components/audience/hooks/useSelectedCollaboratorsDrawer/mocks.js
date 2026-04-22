import { users as mockUsers } from '../../../../../mock/data/users';
export const createMockService = ({ delay = 500, empty = false, } = {}) => async ({ q, limit, cursor }) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    if (empty) {
        return { data: { cursor: undefined, items: [] } };
    }
    let filtered = mockUsers;
    if (q?.trim()) {
        const lower = q.toLowerCase();
        filtered = mockUsers.filter(u => u.firstName.toLowerCase().includes(lower) ||
            u.lastName.toLowerCase().includes(lower) ||
            u.email.toLowerCase().includes(lower));
    }
    const start = cursor ? parseInt(cursor, 10) : 0;
    const end = start + limit;
    const items = filtered.slice(start, end);
    const nextCursor = end < filtered.length ? String(end) : undefined;
    return {
        data: {
            cursor: nextCursor,
            items: items,
        },
    };
};
