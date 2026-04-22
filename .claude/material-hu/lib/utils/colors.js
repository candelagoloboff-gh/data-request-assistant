import { createHuGoTheme } from '../theme/hugo';
var Colors;
(function (Colors) {
    Colors["LIGHT_BLUE"] = "LIGHT_BLUE";
    Colors["DARK_BLUE"] = "DARK_BLUE";
    Colors["LIGHT_BEIGE"] = "LIGHT_BEIGE";
    Colors["DARK_BEIGE"] = "DARK_BEIGE";
    Colors["LIGHT_GREEN"] = "LIGHT_GREEN";
    Colors["DARK_GREEN"] = "DARK_GREEN";
    Colors["LIGHT_VIOLET"] = "LIGHT_VIOLET";
    Colors["DARK_VIOLET"] = "DARK_VIOLET";
    Colors["LIGHT_RED"] = "LIGHT_RED";
    Colors["DARK_RED"] = "DARK_RED";
    Colors["LIGHT_GREEN_BLUE"] = "LIGHT_GREEN_BLUE";
    Colors["DARK_GREEN_BLUE"] = "DARK_GREEN_BLUE";
    Colors["LIGHT_GREY"] = "LIGHT_GREY";
    Colors["DARK_GREY"] = "DARK_GREY";
})(Colors || (Colors = {}));
/**
 * Creates a mapping using some colors from Hugo theme palette.
 *
 * @returns An object mapping Colors enum values to their corresponding theme palette colors
 */
export const getColorPaletteMapping = () => {
    const theme = createHuGoTheme();
    const palette = theme.palette;
    return {
        [Colors.LIGHT_BLUE]: palette?.border?.primaryBorder,
        [Colors.DARK_BLUE]: palette?.textColors?.primaryText,
        [Colors.LIGHT_BEIGE]: palette?.border?.warningBorder,
        [Colors.DARK_BEIGE]: palette?.textColors?.warningText,
        [Colors.LIGHT_GREEN]: palette?.border?.successBorder,
        [Colors.DARK_GREEN]: palette?.textColors?.successText,
        [Colors.LIGHT_VIOLET]: palette?.border?.secondaryBorder,
        [Colors.DARK_VIOLET]: palette?.textColors?.secondaryText,
        [Colors.LIGHT_RED]: palette?.border?.errorBorder,
        [Colors.DARK_RED]: palette?.textColors?.errorText,
        [Colors.LIGHT_GREEN_BLUE]: palette?.hugoBackground?.infoBg,
        [Colors.DARK_GREEN_BLUE]: palette?.textColors?.infoText,
        [Colors.LIGHT_GREY]: palette?.border?.neutralBorder,
        [Colors.DARK_GREY]: palette?.textColors?.neutralText,
    };
};
/**
 * Determines the contrasting confetti color based on the selected color.
 * For predefined colors in the color palette, it maps dark colors to their light variants and vice versa.
 * For custom colors (like community colors), it calculates the luminance to determine if a light or dark grey should be used.
 *
 * @returns An object containing the contrasting confetti color to use
 */
export const getConfettiColor = (selectedColor) => {
    const colors = getColorPaletteMapping();
    const colorMap = {
        // Dark -> Light
        [colors.DARK_BLUE]: colors.LIGHT_BLUE,
        [colors.DARK_BEIGE]: colors.LIGHT_BEIGE,
        [colors.DARK_GREEN]: colors.LIGHT_GREEN,
        [colors.DARK_VIOLET]: colors.LIGHT_VIOLET,
        [colors.DARK_RED]: colors.LIGHT_RED,
        [colors.DARK_GREEN_BLUE]: colors.LIGHT_GREEN_BLUE,
        [colors.DARK_GREY]: colors.LIGHT_GREY,
        // Light -> Dark
        [colors.LIGHT_BLUE]: colors.DARK_BLUE,
        [colors.LIGHT_BEIGE]: colors.DARK_BEIGE,
        [colors.LIGHT_GREEN]: colors.DARK_GREEN,
        [colors.LIGHT_VIOLET]: colors.DARK_VIOLET,
        [colors.LIGHT_RED]: colors.DARK_RED,
        [colors.LIGHT_GREEN_BLUE]: colors.DARK_GREEN_BLUE,
        [colors.LIGHT_GREY]: colors.DARK_GREY,
    };
    let communityConfettiColor = '';
    if (!colors[selectedColor]) {
        const luminance = getLuminance(selectedColor);
        communityConfettiColor =
            luminance > 0.5 ? colors.DARK_GREY : colors.LIGHT_GREY;
    }
    return { confettiColor: colorMap[selectedColor] || communityConfettiColor };
};
/**
 * Calculates the relative luminance of a color according to WCAG 2.0 specification.
 * This is used to determine if a color is light or dark for accessibility purposes.
 *
 * @param hexColor - The hex color code to calculate luminance for (e.g. "#FF0000")
 * @returns A number between 0 and 1 representing the relative luminance, where:
 *          0 = darkest black
 *          1 = brightest white
 */
export const getLuminance = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const rr = r / 255;
    const gg = g / 255;
    const bb = b / 255;
    const luminance = 0.2126 * rr + 0.7152 * gg + 0.0722 * bb;
    return luminance;
};
function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}
/** Converts RGB values (0-255) to a hex color string. */
export const rgbToHex = (r, g, b) => {
    return ('#' +
        [r, g, b]
            .map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
            .join(''));
};
/** Converts RGB values (0-255) to HSL (each component in 0-1 range). */
export const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, l };
};
/** Converts HSL values (each in 0-1 range) to RGB (0-255). */
export const hslToRgb = (h, s, l) => {
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // gris
    }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
};
/** Generates an array of monochrome color shades from a base hex color. */
export const getMonochromeColors = (baseColor, count, shadeTo = 'light', shadeIntensity = 0.65) => {
    const { r, g, b } = hexToRgb(baseColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const colors = [];
    for (let i = 0; i < count; i++) {
        const factor = i / Math.max(count - 1, 1);
        const delta = factor * shadeIntensity;
        let newL = l;
        if (shadeTo === 'light') {
            newL = Math.min(1, l + delta * (1 - l));
        }
        else {
            newL = Math.max(0, l - delta * l);
        }
        const { r: rr, g: gg, b: bb } = hslToRgb(h, s, newL);
        colors.push(rgbToHex(rr, gg, bb));
    }
    return colors;
};
/**
 * Returns a contrasting text color based on the background color's luminance.
 * Uses WCAG 2.0 luminance calculation to ensure good accessibility contrast.
 *
 * @param backgroundColor - The hex color code of the background (e.g. "#FF0000")
 * @param threshold - Luminance threshold for switching between dark and light text (default: 0.75)
 * @param lightColor - Optional light color to use for dark backgrounds (defaults to '#FFFFFF')
 * @param darkColor - Optional dark color to use for light backgrounds (defaults to '#000000')
 * @returns lightColor for dark backgrounds, darkColor for light backgrounds
 */
export const getContrastTextColor = (backgroundColor, threshold = 0.5, lightColor = '#FFFFFF', darkColor = '#000000') => {
    const luminance = getLuminance(backgroundColor);
    return luminance > threshold ? darkColor : lightColor;
};
