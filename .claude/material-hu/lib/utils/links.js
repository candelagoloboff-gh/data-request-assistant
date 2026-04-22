const HTTP = 'http://';
const HTTPS = 'https://';
/** Checks whether a link already contains a protocol (scheme). */
export const isFullLink = (link) => link.includes(':');
/** Prepends https:// (or http:// if `withHttp` is true) to a link that lacks a protocol. */
export const getFullLink = ({ link = '', withHttp = false }) => isFullLink(link) ? link : `${withHttp ? HTTP : HTTPS}${link}`;
