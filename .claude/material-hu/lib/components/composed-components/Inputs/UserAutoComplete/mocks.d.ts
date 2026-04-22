import { type UserAvatarProps } from '../../UserAvatar/types';
import { type UsersQueryData } from './types';
/**
 * useQuery mock that returns { count, items, limit, page, totalPages } for Storybook.
 */
export declare const useMockUsersQueryForAutocomplete: (search?: string, empty?: boolean) => import("react-query").UseQueryResult<UsersQueryData, unknown>;
/** Parser for the useQuery response: returns items array for the list. */
export declare const mockDataParser: (data: UsersQueryData | undefined) => UserAvatarProps["user"][];
