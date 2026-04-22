import { users as mockUsers } from '../data/users';
// Servicio mock de paginación
const usersService = {
    getUsers: async (pageParam = undefined, pageSize = 5, search = '', empty = false) => {
        if (empty) {
            return {
                data: [],
                nextCursor: undefined,
                hasNextPage: false,
            };
        }
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));
        // Filtrar usuarios por búsqueda
        let filteredUsers = mockUsers;
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            filteredUsers = mockUsers.filter(user => user.firstName.toLowerCase().includes(searchLower) ||
                user.lastName.toLowerCase().includes(searchLower) ||
                user.fullName.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower));
        }
        const startIndex = pageParam ? parseInt(pageParam) : 0;
        const endIndex = startIndex + pageSize;
        const users = filteredUsers.slice(startIndex, endIndex);
        return {
            data: users,
            nextCursor: endIndex < filteredUsers.length ? endIndex.toString() : undefined,
            hasNextPage: endIndex < filteredUsers.length,
        };
    },
};
export default usersService;
