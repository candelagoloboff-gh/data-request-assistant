import { jsx as _jsx } from "react/jsx-runtime";
/** Checks whether a text element is visually clamped (truncated by CSS). */
export const isTextClamped = (textRef) => {
    if (!textRef?.current)
        return false;
    const element = textRef.current;
    return element.scrollHeight > element.clientHeight;
};
/** Splits text by newline characters and returns an array of React elements with `<br />` separators. */
export const mapNewLines = (text) => {
    if (!text)
        return [];
    return text.split('\n').map((item, i, arr) => {
        const line = _jsx("span", { children: item }, i);
        if (i === arr.length - 1) {
            return line;
        }
        return [line, _jsx("br", {}, `${i}br`)];
    });
};
