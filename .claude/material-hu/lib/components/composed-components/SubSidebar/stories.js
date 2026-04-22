import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { IconCircleCheck, IconCircles, IconTemplate, } from '@tabler/icons-react';
import SubSidebar from '.';
const sections = [
    [1, 2],
    [1, 2],
];
const meta = {
    component: SubSidebar,
    title: 'Composed Components/SubSidebar',
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Complex = {
    args: {
        title: 'Title',
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                text: {
                    copetin: `Copetin ${index}.${item}`,
                    title: `Item ${index}.${item} - very long name that will overflow and it will be truncated with ellipsis.`,
                    description: `Description ${index}.${item}`,
                    withEllipsis: true,
                    overflow: 'tooltip',
                },
                avatar: {
                    Icon: IconCircles,
                },
                sideContent: _jsx(IconCircleCheck, {}),
            })),
        })),
    },
};
export const Simple = {
    args: {
        title: 'Title',
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                text: {
                    title: `Item ${index}.${item}`,
                },
            })),
        })),
    },
};
export const ItemsLoading = {
    args: {
        title: 'Title',
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                loading: true,
            })),
        })),
    },
};
export const WithoutTitle = {
    args: {
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                text: {
                    title: `Item ${index}.${item}`,
                },
            })),
        })),
    },
};
export const OverflowDefault = {
    args: {
        title: 'Title',
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                text: {
                    title: `Item ${index}.${item} - very long name that will overflow and it will NOT be truncated with ellipsis.`,
                },
            })),
        })),
    },
};
export const OverflowEllipsis = {
    args: {
        title: 'Title',
        value: '1.1',
        sections: sections.map((section, index) => ({
            value: index,
            title: `Section ${index}`,
            items: section.map(item => ({
                value: `${index}.${item}`,
                text: {
                    title: `Item ${index}.${item} - very long name that will overflow and it will be truncated with ellipsis.`,
                    withEllipsis: true,
                    overflow: 'tooltip',
                },
            })),
        })),
    },
};
export const WithAccordions = {
    name: 'With Accordions + Collapsible',
    args: {
        isCollapsible: true,
        isCollapsed: true,
        onChange: (value) => {
            alert(`Lecture ${value} clicked`);
        },
        defaultOpenAccordions: [1],
        accordionSections: [
            {
                title: 'Module 1',
                value: 1,
                avatar: {
                    src: 'https://humand-dev.b-cdn.net/images/goal.png?token=5W8ioLPIXPFYN9yQgyv-x5d7HtJPVe-XPiOCNKyssYA&expires=1747420418',
                },
                items: [
                    {
                        text: { title: 'Lecture 1.1' },
                        value: '1.1',
                        sideContent: _jsx(IconCircleCheck, {}),
                        selected: true,
                        avatar: { Icon: IconTemplate },
                    },
                    {
                        text: { title: 'Lecture 1.2' },
                        value: '1.2',
                        sideContent: _jsx(IconCircleCheck, {}),
                        avatar: { Icon: IconTemplate },
                    },
                ],
            },
            {
                title: 'Module 2',
                value: 2,
                avatar: { text: '🤔' },
                items: [
                    {
                        text: { title: 'Lecture 2.1' },
                        value: '2.1',
                        disabled: true,
                        sideContent: _jsx(IconCircleCheck, {}),
                        avatar: { Icon: IconTemplate },
                    },
                    {
                        text: { title: 'Lecture 2.2' },
                        value: '2.2',
                        disabled: true,
                        sideContent: _jsx(IconCircleCheck, {}),
                        avatar: { Icon: IconTemplate },
                    },
                ],
            },
        ],
    },
};
export const WithSubItems = {
    render: args => {
        const [value, setValue] = useState('0.1');
        return (_jsx(SubSidebar, { ...args, value: value, onChange: newValue => setValue(newValue) }));
    },
    args: {
        title: 'Title',
        value: '0.1',
        sections: Array.from({ length: 2 }, (_, sectionIdx) => ({
            value: sectionIdx,
            title: `Section ${sectionIdx}`,
            items: Array.from({ length: 2 }, (_1, itemIdx) => ({
                value: `${sectionIdx}.${itemIdx}`,
                text: {
                    title: `Item ${sectionIdx}.${itemIdx}`,
                    withEllipsis: true,
                    overflow: 'tooltip',
                },
                sideContent: _jsx(IconCircleCheck, {}),
                items: sectionIdx === 0
                    ? Array.from({ length: 2 }, (_2, childIdx) => ({
                        value: `${sectionIdx}.${itemIdx}.${childIdx}`,
                        text: {
                            title: `Item ${sectionIdx}.${itemIdx}.${childIdx}.`,
                            withEllipsis: true,
                            overflow: 'tooltip',
                        },
                        sideContent: _jsx(IconCircleCheck, {}),
                        items: itemIdx === 1
                            ? Array.from({ length: 2 }, (_3, grandIdx) => ({
                                value: `${sectionIdx}.${itemIdx}.${childIdx}.${grandIdx}`,
                                text: {
                                    title: `Item ${sectionIdx}.${itemIdx}.${childIdx}.${grandIdx}`,
                                    withEllipsis: true,
                                    overflow: 'tooltip',
                                },
                                sideContent: _jsx(IconCircleCheck, {}),
                            }))
                            : undefined,
                    }))
                    : undefined,
            })),
        })),
    },
};
