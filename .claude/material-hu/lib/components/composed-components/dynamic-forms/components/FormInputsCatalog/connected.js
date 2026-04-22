import { jsx as _jsx } from "react/jsx-runtime";
import { useDynamicFormContext } from '../../../dynamic-forms/hooks/useDynamicFormContext';
import FormInputsCatalog from '.';
/**
 *
 * This component connects the FormInputsCatalog component to the dynamic form context.
 */
const FormInputsCatalogConnected = (props) => {
    const { formResponse, isFrozen } = useDynamicFormContext();
    const nextSection = formResponse?.nextSection || props?.section;
    if (!nextSection)
        return null;
    return (_jsx(FormInputsCatalog, { ...props, isFrozen: isFrozen, section: nextSection }));
};
export default FormInputsCatalogConnected;
