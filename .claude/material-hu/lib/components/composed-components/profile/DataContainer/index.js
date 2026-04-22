import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import CardContainer from '../../../design-system/CardContainer';
import ListItem from '../../../design-system/List/components/ListItem';
import useDimensions from '../../../../hooks/useDimensions';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { IconEdit } from '@tabler/icons-react';
import { getProfileDataContainerColumns } from './utils';
const DataContainer = ({ title, sections, onEdit }) => {
    const { t } = useTranslation();
    const { ref, dimensions } = useDimensions();
    const { ref: firstSectionRef, dimensions: firstSectionDimensions } = useDimensions();
    const columns = getProfileDataContainerColumns(dimensions.width);
    if (sections.length === 0) {
        return null;
    }
    return (_jsxs(CardContainer, { fullWidth: true, ref: ref, children: [_jsx(ListItem, { text: { title }, sx: { '.MuiListItem-root': { p: 0, mb: 1 } }, ...(onEdit && {
                    action: {
                        Icon: IconEdit,
                        onClick: onEdit,
                        variant: 'secondary',
                        'aria-label': `${t('general:edit')} ${title}`,
                    },
                }) }), _jsx(Grid, { container: true, columns: columns, columnSpacing: 2, children: sections.map((section, index) => {
                    const isLastColumn = index % columns === columns - 1;
                    const isLast = index === sections.length - 1;
                    return (_jsxs(Fragment, { children: [_jsx(Grid, { item: true, xs: 1, children: _jsx(Stack, { sx: {
                                        '.MuiListItem-root': { p: 0 },
                                        // titles of each section must never overflow the container
                                        '& .MuiTypography-globalXXS': {
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            maxWidth: firstSectionDimensions?.width - 1,
                                        },
                                    }, ref: index === 0 ? firstSectionRef : null, children: section }) }), isLastColumn && !isLast && (_jsx(Grid, { item: true, xs: columns, children: _jsx(Divider, { sx: { my: 1.5 } }) }))] }, index));
                }) })] }));
};
export default DataContainer;
