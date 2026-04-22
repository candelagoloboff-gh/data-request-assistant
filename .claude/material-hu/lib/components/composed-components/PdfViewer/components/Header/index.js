import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconArrowLeft, IconDownload } from '@tabler/icons-react';
import ToolButton from '../ToolButton';
const Header = ({ name, hideName = false, onClose, hideClose = false, onDownload, hideDownload = false, }) => {
    const { palette } = useTheme();
    const { t } = useTranslation();
    const showActions = !hideDownload;
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            width: '100%',
            height: '50px',
            position: 'fixed',
            top: 0,
            left: 0,
            background: 'linear-gradient(to bottom,rgba(0,0,0,.65) 0%,transparent 100%)',
            justifyContent: 'space-between',
            zIndex: 1,
        }, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3,
                }, children: [!hideClose && (_jsx(ToolButton, { label: t('general:close'), Icon: IconArrowLeft, onClick: onClose })), !hideName && (_jsx(Typography, { sx: {
                            color: palette.new.text.neutral.inverted,
                        }, children: name }))] }), showActions && (_jsx(Stack, { sx: { flexDirection: 'row' }, children: !hideDownload && (_jsx(ToolButton, { label: t('general:download'), Icon: IconDownload, onClick: onDownload })) }))] }));
};
export default Header;
