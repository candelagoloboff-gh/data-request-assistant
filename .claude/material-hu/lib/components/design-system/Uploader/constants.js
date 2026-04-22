export const typeMap = {
    image: {
        mimeType: 'image/jpeg',
        extensions: ['.jpg', '.png', '.jpeg', '.webp', '.gif'],
    },
    pdf: {
        mimeType: 'application/pdf',
        extensions: ['.pdf'],
    },
    msword: {
        mimeType: 'application/msword',
        extensions: [
            '.doc',
            '.docx',
            '.ppt',
            '.pptx',
            '.ppsx',
            '.ppsm',
            '.xls',
            '.xlsx',
            '.csv',
            '.xlsm',
            '.xlsb',
        ],
    },
    video: {
        mimeType: 'video/*',
        extensions: ['.mp4', '.mov', '.avi', '.mpeg', '.webm'],
    },
    compressed: {
        mimeType: 'application/zip',
        extensions: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz'],
    },
    xml: {
        mimeType: 'application/xml',
        extensions: ['.xml'],
    },
};
