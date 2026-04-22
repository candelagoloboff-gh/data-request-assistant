import { type Direction, type ThemeOptions } from '@mui/material';
type Config = {
    direction?: Direction;
    color?: string;
};
export declare const createOptions: (config: Config) => ThemeOptions;
export default createOptions;
