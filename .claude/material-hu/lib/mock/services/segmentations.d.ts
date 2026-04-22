declare const segmentationsService: {
    getSegmentations: (search?: string) => Promise<{
        data: {
            id: number;
            name: string;
            items: {
                id: number;
                name: string;
            }[];
        }[];
    }>;
};
export default segmentationsService;
