import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import HTMLBody from '../../../composed-components/HTMLBody';
import FormTextArea from './form';
import TextArea from '.';
const sampleUploader = (file) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const blobUrl = URL.createObjectURL(file);
            const attachment = {
                url: blobUrl,
                name: file.name,
                type: file.type,
                size: `${(file.size / 1024).toFixed(2)} KB`,
                bytes: file.size,
            };
            resolve({
                status: 'default',
                file,
                attachment,
            });
        }, 200);
    });
};
const defaultSlotProps = {
    insertImage: {
        uploaderProps: {
            uploadFunction: sampleUploader,
        },
    },
    uploadVideo: {
        uploaderProps: {
            uploadFunction: sampleUploader,
        },
    },
};
const meta = {
    component: TextArea,
    title: 'Design System/TextArea',
    tags: ['autodocs'],
    decorators: [
        Story => {
            const methods = useForm({
                defaultValues: {
                    content: '',
                },
            });
            return (_jsx(FormProvider, { ...methods, children: _jsx(Story, {}) }));
        },
    ],
    argTypes: {
        label: {
            description: 'Texto del label',
            control: 'text',
        },
        success: {
            description: 'Indica si el área de texto está en estado de éxito',
            control: 'boolean',
        },
        simplifyEditor: {
            description: 'Limita la cantidad de opciones disponibles en la barra de herramientas',
            control: 'boolean',
        },
        error: {
            description: 'Indica si el área de texto está en estado de error',
            control: 'boolean',
        },
        errorText: {
            description: 'Texto de error personalizado',
            control: 'text',
        },
        helperText: {
            description: 'Texto de ayuda',
            control: 'text',
        },
        content: {
            description: 'Contenido inicial del área de texto',
            control: 'text',
        },
        placeholder: {
            description: 'Texto de placeholder cuando el área está vacía',
            control: 'text',
        },
        disabled: {
            description: 'Indica si el área de texto está deshabilitada',
            control: 'boolean',
        },
    },
};
export default meta;
export const Default = {
    args: {
        content: '',
        placeholder: 'Escribe algo...',
        slotProps: defaultSlotProps,
    },
};
export const SimplifiedEditor = {
    args: {
        content: '',
        placeholder: 'Escribe algo...',
        slotProps: defaultSlotProps,
        simplifyEditor: true,
    },
};
export const WithContent = {
    args: {
        content: `<h1>Este es un contenido inicial con texto <strong>en negrita</strong> y <em>en cursiva</em>.</h1>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Este es un enlace</a>
      <br />
      <img src="https://picsum.photos/200/300" />
      `,
        placeholder: 'Escribe algo...',
        slotProps: defaultSlotProps,
    },
};
export const WithEvents = {
    args: {
        content: `<h1>Este es un contenido inicial con texto <strong>en negrita</strong> y <em>en cursiva</em>.</h1>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Este es un enlace</a>
      <br />
      <img src="https://picsum.photos/200/300" />
      `,
        placeholder: 'Escribe algo...',
        slotProps: defaultSlotProps,
        onBlur: () => console.debug('blur'),
        onFocus: () => console.debug('focus'),
    },
};
export const WithExtraActions = {
    args: {
        content: `<h1>Este es un contenido inicial con texto <strong>en negrita</strong> y <em>en cursiva</em>.</h1>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Este es un enlace</a>
      <br />
      <img src="https://picsum.photos/200/300" />
      `,
        placeholder: 'Escribe algo...',
        slotProps: defaultSlotProps,
        actions: {
            table: true,
            embedHTML: true,
            insertEmoji: true,
        },
    },
};
export const CustomToolbar = {
    args: {
        content: '',
        placeholder: 'Placeholder',
        visibleActions: [
            'insertEmoji',
            'bold',
            'italic',
            'underline',
            'strike',
            'insertLink',
            'unorderedList',
            'orderedList',
        ],
    },
};
// Function to prettify html adding \n and \t to each tag
const prettifyHtml = (html) => {
    return html?.replaceAll('><', '>\n<');
};
export const FormTextAreaStory = {
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        helperText: 'Helper text',
        content: 'value!',
        disabled: false,
        slotProps: defaultSlotProps,
        actions: {
            table: true,
            embedHTML: true,
        },
    },
    render: args => {
        const form = useForm({
            defaultValues: {
                myInput: `
<h1 style="text-align: center">Center aligned</h1>
<a data-type="resizable-media" href="https://github.com/HumandDev/material-hu/tree/SQGZ-861-text-area-fixes" target="_blank" rel="noopener noreferrer nofollow" style="display: block; text-align: center;; max-width: 100%;">
<span style="display: inline-block; width: 33%;">
<img src="https://picsum.photos/200/300">
</span>
</a>
<span data-type="resizable-media" style="display: block; text-align: center;; max-width: 100%;">
<span style="display: inline-block; width: 25%;">
<iframe src="https://www.youtube.com/embed/vKQi3bBA1y8">
</iframe>
</span>
</span>
<span data-type="resizable-media" style="display: block; text-align: right;; max-width: 100%;">
<span style="display: inline-block; width: 50%;">
<video src="https://www.w3schools.com/html/mov_bbb.mp4">
</video>
</span>
</span>
<p>
</p>
      `,
            },
        });
        const onSubmit = () => console.debug('submit');
        const inputValue = form.watch('myInput');
        return (_jsxs(FormProvider, { ...form, children: [_jsxs("form", { onSubmit: form.handleSubmit(onSubmit), children: [_jsx(FormTextArea, { textAreaProps: args, rules: {
                                required: 'This is a required field',
                            }, name: "myInput" }), _jsx("button", { type: "submit", children: "Submit" })] }), _jsxs("details", { children: [_jsx("summary", { children: "Parsed HTML" }), _jsx("pre", { children: prettifyHtml(inputValue) })] }), _jsxs("details", { children: [_jsx("summary", { children: "HTMLBody rendered" }), _jsx(HTMLBody, { body: inputValue })] })] }));
    },
};
