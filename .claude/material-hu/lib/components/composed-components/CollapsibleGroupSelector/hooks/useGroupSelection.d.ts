import { type Group, type ListRow } from '../types';
type UseGroupSelectionParams = {
    group: Group;
    groupFieldName: string;
    isExpanded: boolean;
    searchTerm: string;
};
declare const useGroupSelection: ({ group, groupFieldName, isExpanded, searchTerm, }: UseGroupSelectionParams) => {
    selectedCount: number;
    totalItems: number;
    allSelected: boolean;
    someSelected: boolean;
    toggleSelectAll: () => void;
    listData: ListRow[];
    listMaxHeight: number;
    hasResults: boolean;
};
export default useGroupSelection;
