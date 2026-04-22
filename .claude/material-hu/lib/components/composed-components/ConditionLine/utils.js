export const isConditionEmpty = (values) => {
    if (!values)
        return true;
    const { field, value } = values;
    const isFieldEmpty = field === null || field === undefined;
    const isValueEmpty = !value?.length;
    return isFieldEmpty || isValueEmpty;
};
