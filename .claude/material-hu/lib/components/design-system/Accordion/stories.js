import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { IconDeviceDesktopAnalytics } from '@tabler/icons-react';
import ImgAvatar1 from '../../../../static/avatar1.png';
import { defaultOptions } from '../../composed-components/MenuList/stories';
import Accordion from '.';
const meta = {
    component: Accordion,
    title: 'Design System/Accordion',
    tags: ['autodocs'],
    argTypes: {
        customDetail: {
            control: false,
        },
        avatar: {
            description: 'See AvatarProps',
        },
        pill: {
            description: 'See PillsProps',
        },
    },
    args: {},
    parameters: {
        backgrounds: {
            values: [
                { name: 'Dark', value: '#333' },
                { name: 'Light', value: '#F7F9F2' },
            ],
            default: 'Light',
        },
    },
};
export default meta;
export const AccordionWithCustomChildren = {
    args: {
        elevation: 0,
        avatar: {
            src: ImgAvatar1,
            alt: '',
        },
        title: 'Title',
        caption: 'copetin',
        description: 'descripción',
        pill: {
            label: 'Info',
            type: 'success',
        },
        menuList: {
            options: defaultOptions,
        },
        customDetail: _jsx(_Fragment, { children: "hola" }),
        hasPadding: true,
    },
};
export const AccordionWithTextDetail = {
    args: {
        elevation: 0,
        title: '¿Como puedo hacer tal cosa?',
        textDetail: {
            description: 'Este es un texto explicativo que responde a la pregunta. Lorem ipsum dolor sit amet consectetur. Consequat elementum eleifend eget erat dictumst adipiscing sed. Condimentum varius cum nibh sed quis sociis molestie. Amet dui eget sem curabitur sed risus eget. Est egestas lobortis auctor risus. Sit nunc luctus luctus urna quis id.',
            link: 'http://www2.',
            label: 'Más información',
        },
        hasPadding: true,
    },
};
export const AccordionList = {
    render: () => {
        const accordinList = [
            {
                elevation: 0,
                avatar: {
                    src: ImgAvatar1,
                    alt: '',
                },
                title: 'Title1',
                caption: 'copetin',
                description: 'descripción',
                pill: {
                    label: 'Info',
                    type: 'warning',
                },
                customDetail: _jsx(_Fragment, { children: "hola" }),
                sx: {
                    backgroundColor: 'grey',
                },
            },
            {
                elevation: 0,
                avatar: {
                    src: ImgAvatar1,
                    alt: '',
                },
                title: 'Title1',
                caption: 'copetin',
                pill: {
                    label: 'Info',
                    type: 'warning',
                },
                customDetail: _jsx(_Fragment, { children: "hola" }),
                sx: { height: 150 },
            },
        ];
        return (_jsx(_Fragment, { children: accordinList.map(elem => (_jsx(Accordion, { disableGutters: true, ...elem }, elem.title))) }));
    },
};
export const WithAvatarAndPill = {
    args: {
        elevation: 0,
        title: 'Mesa de ayuda',
        textDetail: {
            description: 'Este es un texto explicativo que responde a la pregunta. Lorem ipsum dolor sit amet consectetur. Consequat elementum eleifend eget erat dictumst adipiscing sed. Condimentum varius cum nibh sed quis sociis molestie. Amet dui eget sem curabitur sed risus eget. Est egestas lobortis auctor risus. Sit nunc luctus luctus urna quis id.',
            link: 'http://www2.',
            label: 'Más información',
        },
        description: '5 Colaboradores',
        avatar: {
            Icon: IconDeviceDesktopAnalytics,
            color: 'highlight',
        },
        pill: {
            label: 'Activo',
            type: 'success',
            hasIcon: false,
        },
        hasPadding: true,
    },
};
