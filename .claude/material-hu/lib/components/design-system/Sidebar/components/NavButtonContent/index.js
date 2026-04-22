import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import Badge from '../../../Badge';
import Pills from '../../../Pills';
const NavButtonContent = props => {
    const { active, icon, title, info, children } = props;
    const { t } = useTranslation('material_hu_only');
    return (_jsxs(_Fragment, { children: [icon && _jsx(Stack, { sx: { width: 24, height: 24 }, children: icon }), _jsx(Stack, { sx: {
                    flexGrow: 1,
                    overflow: 'hidden',
                }, children: _jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: theme => active
                            ? theme.palette.new.text.neutral.default
                            : theme.palette.new.text.neutral.lighter,
                    }, children: title }) }), (info?.isNew || info?.customPill || !!info?.notificationCount) && (_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [!!info?.notificationCount && (_jsx(Badge, { badgeContent: info?.notificationCount, color: "primary", sx: {
                            ml: 1,
                            mr: info?.isNew || info?.customPill ? 1 : 1.25,
                        } })), (info?.isNew || info?.customPill) && (_jsx(Pills, { label: t('sidebar.new'), type: "success", hasIcon: false, size: "small", ...info?.customPill }))] })), children] }));
};
export default NavButtonContent;
