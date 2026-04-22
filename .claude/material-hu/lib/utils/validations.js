import DOMPurify from 'dompurify';
/** Validates that the input contains no XSS-unsafe content using DOMPurify. Returns `true` if safe, or the error message if not. */
export const sanitizeInput = (input, errorMsg) => {
    if (!input || typeof input !== 'string')
        return true;
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput !== input)
        return errorMsg;
    return true;
};
