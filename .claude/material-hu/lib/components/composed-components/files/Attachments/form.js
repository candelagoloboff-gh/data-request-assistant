import { jsx as _jsx } from "react/jsx-runtime";
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import Attachments from '.';
const FormAttachments = ({ name, inputProps }) => {
    const { control, setValue } = useFormContext();
    useFieldArray({ control, name });
    const attachments = useWatch({
        control,
        name,
    });
    const handleDeleteAttachment = (attachment, index) => {
        const newValue = attachments.toSpliced(index, 1);
        setValue(name, newValue, { shouldDirty: true });
        inputProps.onDelete?.(attachment, index);
    };
    const handleAddAttachments = (newAttachments) => {
        const positionedAttachments = newAttachments.map((attachment, index) => ({
            ...attachment,
            position: attachments.length + index,
        }));
        const newValue = attachments.concat(positionedAttachments);
        setValue(name, newValue, { shouldDirty: true });
        inputProps.onAdd?.(positionedAttachments);
    };
    const handleEditAttachment = (attachment, index, values) => {
        const { name: attachmentName, extension } = values;
        const newAttachment = {
            ...attachment,
            name: extension ? `${attachmentName}.${extension}` : attachmentName,
        };
        const newValue = attachments.toSpliced(index, 1, newAttachment);
        setValue(name, newValue, { shouldDirty: true });
        inputProps.onEdit?.(attachment, index, values);
    };
    const handleSortAttachments = (newValue) => {
        const positionedAttachments = newValue.map((attachment, index) => ({
            ...attachment,
            position: index,
        }));
        setValue(name, positionedAttachments, { shouldDirty: true });
        inputProps.onSort?.(positionedAttachments);
    };
    return (_jsx(Attachments, { ...inputProps, editing: true, attachments: attachments, onDelete: handleDeleteAttachment, onAdd: handleAddAttachments, onEdit: handleEditAttachment, onSort: handleSortAttachments }));
};
export default FormAttachments;
