import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import ButtonGroup from '../../../ButtonGroup';
import { getMeridiemDate } from '../../Time/utils';
const AmPmToolbar = ({ value, onChange }) => {
    const { t } = useTranslation('material_hu_only');
    const isAM = (value?.getHours() ?? 0) < 12;
    const selectedIndex = value ? Number(!isAM) : null;
    const handleChange = (index) => {
        if (index === null)
            return;
        const newDate = getMeridiemDate(value, index === 0);
        if (newDate)
            onChange(newDate, 'partial');
    };
    return (_jsx(ButtonGroup, { labels: [t('time_picker.am', 'AM'), t('time_picker.pm', 'PM')], value: selectedIndex, onChange: handleChange, fullWidth: true, showCheckIcon: false }));
};
export default AmPmToolbar;
