import { z } from 'zod';
/**
 * Basic validation schemas
 */
export declare const numberSchema: (errorText: string) => z.ZodNumber;
export declare const stringSchema: (errorText: string) => z.ZodString;
export declare const fileSchema: (errorText: string) => z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contentType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    uploadUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    size: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
