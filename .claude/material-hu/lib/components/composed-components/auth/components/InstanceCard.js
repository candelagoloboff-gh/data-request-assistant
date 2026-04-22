import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import SelectionCard from '../../../../components/composed-components/SelectionCard';
const InstanceCard = ({ name, logo }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsxs(Stack, { sx: {
            gap: 1,
        }, children: [_jsx(SelectionCard, { checked: false, sx: {
                    minWidth: '160px',
                    minHeight: '80px',
                    width: 'fit-content',
                    border: 'none',
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    '&': {
                        cursor: 'default',
                        alignItems: 'center',
                    },
                    '&:hover': {
                        boxShadow: 'none',
                    },
                }, children: _jsx("img", { alt: t('login.community_logo_alt'), src: logo, style: {
                        maxHeight: '65px',
                        maxWidth: '128px',
                        objectFit: 'contain',
                    } }) }), _jsx(Typography, { variant: "globalXS", sx: {
                    color: theme => theme.palette.new.text.neutral.lighter,
                }, children: name })] }));
};
export default InstanceCard;
