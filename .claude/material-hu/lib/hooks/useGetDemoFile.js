import { useEffect, useState } from 'react';
import testImage from '../../static/test-image.png';
import { convertImageToBlob } from '../utils/blob';
/** Converts a file (or falls back to a built-in test image) into a Blob-backed File for demos. */
export default function useGetDemoFile(argFile) {
    const [file, setFile] = useState();
    useEffect(() => {
        if (argFile instanceof FileList || Array.isArray(argFile)) {
            convertImageToBlob(argFile[0]).then(setFile);
            return;
        }
        convertImageToBlob(testImage).then(setFile);
    }, [argFile]);
    return file;
}
