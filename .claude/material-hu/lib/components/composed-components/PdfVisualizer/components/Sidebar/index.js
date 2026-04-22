import { jsx as _jsx } from "react/jsx-runtime";
import CollapsibleInfoSidebar from '../../../CollapsibleInfoSidebar';
import { IconFiles } from '@tabler/icons-react';
import ThumbnailsContent from '../ThumbnailsContent';
const ITEMS = [
    {
        Icon: IconFiles,
        content: _jsx(ThumbnailsContent, {}),
    },
];
const Sidebar = ({ defaultExpanded }) => {
    return (_jsx(CollapsibleInfoSidebar, { items: ITEMS, position: "right", defaultExpandedIndex: defaultExpanded ? 0 : undefined }));
};
export default Sidebar;
