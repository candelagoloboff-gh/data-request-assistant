import { z } from 'zod';
/**
 * Basic validation schemas
 */
export const numberSchema = (errorText) => z.number({
    error: errorText,
});
export const stringSchema = (errorText) => z.string({ error: errorText }).trim();
export const fileSchema = (errorText) => z.object({
    id: z.number(),
    name: z.string().nullish(),
    type: z.string().nullish(),
    contentType: z.string().nullish(),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    key: z.string().nullish(),
    url: z.string().nullish(),
    thumbnailUrl: z.string().nullish(),
    uploadUrl: z.string().nullish(),
    height: z.number().nullish(),
    size: z.string().nullish(),
    width: z.number().nullish(),
}, {
    error: errorText,
});
