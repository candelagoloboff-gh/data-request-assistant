/** Extracts up to two uppercase initials from a full name. */
export declare const getInitials: (fullName: string) => string;
/** Builds a full name string by joining firstName and lastName. */
export declare const getFullName: (user: {
    firstName?: string;
    lastName?: string;
} | null) => string;
