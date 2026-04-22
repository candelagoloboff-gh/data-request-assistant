import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import UserAvatar from '.';
const meta = {
    component: UserAvatar,
    title: 'Composed Components/UserAvatar',
    tags: ['autodocs'],
    args: {
        user: {
            employeeInternalId: '123456',
            firstName: 'John',
            lastName: 'Doe',
            profilePicture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
            email: 'john.doe@example.com',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithInternalId = {
    args: {
        profileProps: {
            showEmployeeInternalId: true,
        },
    },
};
export const WithEmail = {
    args: {
        profileProps: {
            showEmail: true,
        },
    },
};
export const WithInternalIdAndEmail = {
    args: {
        user: {
            employeeInternalId: '123456',
            firstName: 'John',
            lastName: 'Doeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            profilePicture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
            email: 'john.doe@example.com',
        },
        profileProps: {
            showEmployeeInternalId: true,
            showEmail: true,
        },
    },
    decorators: [
        Story => (_jsx(Box, { sx: { width: 400 }, children: _jsx(Story, {}) })),
    ],
};
