import { type CheckboxProps } from '../../design-system/Checkbox/Checkbox';
import { type StackProps } from '@mui/material/Stack';
type Item = {
    id: number;
    name: string;
};
export type FilterAccordionContentProps = {
    onChangeSearch: (nextSearch: string) => void;
    searchValue: string;
    searchLabel?: string;
    noResultsTitle?: string;
    noResultsDescription?: string;
    allCheckboxProps?: CheckboxProps;
    slotProps?: Partial<{
        root: StackProps;
    }>;
    items: Item[];
    getItemCheckboxProps: (item: Item) => CheckboxProps;
    hasMoreItems?: boolean;
    loadMoreTriggerRef?: StackProps['ref'];
    loading?: boolean;
};
export {};
