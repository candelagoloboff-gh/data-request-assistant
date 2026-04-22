import { type AccordionProps } from '../../design-system/Accordion/types';
import { type CheckboxProps } from '../../design-system/Checkbox/Checkbox/types';
import { type InputSearchProps } from '../../design-system/Inputs/Search/types';
import { type StateCardProps } from '../../design-system/StateCard/types';
import { type StackProps } from '@mui/material/Stack';
export type CollapsibleSelectionListProps = {
    selected?: Set<number>;
    items: {
        id: number;
        name: string;
    }[];
    title: string;
    id?: number;
    onChange?: (value: number[]) => void;
    selectionLimit?: number;
    allowSelectAll?: boolean;
    sx?: StackProps['sx'];
    itemRenderer: (item: {
        id: number;
        name?: string;
    }) => React.ReactNode;
    virtualized?: boolean;
    rowHeight?: number;
    listHeight?: number;
    overscanCount?: number;
    slotProps?: {
        search?: Omit<InputSearchProps, 'value' | 'onChange'>;
        accordion?: Omit<AccordionProps, 'title'> & {
            getDescription?: (selected: Set<number>, total: number) => string;
        };
        selectAllCheckbox?: CheckboxProps;
        stateCard?: StateCardProps;
    };
};
