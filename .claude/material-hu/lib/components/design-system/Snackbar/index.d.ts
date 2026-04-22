import { type SnackbarKey, SnackbarProvider } from 'notistack';
import { type SnackbarProps } from './types';
export declare const useSnackbar: () => {
    enqueueSnackbar: (props: SnackbarProps) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
};
export type { SnackbarProps, SnackbarKey };
export { SnackbarProvider };
export default useSnackbar;
