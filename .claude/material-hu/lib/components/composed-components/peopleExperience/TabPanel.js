import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { Stack } from '@mui/material';
const TabPanelContext = createContext(0);
const useTab = () => {
    const context = useContext(TabPanelContext);
    if (context === undefined) {
        throw new Error('useTab must be used within a <TabPanel />');
    }
    return context;
};
export const TabPanel = ({ children, value }) => (_jsx(TabPanelContext.Provider, { value: value, children: children }));
export const TabPanelItem = ({ children, index, ...other }) => {
    const currentTab = useTab();
    return (_jsx(Stack, { role: "tabpanel", hidden: currentTab !== index, display: currentTab !== index ? 'none' : undefined, id: `tabpanel-${index}`, "aria-labelledby": `tab-${index}`, ...other, sx: { height: '100%', overflowY: 'auto', ...other.sx }, children: currentTab === index && children }));
};
