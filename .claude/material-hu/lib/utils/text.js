import { v4 } from 'uuid';
import { uuidv7 } from 'uuidv7';
/** Function to remove UUID v7 from a stringAdd a comment on lines R94 to R96Add diff commentMarkdown input:  edit mode selected.WritePreviewAdd a suggestionHeadingBoldItalicQuoteCodeLinkUnordered listNumbered listTask listMentionReferenceSaved repliesAdd FilesPaste, drop, or click to add filesCancelCommentStart a reviewReturn to code
 *
 * @param str string to remove UUID v7 from
 * @returns string without UUID v7
 *
 * REGEX EXPLANATION:
 * - [0-9a-f]{8}           → 8 hex chars
 * - -                     → literal dash
 * - [0-9a-f]{4}           → 4 hex chars
 * - -
 * - [47][0-9a-f]{3}       → version nibble (4 or 7) + 3 hex chars
 * - -
 * - [89ab][0-9a-f]{3}     → variant nibble (8, 9, a, or b) + 3 hex chars
 * - -
 * - [0-9a-f]{12}          → 12 hex chars
 * \b boundaries + 'i'     → word boundaries, case-insensitive
 * 'g' flag                → match all occurrences
 */
export const removeUUID = (str) => {
    const uuidV7Regex = /\b[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/gi;
    return str
        .replace(uuidV7Regex, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
};
/** Generates a UUID string (v4 or v7, defaults to v7). */
export const getUuid = (version = 'v7') => {
    return version === 'v4' ? v4().toString() : uuidv7();
};
