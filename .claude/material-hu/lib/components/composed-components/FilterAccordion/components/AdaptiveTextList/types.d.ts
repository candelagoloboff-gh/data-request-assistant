export type AdaptiveTextListProps = {
    items: string[];
    getAndText: (left: string, right: string) => string;
    getMoreText: (count: number) => string;
    actualCount?: number;
};
