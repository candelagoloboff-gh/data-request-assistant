export type HTMLTags = keyof JSX.IntrinsicElements;
export type HTMLAttributeValue = string | number | boolean | undefined;
export type HTMLTagAttributesMap = {
    [K in HTMLTags]?: Record<string, HTMLAttributeValue>;
};
export type HTMLBodyProps = {
    /**
     * The HTML string content to render
     */
    body: string;
    /**
     * Whether video elements should allow downloads
     */
    canDownloadVideo?: boolean;
    /**
     * Attributes to apply to specific HTML tags
     */
    parserOptions?: HTMLTagAttributesMap;
};
