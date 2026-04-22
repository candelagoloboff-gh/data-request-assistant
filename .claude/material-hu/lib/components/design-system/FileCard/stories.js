import FileCard from '.';
const mockBlob = new Blob(['This is the file content!'], {
    type: 'text/plain',
});
export const mockFile = new File([mockBlob], 'FileName.txt', {
    type: 'text/plain',
});
const meta = {
    component: FileCard,
    title: 'Design System/Uploader/FileCard',
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'radio',
            options: ['default', 'uploading', 'success', 'error'],
            table: { defaultValue: { summary: 'uploading' } },
        },
        file: { control: false },
        attachment: { control: false },
        fileAsset: { control: false },
        onRemove: { control: false },
        onReupload: { control: false },
        showDownloadButton: { control: 'boolean' },
        showReuploadButton: { control: 'boolean' },
        showRemoveButton: { control: 'boolean' },
        showRemoveUploadingButton: { control: 'boolean' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        sx: { control: false },
    },
    args: {
        status: 'uploading',
        file: mockFile,
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithRemove = {
    args: {
        onRemove: () => { },
    },
};
export const WithAttachment = {
    args: {
        file: undefined,
        attachment: {
            bytes: 10,
            name: '1 - asdqweasdqweasdqweasdqwe.txt',
            size: '10 B',
            type: 'text/plain',
            url: 'https://multimedia.dev.humand.co/images/image--fa46623e-41c7-4e16-b416-00bf4366cb51.jpg?Expires=1740677449&Key-Pair-Id=K1E5QZ9FCGAZ6Z&Signature=ZIoxC6aoVzpfXWF7PAy17KwrO-ygDAmV~uYrDl~3GUoBkIzp9QiXUkOuTXwvui7-5-3ac5SCHTNFIHBH3DMZJJCTSyLHKhw0hLJ4pl1zCoU2sS6eXRGnO2qJ4u01xxBQn4991ff2FD9PR4MdPX9Ebnoi1O1l0RFYiqrWks6rARy-EtzqjzqhFqwrwEqYHAj8NSvNI~iOqQpE8DGT0jSsqfiWxrsA3OY37Lq1zP0N66f8pCp24TjlYKWsCE8oQFPSdYeG3F2hvIMMIfZVmnCwU1qyMBSDAfEeJQtYRWDLox1ze~3QLgSxD6xs5QByFF1pdjmli2ZioiYaj2Ei0EsZqw__&Expires=1740677450&Key-Pair-Id=K1E5QZ9FCGAZ6Z&Signature=JzqMKRbol5kLp7lTKIfHVIwgGCBJ~g5JfBs8rjHE5B3siy3XrKvgxiMu5YM9K9YUpp4PgvZHKa-yE2ji0YCpUj7xI0xKVzH33KhK7O1GxIVlmqA1PXh9tNEyBHu1qtNUB1xtJAdN4TqZ5dtbt1~4nypOK4GBBOV3xrWRAC8jtDN7sJjDvyc2g2pqkJwlI1I2V5IUE10E~F8Wu-cUcD1I4xZY5irQ4rSMGgy25TpDIurhiG0uE9j4NnUyvlwMTDe6r5u~ngtbR-iJIPuNbQu6l7ND9AItN9OxkWV3ZHbHGvj6JtSBHAVfy6-fwzCvBg47VSccks2qyKRIlOQ9YCWi-w__',
        },
    },
};
export const WithFileAsset = {
    args: {
        file: undefined,
        status: 'success',
        fileAsset: {
            id: 65950,
            url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2026-01-29T17:17:45.269Z',
            updatedAt: '2026-01-29T17:17:45.269Z',
            type: 'IMAGE',
            externalReference: null,
            key: 'images/Screenshot 2026-01-29 at 11.34.56AM--b07a8bf4-1199-4f53-8f4e-9e4786369c6c.png',
            name: 'CodeImg-test.jpg',
            size: '15.01 KB',
            contentType: 'image/png',
            width: 612,
            height: 112,
            thumbnailUrl: null,
        },
        sx: {
            width: '100%',
        },
    },
};
