/** Fetches an image from a URL and converts it to a File object. */
export const convertImageToBlob = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.png', { type: 'image/png' });
    return file;
};
