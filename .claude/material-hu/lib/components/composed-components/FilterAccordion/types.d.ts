import { type AdaptiveTextListProps } from './components/AdaptiveTextList/types';
export type FilterAccordionProps = {
    name: string;
    expanded: boolean;
    onChange: (expanded: boolean) => void;
    allChecked: boolean;
    previewItems: string[];
    allItemsCount: number;
    getAndText: AdaptiveTextListProps['getAndText'];
    getMoreText: AdaptiveTextListProps['getMoreText'];
    children: React.ReactNode;
};
