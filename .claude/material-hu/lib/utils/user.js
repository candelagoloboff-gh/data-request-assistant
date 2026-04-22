/** Extracts up to two uppercase initials from a full name. */
export const getInitials = (fullName) => {
    if (!fullName?.trim())
        return '';
    return fullName
        .trim()
        .toUpperCase()
        .split(/\s+/)
        .slice(0, 2)
        .map(word => word.charAt(0))
        .join('');
};
/** Builds a full name string by joining firstName and lastName. */
export const getFullName = (user) => {
    if (!user)
        return '';
    return [user.firstName, user.lastName]
        .filter(str => (str?.length ?? 0) > 0)
        .join(' ');
};
