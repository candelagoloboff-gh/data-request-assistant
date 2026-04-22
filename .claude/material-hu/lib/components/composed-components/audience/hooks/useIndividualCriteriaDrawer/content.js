import { jsx as _jsx } from "react/jsx-runtime";
import FormIndividualSelection from '../../../audience/IndividualSelection/form';
import { useIndividualCriteriaContext } from './context';
const IndividualSelectionContent = () => {
    const inputProps = useIndividualCriteriaContext();
    if (!inputProps)
        return null;
    return (_jsx(FormIndividualSelection, { name: "userIds", searchName: "search", inputProps: inputProps }));
};
export default IndividualSelectionContent;
