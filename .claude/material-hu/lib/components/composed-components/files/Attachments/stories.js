import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormAttachments from './form';
import Attachments from '.';
const mockAttachment = {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.20minutos.es%2Fuploads%2Fimagenes%2F2024%2F05%2F15%2Funa-imagen-creada-por-la-herramienta-imagen-3-de-google.jpeg&f=1&nofb=1&ipt=14a3f0f9f5cd7a85de34990d17d6ec5d2ddb9d80c483c2dc984d1a4d2a9e181c',
    name: 'imagen-ardilla',
    type: 'IMAGE',
    size: '11MB',
    bytes: 11213,
};
const meta = {
    component: Attachments,
    title: 'Composed Components/Files/Attachments',
    tags: ['autodocs'],
    args: {
        upload: async () => mockAttachment,
        attachments: [
            {
                ...mockAttachment,
                id: 0,
                file: new File(['foo'], 'foo.txt', {
                    type: 'text/plain',
                }),
            },
            {
                ...mockAttachment,
                id: 1,
                name: 'foo.xlsb',
                file: new File(['foo'], 'foo.xlsb'),
            },
        ],
        editRules: {},
    },
};
export default meta;
export const Default = {};
export const FormAttachmentsEmpty = {
    render: args => {
        const form = useForm({
            defaultValues: {
                attachments: [],
            },
            mode: 'onChange',
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormAttachments, { inputProps: {
                    editing: true,
                    emptyDescription: 'Subí videos, imágenes, PDFs u otros archivos para complementar el contenido de la librería.',
                    ...args,
                }, name: "attachments" }) }));
    },
};
export const FormAttachmentsWithOne = {
    render: args => {
        const form = useForm({
            defaultValues: {
                attachments: args.attachments,
            },
            mode: 'onChange',
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormAttachments, { inputProps: {
                    editing: true,
                    emptyDescription: 'Subí videos, imágenes, PDFs u otros archivos para complementar el contenido de la librería.',
                    ...args,
                }, name: "attachments" }) }));
    },
};
