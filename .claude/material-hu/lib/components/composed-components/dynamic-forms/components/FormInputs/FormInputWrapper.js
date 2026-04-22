import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useController } from 'react-hook-form';
import { getFieldName } from '../../../dynamic-forms/utils/extraUtils';
import CardContainer from '../../../../design-system/CardContainer';
import FileCard from '../../../../design-system/FileCard';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { sizeToBytes } from '../../../../../utils/bytes';
import FormInput from './FormInput';
const FormInputWrapperComponent = ({ section, component, isFrozen, slotProps, }) => {
    const fieldName = getFieldName(section, component.nameId);
    const { fieldState } = useController({
        name: fieldName,
    });
    const inputHasError = !!fieldState.error?.message;
    const title = [
        component.content.title,
        component.content.required ? '*' : '',
    ].join(' ');
    return (_jsxs(CardContainer, { fullWidth: true, padding: 24, ...slotProps?.root, children: [_jsx(Typography, { fontWeight: "fontWeightSemiBold", sx: {
                    mb: 1,
                    color: theme => inputHasError
                        ? theme.palette.new.text.feedback.error
                        : theme.palette.new.text.neutral.default,
                }, ...slotProps?.title, children: title }), !!component.attachments?.length && (_jsx(Stack, { sx: { gap: 1, mb: 2 }, children: component.attachments?.map(attachment => (_jsx(FileCard, { status: "default", sx: { width: '100%' }, attachment: {
                        name: attachment.name,
                        url: attachment.url,
                        type: attachment.type || '',
                        size: attachment.size || '0',
                        bytes: sizeToBytes(attachment.size || '0'),
                    } }, attachment.key))) })), _jsx(FormInput, { name: fieldName, component: component, isFrozen: isFrozen, slotProps: { fields: slotProps?.fields } })] }));
};
export const FormInputWrapper = memo(FormInputWrapperComponent, (prevProps, nextProps) => {
    return (prevProps.section === nextProps.section &&
        prevProps.component.nameId === nextProps.component.nameId &&
        prevProps.isFrozen === nextProps.isFrozen);
});
