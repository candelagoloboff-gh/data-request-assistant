import { jsx as _jsx } from "react/jsx-runtime";
import { List, useGridCallbackRef, useGridRef, useListCallbackRef, useListRef, } from 'react-window';
const VirtualizedList = ({ ...props }) => {
    return _jsx(List, { ...props });
};
export { useListRef, useListCallbackRef, useGridRef, useGridCallbackRef };
export default VirtualizedList;
