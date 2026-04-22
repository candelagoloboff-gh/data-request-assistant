export const isClickingInsidePdf = (target) => {
    return (target.closest('.react-pdf__Page__annotations') !== null ||
        target.closest('.react-pdf__Page') !== null);
};
