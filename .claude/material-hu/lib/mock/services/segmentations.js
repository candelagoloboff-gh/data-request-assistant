import { segmentations as mockSegmentations } from '../data/segmentations';
const segmentationsService = {
    getSegmentations: async (search = '') => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        let filteredSegmentations = mockSegmentations;
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            filteredSegmentations = mockSegmentations
                .map(group => ({
                ...group,
                items: group.items.filter(item => item.name.toLowerCase().includes(searchLower) ||
                    group.name.toLowerCase().includes(searchLower)),
            }))
                .filter(group => group.items.length > 0);
        }
        return {
            data: filteredSegmentations,
        };
    },
};
export default segmentationsService;
