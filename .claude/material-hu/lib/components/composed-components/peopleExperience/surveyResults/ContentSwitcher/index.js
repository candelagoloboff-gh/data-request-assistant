import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ButtonGroup from '../../../../design-system/ButtonGroup';
import CardContainer from '../../../../design-system/CardContainer';
import Title from '../../../../design-system/Title';
import Stack from '@mui/material/Stack';
const ContentSwitcher = ({ title, options }) => {
    const labels = options.map(option => option.label);
    const [selectedOption, setSelectedOption] = useState(0);
    const currentTitle = typeof title === 'function' ? title(options[selectedOption]) : title;
    return (_jsx(CardContainer, { padding: 24, fullWidth: true, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }, children: [_jsx(Title, { title: currentTitle }), _jsx(ButtonGroup, { labels: labels, value: selectedOption, onChange: nextValue => {
                                if (nextValue !== null) {
                                    setSelectedOption(nextValue);
                                }
                            }, fixedCheck: true })] }), options[selectedOption].content] }) }));
};
export default ContentSwitcher;
