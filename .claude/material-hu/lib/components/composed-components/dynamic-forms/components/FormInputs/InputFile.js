import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import StateCard from '../../../../design-system/StateCard';
import Uploader from '../../../../design-system/Uploader';
import { processFile } from '../../../../../utils/attachments';
import { bytesFrom, sizeToBytes } from '../../../../../utils/bytes';
import { getInitialFiles } from '../../utils/extraUtils';
const DEFAULT_ACCEPTED_TYPES = ['pdf', 'image'];
const DEFAULT_FILE_SIZE_LIMIT = bytesFrom(50, 'MB');
const DEFAULT_MAX_FILES = 5;
const InputFile = ({ name, disabled, initialFiles, readOnly, uploadFn, acceptedTypes = DEFAULT_ACCEPTED_TYPES, fileSizeLimit = DEFAULT_FILE_SIZE_LIMIT, maxFiles = DEFAULT_MAX_FILES, slotProps, }) => {
    const [value, setValue] = useState(getInitialFiles(initialFiles));
    const { control, getValues, setValue: setFormValue, clearErrors, } = useFormContext();
    const { fieldState } = useController({ name, control: control });
    const handleUpload = async (file) => {
        try {
            if (!uploadFn) {
                throw new Error('uploadFn is required');
            }
            // Process the file to get the correct type
            const processedFile = await processFile(file);
            // Upload the file to S3
            const [uploadedFile] = await uploadFn?.([processedFile]);
            // Create the attachment object to be able to use the Uploader component
            const attachment = {
                url: uploadedFile.url,
                size: uploadedFile.size,
                bytes: sizeToBytes(uploadedFile.size),
                name: file.name,
                type: file.type,
                fileAssetReferenceId: uploadedFile.id,
            };
            // Get and set the new file to the form below "FileAsset" type
            const currentFormFiles = getValues(name) ?? [];
            setFormValue(name, [...currentFormFiles, uploadedFile]);
            return { status: 'success', attachment };
        }
        catch (error) {
            return { status: 'error', file };
        }
    };
    const handleOnChange = (files) => {
        clearErrors(name);
        setValue(files);
        // Get the current form
        const currentFormFiles = getValues(name) ?? [];
        // Get the reference file ids to be able to filter the files on remove operations
        const referencesFileIds = new Set(files.map(file => file.attachment?.fileAssetReferenceId));
        // Filter the files on remove operations
        const newFormFiles = currentFormFiles.filter(file => referencesFileIds.has(file.id));
        // Set the new form files to the form below "FileAsset" type
        setFormValue(name, newFormFiles);
    };
    if (!uploadFn && !readOnly) {
        return (_jsx(StateCard, { description: "`uploadFn` is required to use this component", title: 'No upload function provided', variant: "error" }));
    }
    if (readOnly && !value.length) {
        return null;
    }
    return (_jsx(Uploader, { error: !!fieldState.error, helperText: fieldState.error?.message, disabled: disabled, readOnly: readOnly, acceptedTypes: acceptedTypes, fileSizeLimit: fileSizeLimit, maxFiles: readOnly || disabled ? value.length : maxFiles, slotProps: { fileCard: { disabled } }, uploadFunction: handleUpload, onChange: handleOnChange, value: value, showUploadButtonOnMaxFiles: false, triggerOnChangeWhenUploading: true, ...slotProps?.uploader }));
};
export default InputFile;
