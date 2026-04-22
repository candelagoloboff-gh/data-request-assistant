import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { IconSearch } from '@tabler/icons-react';
import InputClassic from '../Classic';
export const InputSearch = ({ variant = 'classic', ...inputProps }) => {
    const { t } = useTranslation('material_hu_only');
    return (_jsx(InputClassic, { placeholder: t('hu_inputs.search_placeholder'), startAdornment: _jsx(IconSearch, {}), hasCounter: false, ...inputProps, sx: {
            '& .MuiInputBase-root': {
                backgroundColor: theme => variant === 'custom'
                    ? theme.palette.new.action.background.neutral.hover
                    : undefined,
                pl: variant === 'custom' ? 1.5 : 2,
                '& .MuiInputBase-input': {
                    p: variant === 'custom' ? 1.5 : 2,
                    pl: 0,
                },
            },
            ...inputProps?.sx,
        } }));
};
export default InputSearch;
