declare enum Colors {
    LIGHT_BLUE = "LIGHT_BLUE",
    DARK_BLUE = "DARK_BLUE",
    LIGHT_BEIGE = "LIGHT_BEIGE",
    DARK_BEIGE = "DARK_BEIGE",
    LIGHT_GREEN = "LIGHT_GREEN",
    DARK_GREEN = "DARK_GREEN",
    LIGHT_VIOLET = "LIGHT_VIOLET",
    DARK_VIOLET = "DARK_VIOLET",
    LIGHT_RED = "LIGHT_RED",
    DARK_RED = "DARK_RED",
    LIGHT_GREEN_BLUE = "LIGHT_GREEN_BLUE",
    DARK_GREEN_BLUE = "DARK_GREEN_BLUE",
    LIGHT_GREY = "LIGHT_GREY",
    DARK_GREY = "DARK_GREY"
}
/**
 * Creates a mapping using some colors from Hugo theme palette.
 *
 * @returns An object mapping Colors enum values to their corresponding theme palette colors
 */
export declare const getColorPaletteMapping: () => Record<Colors, string>;
/**
 * Determines the contrasting confetti color based on the selected color.
 * For predefined colors in the color palette, it maps dark colors to their light variants and vice versa.
 * For custom colors (like community colors), it calculates the luminance to determine if a light or dark grey should be used.
 *
 * @returns An object containing the contrasting confetti color to use
 */
export declare const getConfettiColor: (selectedColor: string) => {
    confettiColor: string;
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
export declare const getLuminance: (hexColor: string) => number;
/** Converts RGB values (0-255) to a hex color string. */
export declare const rgbToHex: (r: number, g: number, b: number) => string;
/** Converts RGB values (0-255) to HSL (each component in 0-1 range). */
export declare const rgbToHsl: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
/** Converts HSL values (each in 0-1 range) to RGB (0-255). */
export declare const hslToRgb: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
/** Generates an array of monochrome color shades from a base hex color. */
export declare const getMonochromeColors: (baseColor: string, count: number, shadeTo?: "light" | "dark", shadeIntensity?: number) => string[];
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
export declare const getContrastTextColor: (backgroundColor: string, threshold?: number, lightColor?: string, darkColor?: string) => string;
export {};
