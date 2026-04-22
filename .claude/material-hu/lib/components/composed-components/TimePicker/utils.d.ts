export declare const simpleDateStringToLocalDate: (utcISOdate: string | Date) => Date;
export declare const shiftTimeToReferenceDate: (timeValue: string | Date | null, referenceDate: Date) => Date | null;
export declare const getNormalizedValue: (value: Date | null, minutesStep?: number, currentTime?: Date) => Date | null;
