/** Checks whether a link already contains a protocol (scheme). */
export declare const isFullLink: (link: string) => boolean;
/** Prepends https:// (or http:// if `withHttp` is true) to a link that lacks a protocol. */
export declare const getFullLink: ({ link, withHttp }: {
    link?: string | undefined;
    withHttp?: boolean | undefined;
}) => string;
