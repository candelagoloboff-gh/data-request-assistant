import { type UseQueryResult } from 'react-query';
import { type UserAvatarProps } from '../../UserAvatar/types';
import { type InputSearchProps } from '../../../design-system/Inputs/Search/types';
import { type StateCardProps } from '../../../design-system/StateCard/types';
import { type StackProps } from '@mui/material/Stack';
/** Response shape of the users query: { count, items, limit, page, totalPages } */
export type UsersQueryData = {
    count: number;
    items: unknown[];
    limit: number;
    page: number;
    totalPages: number;
};
export type UserAutoCompleteProps = {
    value?: Set<string | number>;
    selectionLimit?: number;
    /**
     * When true, the component fires `onLoadMore` when the scroll reaches the end.
     * Page control and refetch logic is handled by the consumer.
     */
    infiniteScroll?: boolean;
    /**
     * Callback fired when the scroll reaches the end of the list
     * (only if `infiniteScroll` is true).
     */
    onLoadMore?: () => void;
    slotProps?: {
        search?: Omit<InputSearchProps, 'value' | 'onChange'>;
        emptyStateCard?: StateCardProps;
        userAvatar?: Omit<UserAvatarProps, 'user'>;
    };
    usersQuery: UseQueryResult<UsersQueryData | undefined>;
    usersQueryDataParser: (data: UsersQueryData | undefined) => UserAvatarProps['user'][];
    searchValue?: string;
    onSearch?: (search: string) => void;
    onChange?: (selectedUserIds?: Set<string | number>) => void;
    sx?: StackProps['sx'];
    idKey?: string;
};
