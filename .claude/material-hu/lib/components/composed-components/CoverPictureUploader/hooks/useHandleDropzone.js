import { useDropzone, } from 'react-dropzone';
import { megabytesToBytes } from '../../../../utils/bytes';
const useHandleDropzone = ({ onDropAccepted = () => null, onDropRejected = () => null, maxSize = megabytesToBytes(50), disabled = false, }) => {
    const handleDropAccepted = (files, event) => {
        onDropAccepted(files[0], event);
    };
    return useDropzone({
        onDropAccepted: handleDropAccepted,
        onDropRejected,
        accept: { 'image/png': [], 'image/jpeg': [], 'image/webp': [] },
        maxFiles: 1,
        maxSize,
        disabled,
    });
};
export default useHandleDropzone;
