export const getFullName = (user) => {
    if (!user)
        return '';
    return [user.firstName, user.lastName]
        .filter(str => (str?.length ?? 0) > 0)
        .join(' ');
};
export const getInitials = (fullName) => {
    if (!fullName)
        return '';
    const initalLetters = fullName
        .split(/(\s+)/)
        .filter(e => e.trim().length > 0);
    let result = '';
    for (let i = 0; i < Math.min(initalLetters.length, 2); i++) {
        result += initalLetters[i].charAt(0);
    }
    return result.toUpperCase();
};
