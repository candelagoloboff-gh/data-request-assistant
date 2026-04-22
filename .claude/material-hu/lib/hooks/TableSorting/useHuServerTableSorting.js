import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { TableSortLabel } from '@mui/material';
import { IconArrowDown } from '@tabler/icons-react';
import TableCell from '../../components/design-system/Table/components/TableCell';
import Tooltip from '../../components/design-system/Tooltip';
/** Returns a sortable TableSortingHeader component connected to useHuPagination's form state. */
const useHuServerTableSorting = ({ form, handleChangeSort, }) => {
    const { watch } = form;
    const params = watch('params');
    const { order, orderBy } = params;
    const { t } = useTranslation('material_hu_only');
    const getTooltipTitle = (property) => {
        if (orderBy === property) {
            if (order === 'ASC') {
                return t('table_sorting.sort_by_a_z');
            }
            else if (order === 'DESC_NULLS_LAST') {
                return t('table_sorting.sort_by_z_a');
            }
        }
        return t('table_sorting.sort_by');
    };
    const TableSortingHeader = ({ children, id, disabled, tooltipTitle = getTooltipTitle(id), ...rest }) => (_jsx(TableCell, { ...rest, sortDirection: orderBy === id && order === 'ASC' ? 'asc' : 'desc', sx: { ...rest.sx, pr: 0 }, headerCell: true, children: _jsx(Tooltip, { description: tooltipTitle, disableTooltip: !tooltipTitle, direction: "bottom", children: _jsx(TableSortLabel, { active: orderBy === id && !!order, direction: (orderBy === id && (order === 'ASC' ? 'asc' : 'desc')) || 'asc', disabled: disabled, IconComponent: IconArrowDown, onClick: () => handleChangeSort(id), sx: {
                    '& .MuiTableSortLabel-icon': {
                        width: 16,
                        height: 16,
                    },
                    '&:hover': {
                        color: theme => theme.palette.textColors?.neutralText,
                        '& .MuiTableSortLabel-icon': {
                            color: theme => theme.palette.textColors?.neutralTextDisabled,
                        },
                    },
                }, children: children }) }) }));
    return TableSortingHeader;
};
export default useHuServerTableSorting;
