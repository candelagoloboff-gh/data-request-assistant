import { type UseQueryResult } from 'react-query';
import { type CollapsibleSelectionListProps } from '../../CollapsibleSelectionList';
import { type InputSearchProps } from '../../../design-system/Inputs/Search/types';
import { type StateCardProps } from '../../../design-system/StateCard/types';
import { type TitleProps } from '../../../design-system/Title';
import { type StackProps } from '@mui/material';
export type SegmentationGroupItem = {
    id: number;
    name: string;
};
export type SegmentationGroup = {
    id: number;
    name: string;
    items: SegmentationGroupItem[];
};
export type SegmentationGroupItemsSelectionProps = {
    segmentationsQuery: UseQueryResult;
    segmentationsQueryDataParser?: (data: any) => SegmentationGroup[];
    slotProps?: {
        title?: TitleProps;
        search?: Omit<InputSearchProps, 'value' | 'onChange'>;
        stateCard?: StateCardProps;
        collapsibleSelectionList?: Omit<CollapsibleSelectionListProps, 'selected' | 'onChange' | 'title' | 'items' | 'itemRenderer'>;
    };
    error?: {
        message: string;
    };
    sx?: StackProps['sx'];
    allowSelectAll?: boolean;
    excludedGroupsIds?: Set<number>;
    value: Record<number, Set<number>>;
    onChange: (data: {
        selectedSegmentationIds: Record<number, Set<number>>;
    }) => void;
    returnAsObject?: boolean;
};
