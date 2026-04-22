import { type Texts, type User } from '../useProfileUsersDrawer/types';
export type ProfileListUsersRowProps = {
    field: {
        name: string;
        value: User[];
    };
    texts: Texts;
};
