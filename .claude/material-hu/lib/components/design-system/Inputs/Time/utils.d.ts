export declare const simpleDateStringToLocalDate: (utcISOdate: string | Date) => Date;
/**
 * Combines year-month-day from referenceDate with hour-minute-second from timeValue.
 */
export declare const shiftTimeToReferenceDate: (timeValue: string | Date | null, referenceDate: Date) => Date | null;
/**
 * When minutes match currentTime, the user likely only selected hour from the dropdown.
 * Rounds up to the next valid minutesStep.
 */
export declare const getNormalizedValue: (value: Date | null, minutesStep?: number, currentTime?: Date) => Date | null;
export declare const isHoursValid: (hours: number) => boolean;
/**
 * Returns a new Date with the meridiem toggled, or creates one if value is null.
 * Returns null when no change is needed (same meridiem with existing value).
 */
export declare const getMeridiemDate: (value: Date | null, isAM: boolean) => Date | null;
/**
 * Parses partial time input (e.g. "14:mm", "9:") into a Date with minutes zeroed.
 */
export declare const getPartialTimeDate: (inputValue: string) => Date | null;
/**
 * Returns the [start, end] selection range for the time input based on cursor position.
 */
export declare const getSelectionRange: (inputValue: string, cursorPosition: number, placeholder?: string) => [number, number];
