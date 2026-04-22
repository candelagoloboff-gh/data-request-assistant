import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import HTMLBody from '../../../HTMLBody';
import Alert from '../../../../design-system/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { appearFromBottom } from '../../../../../utils/animations';
import { hasRequiredFieldError } from '../../utils/extraUtils';
import { FormInputWrapper } from '../FormInputs/FormInputWrapper';
import FormInputsCatalogConnected from './connected';
const FormInputsCatalog = ({ isFrozen, error, slotProps, section, sx, }) => {
    const { formState } = useFormContext();
    const showRequiredFieldError = hasRequiredFieldError(formState.errors);
    const showError = showRequiredFieldError && formState.isSubmitted && error;
    const renderItem = useCallback((item, index) => section && (_jsx(FormInputWrapper, { section: section.nameId, component: item, isFrozen: isFrozen, slotProps: {
            ...slotProps,
            root: {
                ...slotProps?.root,
                sx: {
                    animation: `${appearFromBottom} 120ms ease-in-out backwards`,
                    animationDelay: `${index * 30}ms`,
                },
            },
            fields: slotProps?.fields,
        } }, item.nameId)), [isFrozen, section?.nameId]);
    if (!section)
        return null;
    return (_jsxs(Stack, { sx: { gap: 3, pb: 3, transition: 'opacity 120ms ease-in-out', ...sx }, id: "form-section", component: "form", children: [section.content.title && (_jsxs(Stack, { sx: { gap: 1 }, children: [showError && (_jsx(Alert, { severity: "error", title: error })), _jsx(Typography, { variant: "globalL", fontWeight: "fontWeightSemiBold", children: section.content.title }), section.content.description && (_jsx(HTMLBody, { body: section.content.description }))] })), section.content.components?.map(renderItem)] }));
};
FormInputsCatalog.Connected = FormInputsCatalogConnected;
export default FormInputsCatalog;
