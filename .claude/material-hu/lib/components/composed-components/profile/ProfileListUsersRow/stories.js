import { jsx as _jsx } from "react/jsx-runtime";
import { DrawerLayerProvider } from '../../../layers/Drawers';
import ProfileListUsersRow from '.';
const meta = {
    component: ProfileListUsersRow,
    title: 'Composed Components/Profile/ProfileListUsersRow',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(DrawerLayerProvider, { children: _jsx(Story, {}) })),
    ],
    args: {
        field: {
            name: 'Collaborators',
            value: [
                {
                    name: 'Alice Johnson',
                    profilePicture: 'https://i.pravatar.cc/150?u=alice',
                },
                {
                    name: 'Bob Smith',
                    profilePicture: 'https://i.pravatar.cc/150?u=bob',
                },
                {
                    name: 'Carol Williams',
                    profilePicture: 'https://i.pravatar.cc/150?u=carol',
                },
            ],
        },
        texts: {
            collaborator_count: 'N Collaborators',
            drawer_title: 'Collaborators',
            no_items_found: 'No users found',
            back: 'Back',
            items_total: '3 users total',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const SingleUser = {
    args: {
        field: {
            name: 'Owner',
            value: [
                {
                    name: 'Alice Johnson',
                    profilePicture: 'https://i.pravatar.cc/150?u=alice',
                },
            ],
        },
        texts: {
            collaborator_count: 'N Collaborators',
            drawer_title: 'Owner',
            no_items_found: 'No users found',
            back: 'Back',
            items_total: '1 user total',
        },
    },
};
export const ManyUsers = {
    args: {
        field: {
            name: 'Team members',
            value: [
                {
                    name: 'Alice Johnson',
                    profilePicture: 'https://i.pravatar.cc/150?u=alice',
                },
                {
                    name: 'Bob Smith',
                    profilePicture: 'https://i.pravatar.cc/150?u=bob',
                },
                {
                    name: 'Carol Williams',
                    profilePicture: 'https://i.pravatar.cc/150?u=carol',
                },
                { name: 'David Brown' },
                {
                    name: 'Eve Davis',
                    profilePicture: 'https://i.pravatar.cc/150?u=eve',
                },
                { name: 'Frank Miller' },
            ],
        },
        texts: {
            collaborator_count: 'N Collaborators',
            drawer_title: 'Team members',
            no_items_found: 'No users found',
            back: 'Back',
            items_total: '6 users total',
        },
    },
};
