/**
 * Constantes y utilidad para generar paletas de tonos (50–950) a partir de un color base.
 * Alineado con las paletas estáticas de theme/hugo/colors (newBase).
 */
export declare const SHADE_LABELS: readonly [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
export type ShadeLabel = (typeof SHADE_LABELS)[number];
export type PaletteRecord = Record<ShadeLabel, string>;
export type GenerateColorPaletteOptions = {
    shouldIncludeBaseColor?: boolean;
    fixToShade?: ShadeLabel;
};
export type GenerateColorPaletteResult = {
    palette: PaletteRecord;
    baseColorShade: ShadeLabel;
};
export declare const saturationAdjustment: Record<ShadeLabel, number>;
export declare const luminosityMap: Record<ShadeLabel, number>;
export interface HSL {
    h: number;
    s: number;
    l: number;
}
export declare function hexToHSL(hex: string): HSL;
export declare function hslToHex(hsl: HSL): string;
export declare function generateColorPalette(baseColorHex: string, options?: GenerateColorPaletteOptions): GenerateColorPaletteResult;
