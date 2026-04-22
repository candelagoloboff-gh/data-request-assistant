import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AllCriteriaCard from '../../audience/AllCriteriaCard';
import IndividualCriteriaCard from '../../audience/IndividualCriteriaCard';
import SegmentationCriteriaCard from '../../audience/SegmentationCriteriaCard';
import Autocomplete from '../../../design-system/Inputs/Autocomplete';
import { insertIf } from '../../../../utils/array';
import { CriteriaTypes, } from './types';
const CriteriaAutocomplete = ({ onIndividual, onSegmentation, onAll, disabled = false, sx, slotProps = {}, }) => {
    const [value, setValue] = useState(null);
    const { t } = useTranslation('material_hu_only');
    const { root: rootProps } = slotProps;
    const options = [
        ...insertIf(!!onIndividual, {
            label: CriteriaTypes.USERS,
            value: CriteriaTypes.USERS,
            onClick: () => onIndividual?.(),
            Item: IndividualCriteriaCard,
        }),
        ...insertIf(!!onSegmentation, {
            label: CriteriaTypes.ITEMS,
            value: CriteriaTypes.ITEMS,
            onClick: () => onSegmentation?.(),
            Item: SegmentationCriteriaCard,
        }),
        ...insertIf(!!onAll, {
            label: CriteriaTypes.ALL,
            value: CriteriaTypes.ALL,
            onClick: () => onAll?.(),
            Item: AllCriteriaCard,
        }),
    ];
    const renderOption = (_, { Item, onClick }) => {
        return (_jsx(Item, { withArrow: false, onClick: onClick, sx: {
                border: 'none',
                borderRadius: '0',
            } }));
    };
    return (_jsx(Autocomplete, { value: value, onChange: () => setValue(null), disabled: disabled, label: t('audience.criteria_autocomplete_label'), placeholder: t('audience.criteria_autocomplete_placeholder'), options: options, renderOption: renderOption, sx: sx, ...rootProps }));
};
export default CriteriaAutocomplete;
