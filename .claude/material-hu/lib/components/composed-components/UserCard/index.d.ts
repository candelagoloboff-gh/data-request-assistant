import { type UserCardProps, type UserCardUser } from './types';
declare const UserCard: <T extends UserCardUser = UserCardUser>({ user, sizeProps, labels, actionButtons, copyProps, headerBackgroundColor, sx, stopPropagation, avatarProps, }: UserCardProps<T>) => import("react/jsx-runtime").JSX.Element;
export type { UserCardActionButton, UserCardLabels, UserCardProps, UserCardUser, } from './types';
export default UserCard;
