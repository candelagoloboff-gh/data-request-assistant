import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { SEGMENTS_BLACKLIST } from './constants';
import { PxDropdownList } from '.';
const SegmentDropdown = ({ value, onChange, instanceId, surveyId, options, loading = false, }) => {
    const { t } = useTranslation('material_hu_only');
    const blackedSegmentGroup = useMemo(() => SEGMENTS_BLACKLIST.find(segment => segment.instanceId === instanceId &&
        (segment.surveyId ? segment.surveyId === surveyId : true)), [instanceId, surveyId]);
    const isSegmentBlackListed = (segment) => {
        return blackedSegmentGroup
            ? blackedSegmentGroup.segments.includes(segment.id)
            : true;
    };
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            flexWrap: 'wrap',
        }, children: [_jsx(Typography, { fontWeight: "fontWeightMedium", children: t('people_experience.segment') }), _jsx(PxDropdownList, { options: options.filter(isSegmentBlackListed), value: value, onChange: onChange, loading: loading })] }));
};
export default SegmentDropdown;
