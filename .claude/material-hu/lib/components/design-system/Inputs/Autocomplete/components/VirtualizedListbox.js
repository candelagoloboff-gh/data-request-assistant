import { jsx as _jsx } from "react/jsx-runtime";
import { Children, forwardRef, useCallback, useRef, useState, } from 'react';
import { List } from 'react-window';
const DEFAULT_ROW_HEIGHT = 48;
const MAX_HEIGHT = 240;
const OVERSCAN_COUNT = 5;
const VirtualRow = ({ index, style, items, onRowMeasured, }) => {
    const item = items[index];
    const measureRef = useCallback((node) => {
        if (node) {
            const measured = node.getBoundingClientRect().height;
            if (measured > 0) {
                onRowMeasured(index, measured);
            }
        }
    }, [index, onRowMeasured]);
    return (_jsx("div", { style: style, children: _jsx("div", { ref: measureRef, children: item }) }));
};
const VirtualizedListbox = forwardRef(({ children, ...props }, ref) => {
    const items = Children.toArray(children);
    const rowHeightsRef = useRef({});
    const [measureGeneration, setMeasureGeneration] = useState(0);
    // biome-ignore lint/correctness/useExhaustiveDependencies: measureGeneration creates a new function identity to force react-window to recompute row positions
    const getRowHeight = useCallback((index) => rowHeightsRef.current[index] ?? DEFAULT_ROW_HEIGHT, [measureGeneration]);
    const onRowMeasured = useCallback((index, height) => {
        if (rowHeightsRef.current[index] !== height) {
            rowHeightsRef.current[index] = height;
            setMeasureGeneration(g => g + 1);
        }
    }, []);
    return (_jsx("div", { ref: ref, ...props, style: { ...props.style, overflow: 'hidden' }, children: _jsx(List, { rowCount: items.length, rowHeight: getRowHeight, style: { maxHeight: MAX_HEIGHT }, overscanCount: OVERSCAN_COUNT, rowComponent: VirtualRow, rowProps: { items, onRowMeasured } }) }));
});
VirtualizedListbox.displayName = 'VirtualizedListbox';
export default VirtualizedListbox;
