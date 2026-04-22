import { ITEM_GAP_PX } from './constants';
export const getVirtualRowStyle = (virtualRow, isLast) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    transform: `translateY(${virtualRow.start}px)`,
    ...(isLast ? {} : { paddingBottom: ITEM_GAP_PX }),
});
