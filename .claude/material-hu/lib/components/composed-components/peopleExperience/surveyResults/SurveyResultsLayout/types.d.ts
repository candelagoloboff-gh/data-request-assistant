import { type StackProps } from '@mui/material/Stack';
export type SurveyResultsLayoutProps = Omit<StackProps, 'children' | 'ref'> & {
    children: React.ReactNode;
    title: string;
    disableFilters?: boolean;
    filtersLabel?: string;
    clearFiltersLabel?: string;
    onClearFilters?: () => void;
    filtersCount?: number;
    onClickFilters?: () => void;
    loading?: boolean;
    extraActions?: React.ReactNode;
};
