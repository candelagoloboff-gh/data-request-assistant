export type ShadeKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type BaseShadeMap = {
    [K in ShadeKey]: string;
} & {
    [K in `${ShadeKey}`]: string;
};
export type ShadeMap = BaseShadeMap & {
    [key: number]: string | undefined;
};
export type NewPalette = {
    background: {
        layout: {
            default: string;
            tertiary: string;
            brand: string;
            inverted: string;
        };
        secondary: {
            default: string;
        };
        elements: {
            default: string;
            overlay: string;
            grey: string;
            brand: string;
            inverted: string;
            disabled: string;
        };
        feedback: {
            success: string;
            error: string;
            info: string;
            warning: string;
            highlight: string;
        };
    };
    border: {
        neutral: {
            default: string;
            brand: string;
            inverted: string;
            divider: string;
        };
        states: {
            success: string;
            error: string;
            warning: string;
            secondary: string;
            info: string;
            highlight: string;
        };
    };
    text: {
        neutral: {
            default: string;
            brand: string;
            inverted: string;
            lighter: string;
            disabled: string;
        };
        feedback: {
            success: string;
            error: string;
            warning: string;
            info: string;
            highlight: string;
        };
    };
    icon: {
        neutral: {
            default: string;
            brand: string;
            inverted: string;
            lighter: string;
            disabled: string;
        };
        feedback: {
            success: string;
            error: string;
            warning: string;
            info: string;
            highlight: string;
        };
    };
    shadows: {
        '4dp': string;
        '8dp': string;
        inverted: string;
    };
    action: {
        button: {
            background: {
                primary: {
                    default: string;
                    hover: string;
                    focus: string;
                    disabled: string;
                };
                secondary: {
                    default: string;
                    hover: string;
                    focus: string;
                    disabled: string;
                };
                tertiary: {
                    hover: string;
                    focus: string;
                };
                success: {
                    default: string;
                    hover: string;
                    focus: string;
                    disabled: string;
                };
                error: {
                    default: string;
                    hover: string;
                    focus: string;
                    disabled: string;
                };
            };
            text: {
                disabled: {
                    darker: string;
                };
                primary: {
                    default: string;
                };
                tertiary: {
                    default: string;
                };
            };
        };
        background: {
            brand: {
                default: string;
                hover: string;
                selected: string;
                disabled: string;
            };
            neutral: {
                hover: string;
                focus: string;
            };
        };
    };
    graphics: {
        brand: ShadeMap;
        success: ShadeMap;
        error: ShadeMap;
        warning: ShadeMap;
        info: ShadeMap;
        purple: ShadeMap;
        teal: ShadeMap;
        lime: ShadeMap;
        flamingo: ShadeMap;
        tan: ShadeMap;
        salmon: ShadeMap;
        pink: ShadeMap;
        mulberry: ShadeMap;
        sunshine: ShadeMap;
        blackInk: ShadeMap;
    };
};
export declare function generateBrandShades(baseColor?: string): ShadeMap;
export declare function buildNewPalette(mode?: 'light' | 'dark', baseColor?: string): NewPalette;
export {};
