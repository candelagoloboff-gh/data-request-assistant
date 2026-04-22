import { type FormHelperTextProps } from '@mui/material';
import { type InputProps } from '../../Classic/types';
export type CustomHelperTextProps = Partial<Pick<InputProps, 'helperText' | 'hasCounter' | 'maxLength' | 'value' | 'success' | 'error'>> & Omit<FormHelperTextProps, 'children'>;
