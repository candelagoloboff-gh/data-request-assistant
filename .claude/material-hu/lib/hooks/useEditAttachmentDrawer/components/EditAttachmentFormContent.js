import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import CardContainer from '../../../components/design-system/CardContainer';
import FormInputClassic from '../../../components/design-system/Inputs/Classic/form';
const EditAttachmentFormContent = ({ rules, }) => {
    const { t } = useTranslation();
    return (_jsx(CardContainer, { color: "grey", sx: {
            width: '100%',
        }, children: _jsx(FormInputClassic, { name: "name", rules: rules, inputProps: {
                label: t('general:attachment.rename.label'),
                placeholder: t('general:name'),
                autoFocus: true,
            } }) }));
};
export default EditAttachmentFormContent;
