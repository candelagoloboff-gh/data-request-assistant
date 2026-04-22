export const getProfileDataContainerColumns = (width) => {
    let columns = 3;
    if (width < 700) {
        columns = 2;
    }
    if (width < 400) {
        columns = 1;
    }
    return columns;
};
