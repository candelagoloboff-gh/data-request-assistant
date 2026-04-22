import { jsx as _jsx } from "react/jsx-runtime";
import { Close as CloseIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
/**
 * @deprecated Use useHuSnackbar instead
 */
export const useSnackbarUtils = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const showSnackbar = (message) => {
        enqueueSnackbar(message, {
            variant: 'default',
            anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
            action: (_jsx(IconButton, { onClick: () => closeSnackbar(), children: _jsx(CloseIcon, { sx: { color: '#FFFFFF', fontSize: 'small' } }) })),
        });
    };
    return { showSnackbar };
};
export default useSnackbarUtils;
