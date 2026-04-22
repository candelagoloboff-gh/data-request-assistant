import { Cake, East } from '@mui/icons-material';
import Breadcrumbs from '.';
const breadcrumbsChildren = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Second',
        href: '#',
    },
    {
        title: 'Third',
        href: '#',
    },
    {
        title: 'Fourth',
        href: '#',
    },
];
const breadcrumbsChildrenCollapsed = [
    ...breadcrumbsChildren,
    {
        title: 'Fifth',
        href: '#',
    },
];
const meta = {
    component: Breadcrumbs,
    title: 'Design System/Breadcrumbs',
    tags: ['autodocs'],
    argTypes: {},
    args: {
        links: breadcrumbsChildren,
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Collapsed = {
    args: {
        links: breadcrumbsChildrenCollapsed,
    },
};
export const WithIcons = {
    args: {
        links: breadcrumbsChildren.map((link, index) => ({
            ...link,
            icon: index === 0 ? East : Cake,
        })),
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const LinkAsButton = {
    args: {
        links: breadcrumbsChildren.map((link, index) => ({
            ...link,
            href: undefined,
            onClick: () => alert(`Clicked item #${index + 1}`),
            component: 'button',
        })),
    },
};
export const Presentational = {
    args: {
        links: breadcrumbsChildren.map((link, index) => ({
            ...link,
            isPresentational: index === 0,
        })),
    },
};
