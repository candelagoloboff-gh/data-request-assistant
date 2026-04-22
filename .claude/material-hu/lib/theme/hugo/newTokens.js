import { alpha } from '@mui/material';
import { colorPalette } from './colors';
// In future iterations, this function will generate shades for the corresponding baseColor.
// This will allow each community to create and use their own brand colors.
export function generateBrandShades(baseColor) {
    if (!baseColor) {
        return colorPalette.newBase.brand;
    }
    // Todo: Generate brand shades based on the base color
    // See example: https://uicolors.app/generate
    return {
        50: colorPalette.newBase.brand[50],
        100: colorPalette.newBase.brand[100],
        150: colorPalette.newBase.brand[150],
        200: colorPalette.newBase.brand[200],
        300: colorPalette.newBase.brand[300],
        400: colorPalette.newBase.brand[400],
        500: colorPalette.newBase.brand[500],
        600: colorPalette.newBase.brand[600],
        700: colorPalette.newBase.brand[700],
        800: colorPalette.newBase.brand[800],
        900: colorPalette.newBase.brand[900],
        950: colorPalette.newBase.brand[950],
    };
}
function reverseColorShades(shades) {
    return {
        50: shades[950],
        100: shades[900],
        150: shades[900],
        200: shades[800],
        300: shades[700],
        400: shades[600],
        500: shades[500],
        600: shades[400],
        700: shades[300],
        800: shades[200],
        900: shades[100],
        950: shades[50],
    };
}
export function buildNewPalette(mode = 'light', baseColor) {
    const isLight = mode === 'light';
    const brandShades = generateBrandShades(baseColor);
    const reversedBrandShades = reverseColorShades(brandShades);
    return {
        background: {
            layout: {
                default: isLight
                    ? colorPalette.newBase.grey[50]
                    : colorPalette.newBase.blackInk[950],
                tertiary: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.blackInk[900],
                brand: isLight ? brandShades[50] : brandShades[950],
                inverted: isLight
                    ? colorPalette.newBase.blackInk[800]
                    : colorPalette.newBase.blackInk[50],
            },
            secondary: {
                default: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.blackInk[900],
            },
            elements: {
                default: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.blackInk[900],
                overlay: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.blackInk[800],
                grey: isLight
                    ? colorPalette.newBase.grey[100]
                    : colorPalette.newBase.blackInk[700],
                inverted: isLight
                    ? colorPalette.newBase.grey[950]
                    : colorPalette.newBase.grey[950],
                brand: isLight ? brandShades[50] : brandShades[950],
                disabled: isLight
                    ? colorPalette.newBase.grey[150]
                    : colorPalette.newBase.blackInk[800],
            },
            feedback: {
                success: isLight
                    ? colorPalette.newBase.green[50]
                    : colorPalette.newBase.green[900],
                error: isLight
                    ? colorPalette.newBase.red[50]
                    : colorPalette.newBase.red[900],
                info: isLight
                    ? colorPalette.newBase.skyBlue[50]
                    : colorPalette.newBase.skyBlue[900],
                warning: isLight
                    ? colorPalette.newBase.yellow[50]
                    : colorPalette.newBase.yellow[900],
                highlight: isLight
                    ? colorPalette.newBase.purple[50]
                    : colorPalette.newBase.purple[900],
            },
        },
        border: {
            neutral: {
                default: isLight
                    ? colorPalette.newBase.grey[200]
                    : colorPalette.newBase.blackInk[700],
                brand: isLight ? brandShades[200] : brandShades[800],
                inverted: isLight
                    ? colorPalette.newBase.grey[950]
                    : colorPalette.newBase.grey[950],
                divider: isLight
                    ? colorPalette.newBase.grey[100]
                    : colorPalette.newBase.blackInk[700],
            },
            states: {
                success: isLight
                    ? colorPalette.newBase.green[200]
                    : colorPalette.newBase.green[800],
                error: isLight
                    ? colorPalette.newBase.red[200]
                    : colorPalette.newBase.red[800],
                info: isLight
                    ? colorPalette.newBase.skyBlue[200]
                    : colorPalette.newBase.skyBlue[800],
                warning: isLight
                    ? colorPalette.newBase.yellow[200]
                    : colorPalette.newBase.yellow[800],
                secondary: isLight
                    ? colorPalette.newBase.purple[200]
                    : colorPalette.newBase.purple[800],
                highlight: isLight
                    ? colorPalette.newBase.purple[200]
                    : colorPalette.newBase.purple[800],
            },
        },
        text: {
            neutral: {
                default: isLight
                    ? colorPalette.newBase.grey[950]
                    : colorPalette.newBase.grey[50],
                lighter: isLight
                    ? colorPalette.newBase.grey[800]
                    : colorPalette.newBase.grey[100],
                brand: isLight ? brandShades[900] : brandShades[100],
                disabled: isLight
                    ? colorPalette.newBase.grey[700]
                    : colorPalette.newBase.grey[300],
                inverted: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.white,
            },
            feedback: {
                success: isLight
                    ? colorPalette.newBase.green[900]
                    : colorPalette.newBase.green[100],
                error: isLight
                    ? colorPalette.newBase.red[900]
                    : colorPalette.newBase.red[100],
                warning: isLight
                    ? colorPalette.newBase.yellow[900]
                    : colorPalette.newBase.yellow[100],
                info: isLight
                    ? colorPalette.newBase.skyBlue[900]
                    : colorPalette.newBase.skyBlue[100],
                highlight: isLight
                    ? colorPalette.newBase.purple[900]
                    : colorPalette.newBase.purple[100],
            },
        },
        icon: {
            neutral: {
                default: isLight
                    ? colorPalette.newBase.grey[950]
                    : colorPalette.newBase.grey[50],
                lighter: isLight
                    ? colorPalette.newBase.grey[800]
                    : colorPalette.newBase.grey[100],
                brand: isLight ? brandShades[900] : brandShades[100],
                disabled: isLight
                    ? colorPalette.newBase.grey[700]
                    : colorPalette.newBase.grey[300],
                inverted: isLight
                    ? colorPalette.newBase.white
                    : colorPalette.newBase.white,
            },
            feedback: {
                success: isLight
                    ? colorPalette.newBase.green[900]
                    : colorPalette.newBase.green[100],
                error: isLight
                    ? colorPalette.newBase.red[900]
                    : colorPalette.newBase.red[100],
                warning: isLight
                    ? colorPalette.newBase.yellow[900]
                    : colorPalette.newBase.yellow[100],
                info: isLight
                    ? colorPalette.newBase.skyBlue[900]
                    : colorPalette.newBase.skyBlue[100],
                highlight: isLight
                    ? colorPalette.newBase.purple[900]
                    : colorPalette.newBase.purple[100],
            },
        },
        shadows: {
            '4dp': isLight
                ? alpha(colorPalette.newBase.grey[200], 0.6)
                : colorPalette.newBase.grey[900],
            '8dp': isLight
                ? alpha(colorPalette.newBase.grey[200], 0.8)
                : colorPalette.newBase.grey[950],
            inverted: isLight
                ? colorPalette.newBase.grey[300]
                : colorPalette.newBase.grey[900],
        },
        action: {
            button: {
                background: {
                    primary: {
                        default: isLight ? brandShades[500] : brandShades[500],
                        hover: isLight ? brandShades[600] : brandShades[400],
                        focus: isLight ? brandShades[700] : brandShades[300],
                        disabled: isLight
                            ? colorPalette.newBase.grey[200]
                            : colorPalette.newBase.blackInk[700],
                    },
                    secondary: {
                        default: isLight
                            ? colorPalette.newBase.white
                            : colorPalette.newBase.blackInk[900],
                        hover: isLight ? brandShades[50] : brandShades[900],
                        focus: isLight ? brandShades[50] : brandShades[900],
                        disabled: isLight
                            ? colorPalette.newBase.white
                            : colorPalette.newBase.blackInk[900],
                    },
                    tertiary: {
                        hover: alpha(colorPalette.newBase.grey[100], 0.6),
                        focus: alpha(colorPalette.newBase.grey[100], 0.8),
                    },
                    success: {
                        default: isLight
                            ? colorPalette.newBase.green[600]
                            : colorPalette.newBase.green[600],
                        hover: isLight
                            ? colorPalette.newBase.green[700]
                            : colorPalette.newBase.green[700],
                        focus: isLight
                            ? colorPalette.newBase.green[700]
                            : colorPalette.newBase.green[700],
                        disabled: isLight
                            ? colorPalette.newBase.grey[200]
                            : colorPalette.newBase.blackInk[700],
                    },
                    error: {
                        default: isLight
                            ? colorPalette.newBase.red[600]
                            : colorPalette.newBase.red[600],
                        hover: isLight
                            ? colorPalette.newBase.red[700]
                            : colorPalette.newBase.red[700],
                        focus: isLight
                            ? colorPalette.newBase.red[700]
                            : colorPalette.newBase.red[700],
                        disabled: isLight
                            ? colorPalette.newBase.grey[200]
                            : colorPalette.newBase.blackInk[700],
                    },
                },
                text: {
                    disabled: {
                        darker: isLight
                            ? colorPalette.newBase.grey[800]
                            : colorPalette.newBase.grey[200],
                    },
                    primary: {
                        default: colorPalette.newBase.white,
                    },
                    tertiary: {
                        default: isLight
                            ? colorPalette.newBase.brand[900]
                            : colorPalette.newBase.brand[100],
                    },
                },
            },
            background: {
                brand: {
                    default: isLight ? brandShades[100] : brandShades[950],
                    hover: isLight ? brandShades[100] : brandShades[900],
                    selected: isLight ? brandShades[200] : brandShades[800],
                    disabled: isLight
                        ? colorPalette.newBase.grey[150]
                        : colorPalette.newBase.blackInk[800],
                },
                neutral: {
                    hover: isLight
                        ? alpha(colorPalette.newBase.grey[100], 0.8)
                        : colorPalette.newBase.blackInk[800],
                    focus: isLight
                        ? alpha(colorPalette.newBase.grey[100], 0.8)
                        : colorPalette.newBase.blackInk[950],
                },
            },
        },
        graphics: {
            brand: isLight ? brandShades : reversedBrandShades,
            success: colorPalette.newBase.green,
            error: colorPalette.newBase.red,
            warning: colorPalette.newBase.yellow,
            info: colorPalette.newBase.skyBlue,
            purple: colorPalette.newBase.purple,
            teal: colorPalette.newBase.teal,
            lime: colorPalette.newBase.lime,
            flamingo: colorPalette.newBase.flamingo,
            tan: colorPalette.newBase.tan,
            salmon: colorPalette.newBase.salmon,
            pink: colorPalette.newBase.pink,
            mulberry: colorPalette.newBase.mulberry,
            sunshine: colorPalette.newBase.sunshine,
            blackInk: colorPalette.newBase.blackInk,
        },
    };
}
