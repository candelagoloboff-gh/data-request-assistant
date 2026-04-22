/** Returns a human-readable strict distance string from the given date to now. */
export declare const getDistanceToNow: (date: string) => string;
/** Formats a date using the given pattern (defaults to 'dd/MM/yyyy'). */
export declare const formatUTCDate: (date: Date | string, pattern?: string) => string;
/** Checks whether two dates fall on the same calendar day. */
export declare const isSameUTCDate: (a: Date | string, b: Date | string) => boolean;
/** Shifts the date to the given year, preserving month and day. */
export declare const shiftDateYear: (date: Date, year: number) => Date;
/** Returns a new Date set to midnight (00:00:00.000) of the given date. */
export declare const getDateMidnight: (date: Date) => Date;
/** Returns the current date/time, optionally converted to a specific timezone. */
export declare const getNow: (timezone?: string) => Date;
/** Returns today's date at midnight, optionally in a specific timezone. */
export declare const getToday: (timezone?: string) => Date;
/** Returns yesterday's date at midnight, optionally in a specific timezone. */
export declare const getYesterday: (timezone?: string) => Date;
/** Checks whether a date is today, optionally accounting for a timezone. */
export declare const isToday: (date: Date, timezone?: string) => boolean;
