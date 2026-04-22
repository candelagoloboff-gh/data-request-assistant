/**
 * Generic function to handle dropping media files into the editor
 * Inserts skeleton loaders for each file, then replaces them with actual media as they upload
 */
const handleMediaDrop = async (currentEditor, files, pos, uploadFunction, config) => {
    const { mediaType, loaderType, loaderIdPrefix, tag, loaderAttrs = {}, } = config;
    const filteredFiles = files.filter(file => file.type.includes(mediaType)) || [];
    if (filteredFiles.length === 0) {
        return;
    }
    const loaderIds = [];
    let currentPos = pos;
    // Insert all skeletons first, updating position after each insertion
    for (let index = 0; index < filteredFiles.length; index++) {
        const loaderId = `${loaderIdPrefix}-${Date.now()}-${index}`;
        loaderIds.push(loaderId);
        currentEditor
            .chain()
            .insertContentAt(currentPos, {
            type: loaderType,
            attrs: {
                imageLoaderId: loaderId,
                ...loaderAttrs,
            },
        })
            .run();
        currentPos += 1;
    }
    currentEditor.chain().focus().run();
    // Process all files in parallel
    const uploadPromises = filteredFiles.map(async (file, index) => {
        const loaderId = loaderIds[index];
        try {
            const uploadedFile = await uploadFunction?.(file);
            if (uploadedFile) {
                const { state } = currentEditor;
                const { doc } = state;
                let loaderPos = null;
                doc.descendants((node, nodePos) => {
                    if (node.type.name === loaderType &&
                        node.attrs.imageLoaderId === loaderId) {
                        loaderPos = nodePos;
                        return false;
                    }
                });
                if (loaderPos !== null) {
                    currentEditor
                        .chain()
                        .deleteRange({
                        from: loaderPos,
                        to: loaderPos + 1,
                    })
                        .insertContentAt(loaderPos, [
                        {
                            type: 'resizable-media',
                            attrs: { tag, src: uploadedFile.attachment?.url },
                        },
                        { type: 'paragraph' },
                    ])
                        .focus()
                        .run();
                }
            }
        }
        catch (_error) {
            // Remove the skeleton loader on error
            const { state } = currentEditor;
            const { doc } = state;
            let loaderPos = null;
            doc.descendants((node, nodePos) => {
                if (node.type.name === loaderType &&
                    node.attrs.imageLoaderId === loaderId) {
                    loaderPos = nodePos;
                    return false;
                }
            });
            if (loaderPos !== null) {
                currentEditor
                    .chain()
                    .deleteRange({
                    from: loaderPos,
                    to: loaderPos + 1,
                })
                    .focus()
                    .run();
            }
        }
    });
    await Promise.all(uploadPromises);
};
/**
 * Handles dropping multiple images into the editor
 * Inserts skeleton loaders for each image, then replaces them with actual images as they upload
 */
export const handleImageDrop = async (currentEditor, files, pos, options) => {
    const { uploadImageFunction } = options;
    await handleMediaDrop(currentEditor, files, pos, uploadImageFunction, {
        mediaType: 'image',
        loaderType: 'image-loader',
        loaderIdPrefix: 'image-loader',
        tag: 'img',
    });
};
/**
 * Handles dropping multiple videos into the editor
 * Inserts skeleton loaders for each video, then replaces them with actual videos as they upload
 */
export const handleVideoDrop = async (currentEditor, files, pos, options) => {
    const { uploadVideoFunction } = options;
    await handleMediaDrop(currentEditor, files, pos, uploadVideoFunction, {
        mediaType: 'video',
        loaderType: 'skeleton-loader',
        loaderIdPrefix: 'skeleton',
        tag: 'video',
        loaderAttrs: {
            width: 200,
            height: 200,
        },
    });
};
export const getMediaAttributes = (dom) => {
    const child = dom.querySelector('img, iframe, video');
    if (!child)
        return null;
    const findWidthInElement = (element) => {
        const width = element.style.width;
        if (width && width !== 'auto')
            return width;
        for (const child of element.children) {
            const childWidth = findWidthInElement(child);
            if (childWidth)
                return childWidth;
        }
        return null;
    };
    const width = findWidthInElement(dom) || 'auto';
    const textAlign = dom.style.textAlign || 'inherit';
    const tag = child.tagName.toLowerCase();
    const src = child.getAttribute('src');
    const srcdoc = child.getAttribute('srcdoc');
    return {
        src,
        srcdoc,
        tag,
        width,
        textAlign,
    };
};
