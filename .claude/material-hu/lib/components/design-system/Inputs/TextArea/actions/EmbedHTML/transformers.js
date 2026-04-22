import DOMPurify from 'dompurify';
const sanitizeConfig = {
    ALLOWED_TAGS: [
        'p',
        'br',
        'strong',
        'em',
        'u',
        's',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'ul',
        'ol',
        'li',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'div',
        'span',
        'a',
        'img',
        'video',
        'iframe',
        'blockquote',
        'code',
        'pre',
        'button',
        'input',
        'form',
        'label',
        'select',
        'option',
        'textarea',
        'fieldset',
        'legend',
    ],
    ALLOWED_ATTR: [
        'href',
        'target',
        'rel',
        'src',
        'alt',
        'width',
        'height',
        'style',
        'class',
        'id',
        'title',
        'colspan',
        'rowspan',
        'controls',
        'allowfullscreen',
        'frameborder',
        'allow',
        'referrerpolicy',
        'type',
        'allowscriptaccess',
        'allownetworking',
        'scrolling',
        'sandbox',
        'onclick',
        'onchange',
        'onsubmit',
        'onfocus',
        'onblur',
        'value',
        'name',
        'placeholder',
        'required',
        'disabled',
        'checked',
        'selected',
        'for',
        'method',
        'action',
    ],
    ALLOW_DATA_ATTR: false,
};
// Apply transformations to children
const transformChildren = (children) => {
    Array.from(children).forEach(child => {
        transformElement(child);
    });
};
// Apply transformations to element (similar to transformPaste)
const transformElement = (elem) => {
    const tagName = elem.tagName.toLowerCase();
    const elementIsTable = tagName === 'table';
    const elementIsList = ['ul', 'ol'].includes(tagName);
    const elementIsIframe = tagName === 'iframe';
    if (elem instanceof HTMLElement && !elementIsIframe) {
        if (!elem.style.width) {
            elem.style.width = 'auto';
        }
    }
    if (elementIsTable && elem instanceof HTMLElement) {
        elem.style.display = 'block';
        elem.style.overflowX = 'auto';
    }
    if (elementIsList && elem instanceof HTMLElement) {
        elem.style.overflowX = 'auto';
    }
    transformChildren(elem.children);
};
/**
 * Sanitizes HTML for direct insertion into the editor
 * Processes iframes to be in the resizable-media format
 */
export const getEmbedHTML = (html) => {
    if (!html || typeof html !== 'string') {
        return '';
    }
    const sanitizedHTML = DOMPurify.sanitize(html, sanitizeConfig);
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHTML, 'text/html');
    const body = doc.body;
    transformChildren(body.children);
    return body.innerHTML;
};
