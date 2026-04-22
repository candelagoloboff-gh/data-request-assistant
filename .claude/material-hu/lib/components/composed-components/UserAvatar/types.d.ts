import { type SxProps } from '@mui/material';
type ProfileProps = {
    showEmployeeInternalId?: boolean;
    redirectToPath?: string;
    showEmail?: boolean;
};
export type UserAvatarProps = {
    user: User;
    sx?: SxProps;
    profileProps?: ProfileProps;
};
export type User = {
    employeeInternalId: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    profilePicture: string | null;
    email: string | null;
};
export {};
