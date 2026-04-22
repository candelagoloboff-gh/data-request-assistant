import React from 'react';
import { useSnackbar } from '..';
const SnackbarWrapper = props => {
    const { enqueueSnackbar } = useSnackbar();
    React.useEffect(() => {
        enqueueSnackbar(props);
    }, [props]);
    return null;
};
export default SnackbarWrapper;
