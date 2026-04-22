import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Collapse, Stack } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import CardContainer from '../../design-system/CardContainer';
import Switcher from '../../design-system/Switcher';
import Title from '../../design-system/Title';
import Tooltip from '../../design-system/Tooltip';
function SwitcherCard({ children, onContentToggle, disabled, slotProps = {}, sx, open, }) {
    const [isOpen, setIsOpen] = useState(!!open);
    const handleContentToggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        onContentToggle?.(isOpen);
    }, [isOpen, onContentToggle]);
    return (_jsxs(CardContainer, { sx: {
            border: 'none',
            backgroundColor: theme => theme.palette.new.background.layout.default,
            gap: 2,
            ...sx,
        }, ...slotProps.root, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }, children: [slotProps?.title && (_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            flexGrow: 1,
                            gap: 1,
                            alignItems: 'center',
                            color: theme => theme.palette.new.text.neutral.default,
                        }, children: [_jsx(Title, { variant: "S", title: slotProps?.title?.title, description: slotProps?.title?.description, sx: slotProps?.title?.sx, ...slotProps.title }), slotProps?.tooltip && (_jsx(Tooltip, { ...slotProps.tooltip, children: _jsx(IconInfoCircle, {}) }))] })), _jsx(Switcher, { value: isOpen, disabled: !!disabled, onChange: handleContentToggle, sx: { alignSelf: 'end', width: 'auto' }, ...slotProps.switcher })] }), _jsx(Collapse, { ...slotProps.collapse, in: isOpen, children: children })] }));
}
export default SwitcherCard;
