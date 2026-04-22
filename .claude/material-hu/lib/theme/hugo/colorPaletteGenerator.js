/**
 * Constantes y utilidad para generar paletas de tonos (50–950) a partir de un color base.
 * Alineado con las paletas estáticas de theme/hugo/colors (newBase).
 */
export const SHADE_LABELS = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
];
export const saturationAdjustment = {
    50: 0.7,
    100: 0.8,
    200: 0.9,
    300: 1.0,
    400: 1.0,
    500: 0.95,
    600: 0.85,
    700: 0.75,
    800: 0.65,
    900: 0.55,
    950: 0.75,
};
export const luminosityMap = {
    50: 97,
    100: 94,
    200: 88,
    300: 80,
    400: 70,
    500: 60,
    600: 50,
    700: 42,
    800: 35,
    900: 30,
    950: 20,
};
export function hexToHSL(hex) {
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    const l = (max + min) / 2;
    let s = 0;
    if (delta !== 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    }
    let h = 0;
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
        }
        else if (max === g) {
            h = ((b - r) / delta + 2) / 6;
        }
        else {
            h = ((r - g) / delta + 4) / 6;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
}
export function hslToHex(hsl) {
    const h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;
    const hueToRgb = (p, q, t) => {
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
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }
    const toHex = (value) => {
        const hex = Math.round(value * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function getBaseSaturation(hue, saturation) {
    const normalizedHue = ((hue % 360) + 360) % 360;
    const hueRad = (normalizedHue * Math.PI) / 180;
    const wave = 25 * Math.cos(hueRad - Math.PI / 3);
    const purpleDist = Math.min(Math.abs(normalizedHue - 265), 30);
    const purpleBoost = 25 * Math.exp(-((purpleDist / 15) ** 2));
    const brownDist = Math.min(Math.abs(normalizedHue - 25), 20);
    const brownReduction = 40 * Math.exp(-((brownDist / 10) ** 2));
    const hueAdjustment = wave + purpleBoost - brownReduction;
    const centerSat = saturation + hueAdjustment;
    const range = 20;
    return {
        min: Math.max(0, Math.min(100, Math.round(centerSat - range))),
        max: Math.max(0, Math.min(100, Math.round(centerSat + range))),
    };
}
function generateShade(baseColorHSL, shade, _baseColorShade) {
    const hue = baseColorHSL.h;
    const saturation = baseColorHSL.s;
    if (saturation === 0) {
        let luminosity = luminosityMap[shade] ?? 50;
        if (shade === 950)
            luminosity = 11;
        else if (shade === 900)
            luminosity = 17;
        return { h: hue, s: 0, l: luminosity };
    }
    const baseSat = getBaseSaturation(hue, saturation);
    const adjustment = saturationAdjustment[shade] ?? 1.0;
    const calculatedSaturation = Math.round(baseSat.min + (baseSat.max - baseSat.min) * adjustment);
    let luminosity = luminosityMap[shade] ?? 50;
    if ((hue >= 55 && hue <= 80) || (hue >= 250 && hue <= 280)) {
        if (shade === 50)
            luminosity = 98;
        else if (shade === 100)
            luminosity = 95;
    }
    return {
        h: hue,
        s: calculatedSaturation,
        l: luminosity,
    };
}
function findPlaceInScale(baseColorHSL, options) {
    if (options.fixToShade)
        return options.fixToShade;
    const baseLuminosity = baseColorHSL.l;
    let closestShade = 500;
    let minDifference = Infinity;
    for (const shade of SHADE_LABELS) {
        const shadeLuminosity = luminosityMap[shade];
        const difference = Math.abs(baseLuminosity - shadeLuminosity);
        if (difference < minDifference) {
            minDifference = difference;
            closestShade = shade;
        }
    }
    return closestShade;
}
function generatePalette(baseColorHSL, baseColorShade, shouldIncludeBaseColor) {
    const palette = {};
    for (const shade of SHADE_LABELS) {
        palette[shade] = hslToHex(baseColorShade === shade && shouldIncludeBaseColor
            ? baseColorHSL
            : generateShade(baseColorHSL, shade, baseColorShade));
    }
    return palette;
}
export function generateColorPalette(baseColorHex, options = {}) {
    const { shouldIncludeBaseColor = true, fixToShade = undefined } = options;
    const baseColorHSL = hexToHSL(baseColorHex);
    const baseColorShade = findPlaceInScale(baseColorHSL, { fixToShade });
    const palette = generatePalette(baseColorHSL, baseColorShade, shouldIncludeBaseColor);
    return { palette, baseColorShade };
}
