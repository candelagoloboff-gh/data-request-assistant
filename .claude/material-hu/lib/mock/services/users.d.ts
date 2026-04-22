declare const usersService: {
    getUsers: (pageParam?: string | undefined, pageSize?: number, search?: string, empty?: boolean) => Promise<{
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
    }>;
};
export default usersService;
