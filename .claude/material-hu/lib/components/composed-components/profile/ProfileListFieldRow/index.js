import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Chip from '../../../design-system/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconChevronRight } from '@tabler/icons-react';
import useProfileDataDrawer from '../useProfileDataDrawer';
const ProfileListFieldRow = ({ field, texts }) => {
    const { openDrawer } = useProfileDataDrawer(field, texts);
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 2,
            m: -1,
            p: 1,
            '&:hover': {
                background: theme => theme.palette.action.hover,
                cursor: 'pointer',
            },
        }, onClick: () => openDrawer(), children: [_jsxs(Stack, { sx: { width: 0, flex: 1, overflow: 'hidden' }, children: [_jsx(Typography, { variant: "globalXXS", sx: {
                            color: ({ palette }) => palette.new.text.neutral.lighter,
                            mb: 1,
                        }, children: field.name }), _jsx(Stack, { sx: {
                            flexDirection: 'row',
                            gap: 0.5,
                            alignItems: 'center',
                            overflow: 'hidden',
                        }, children: field.value.map((item, index) => (_jsx(Chip, { label: item, size: "small", sx: { pointerEvents: 'none' } }, `${item}|${index}`))) })] }), _jsx(Stack, { sx: { flexShrink: 0, p: 1 }, children: _jsx(IconChevronRight, { size: 24 }) })] }));
};
export default ProfileListFieldRow;
