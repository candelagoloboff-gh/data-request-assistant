import { type ControllerProps } from 'react-hook-form';
import { type SliderProps } from '@mui/material';
export type LikertSliderProps = Omit<SliderProps, 'marks' | 'disableSwap'> & {
    invert?: boolean;
};
export type FormLikertSliderProps = {
    name: string;
    rules?: ControllerProps['rules'];
    inputProps?: Omit<LikertSliderProps, 'value' | 'onChange'>;
};
