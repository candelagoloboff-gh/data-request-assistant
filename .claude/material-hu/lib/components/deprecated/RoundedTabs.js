import { jsx as _jsx } from "react/jsx-runtime";
import { alpha, Box, Tab, Tabs, Typography, } from '@mui/material';
/**
 * @deprecated Use HuTabs instead
 */
const RoundedTabs = ({ tabs, tabIndex, disabled = false, ...tabsProps }) => (_jsx(Box, { sx: {
        mt: 2,
        width: '100%',
        border: '1px solid',
        borderColor: disabled ? '#11192761' : 'primary.main',
        borderRadius: '12px',
        height: '37px',
    }, children: _jsx(Tabs, { value: tabIndex, textColor: "primary", variant: "fullWidth", ...tabsProps, sx: {
            minHeight: '37px',
            '& .MuiTabs-indicator': {
                width: '500px',
                backgroundColor: 'transparent',
                minHeight: '30px',
                height: '30px',
            },
            ...tabsProps.sx,
        }, children: tabs.map((tab, index) => (_jsx(Tab, { label: _jsx(Typography, { sx: { fontWeight: 'bold', fontSize: '13px', color: 'primary' }, children: tab.label }), disabled: disabled, sx: {
                minHeight: '35px',
                height: '35px',
                borderRight: index === tabs.length - 1 ? 'none' : '1px solid',
                borderRadius: () => {
                    if (index === 0)
                        return '12px 0px 0px 12px';
                    if (index === tabs.length - 1)
                        return '0px 12px 12px 0px';
                    return '0px';
                },
                marginLeft: '0 !important',
                borderColor: disabled ? '#11192761' : 'primary.main',
                bgcolor: theme => {
                    if (tabIndex === index) {
                        if (disabled)
                            return '#F8F9FA';
                        return alpha(theme.palette.primary.main, 0.1);
                    }
                    return 'transparent';
                },
            } }, tab.label))) }) }));
export default RoundedTabs;
