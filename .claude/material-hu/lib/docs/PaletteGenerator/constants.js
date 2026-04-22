import { hslToHex } from '../../theme/hugo/colorPaletteGenerator';
export const SIZE = 24;
export const MAX_PALETTES = 5;
export const hueToHex = (h) => hslToHex({ h, s: 100, l: 50 });
export const HUE_GRADIENT = `linear-gradient(to right,
  ${hueToHex(0)}, ${hueToHex(60)}, ${hueToHex(120)}, ${hueToHex(180)},
  ${hueToHex(240)}, ${hueToHex(300)}, ${hueToHex(360)}
)`;
