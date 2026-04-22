import { type BaseColorType } from './colors';
import { type NewPalette } from './newTokens';
declare module '@mui/material/styles' {
    interface Palette extends Partial<BaseColorType> {
        new: NewPalette;
    }
    interface PaletteOptions extends Partial<BaseColorType> {
        new?: NewPalette;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface Palette extends Partial<BaseColorType> {
        new: NewPalette;
    }
    interface PaletteOptions extends Partial<BaseColorType> {
        new?: NewPalette;
    }
}
