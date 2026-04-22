import { type ControllerProps } from 'react-hook-form';
import { type UseInfiniteQueryResult } from 'react-query';
import { type UserAvatarProps } from '../../UserAvatar/types';
import { type CheckboxProps } from '../../../design-system/Checkbox/Checkbox/types';
import { type InputSearchProps } from '../../../design-system/Inputs/Search/types';
import { type StateCardProps } from '../../../design-system/StateCard/types';
import { type TitleProps } from '../../../design-system/Title';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { type StackProps } from '@mui/material/Stack';
export type IndividualSelectionProps = {
    value?: Set<string | number>;
    selectedAll?: boolean;
    filterCount?: number;
    selectionLimit?: number;
    slotProps?: {
        title?: TitleProps;
        search?: Omit<InputSearchProps, 'value' | 'onChange'>;
        filterButton?: ButtonProps;
        selectAllCheckbox?: CheckboxProps;
        emptyStateCard?: StateCardProps;
        infiniteListLoaderButton?: ButtonProps;
        userAvatar?: Omit<UserAvatarProps, 'user'>;
    };
    usersQuery: UseInfiniteQueryResult;
    usersQueryDataParser: (data: any) => UserAvatarProps['user'][];
    searchValue?: string;
    onSelectAll?: (selectedAll?: boolean) => void;
    onSearch?: (search: string) => void;
    onChange?: (selectedUserIds?: Set<string | number>) => void;
    sx?: StackProps['sx'];
    idKey?: string;
};
/**
 * Props for the `FormIndividualSelection` wrapper component.
 *
 * Integrates `IndividualSelection` with react-hook-form via two `Controller` instances:
 * one for the selected user IDs (`value`) and one for the search text (`search`).
 * The `value` and `onChange` / `searchValue` and `onSearch` props are managed
 * internally by the form and should not be passed through `inputProps`.
 */
export type FormIndividualSelectionProps = {
    /** Field name path for the selected user IDs value in the form (e.g. "selectedUsers"). */
    name: string;
    /** Field name path for the search text value in the form (e.g. "search"). */
    searchName: string;
    /** Props passed to the underlying `IndividualSelection` component (excluding form-managed props). */
    inputProps: Omit<IndividualSelectionProps, 'value' | 'onChange' | 'searchValue' | 'onSearch'>;
    /** Validation rules for the value field. */
    valueRules?: ControllerProps['rules'];
    /** Validation rules for the search field. */
    searchRules?: ControllerProps['rules'];
};
