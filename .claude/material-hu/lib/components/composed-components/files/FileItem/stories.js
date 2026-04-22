import { jsx as _jsx } from "react/jsx-runtime";
import { IconAlertTriangle } from '@tabler/icons-react';
import FileItem from './index';
const meta = {
    component: FileItem,
    title: 'Composed Components/Files/FileItem',
    tags: ['autodocs'],
    args: {
        file: {
            name: 'archivo.pdf',
            size: 5000,
        },
        actions: [
            {
                title: 'Download',
                onClick: () => alert('Download action'),
            },
            {
                title: 'Edit',
                onClick: () => alert('Edit action'),
            },
        ],
    },
};
export default meta;
export const Default = {
    args: {},
};
export const StartContent = {
    args: {
        startContent: _jsx(IconAlertTriangle, {}),
    },
};
