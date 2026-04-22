/** Validates that the input contains no XSS-unsafe content using DOMPurify. Returns `true` if safe, or the error message if not. */
export declare const sanitizeInput: (input: string, errorMsg: string) => string | true;
