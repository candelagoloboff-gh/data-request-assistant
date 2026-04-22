import { type UseFormReturn } from 'react-hook-form';
import { type TableCellProps } from '@mui/material';
import { type FormValues } from '../useHuPagination';
export type HuTableSortingHeaderProps = TableCellProps & {
    id: string;
    disabled?: boolean;
    tooltipTitle?: string;
};
/** Returns a sortable TableSortingHeader component connected to useHuPagination's form state. */
declare const useHuServerTableSorting: ({ form, handleChangeSort, }: {
    form: UseFormReturn<FormValues, undefined>;
    handleChangeSort: (newOrderBy: string) => void;
}) => ({ children, id, disabled, tooltipTitle, ...rest }: HuTableSortingHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default useHuServerTableSorting;
