import secondsToMilliseconds from 'date-fns/secondsToMilliseconds';
import { sizeToBytes } from './bytes';
import { FileTypes } from './files';
import { getUuid, removeUUID } from './text';
/** Checks whether a clipboard event contains a file to paste. */
export const isFileToPaste = (event) => {
    if (!event?.clipboardData?.items)
        return false;
    return Array.from(event.clipboardData.items).some(item => item.kind === 'file');
};
/** Converts a FileAsset into an Attachment object. */
export const getAttachmentFromFileAsset = (file) => {
    return {
        name: removeUUID(file.name).split('-')[0],
        type: file.type,
        url: file.url,
        size: file.size,
        bytes: sizeToBytes(file.size),
    };
};
/** Reads the width and height of an image File or Blob. */
export const getDimensions = (file) => new Promise((resolve, reject) => {
    if (!file) {
        reject(new Error('File is null'));
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = error => reject(error);
    reader.onload = theFile => {
        const image = new Image();
        image.src = theFile.target?.result;
        image.onload = () => {
            resolve({
                width: image.width,
                height: image.height,
            });
        };
    };
});
/** Extracts width, height, and duration metadata from a video File. */
export const getVideoMetadata = (file) => {
    return new Promise((resolve, reject) => {
        try {
            const url = URL.createObjectURL(file);
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = url;
            video.onloadedmetadata = () => {
                URL.revokeObjectURL(url);
                resolve({
                    width: video.videoWidth,
                    height: video.videoHeight,
                    durationInMs: secondsToMilliseconds(video.duration),
                });
            };
            video.onerror = err => {
                reject(err);
            };
        }
        catch (err) {
            reject(err);
        }
    });
};
/** Processes a File into a FormFile, detecting type and extracting dimensions when applicable. */
export const processFile = async (file) => {
    let type;
    let width;
    let height;
    if (file.type.includes('image/jpeg') || file.type.includes('image/png')) {
        type = FileTypes.IMAGE;
        try {
            const dimensions = await getDimensions(file);
            width = dimensions.width;
            height = dimensions.height;
        }
        catch (err) {
            width = undefined;
            height = undefined;
        }
    }
    else if (file.type.includes('video/')) {
        try {
            const metadata = await getVideoMetadata(file);
            width = metadata.width;
            height = metadata.height;
        }
        catch (err) {
            width = undefined;
            height = undefined;
        }
        type = FileTypes.VIDEO;
    }
    else {
        type = FileTypes.FILE;
    }
    const newFile = {
        name: file.name || `file-${getUuid()}.${file.type.split('/').pop()}`,
        size: file.size,
        mime: file.type,
        width,
        height,
        fileObject: file,
        type,
        toUpload: true,
    };
    return newFile;
};
/** Splits a filename into its name and extension parts. */
export const splitFileName = (str) => {
    const extensionIndex = str.lastIndexOf('.');
    if (extensionIndex === -1) {
        return {
            name: str,
            extension: '',
        };
    }
    return {
        name: str.slice(0, extensionIndex),
        extension: str.slice(extensionIndex + 1),
    };
};
