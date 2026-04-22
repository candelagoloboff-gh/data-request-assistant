export function getEmbedUrl(url) {
    let matchedTransformer = null;
    let match = null;
    for (const transformer of Object.values(transformers)) {
        const innerMatch = url.match(transformer.regex)?.[1];
        if (innerMatch) {
            match = innerMatch;
            matchedTransformer = transformer;
        }
    }
    if (!match || !matchedTransformer) {
        return url;
    }
    return matchedTransformer?.transformer(match);
}
const transformers = {
    youtube: {
        regex: /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
        transformer: (videoId) => `https://www.youtube.com/embed/${videoId}`,
    },
    vimeo: {
        regex: /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)([a-zA-Z0-9_-]{3,11})/,
        transformer: (videoId) => `https://player.vimeo.com/video/${videoId}?app_id=122963&byline=0&badge=0&portrait=0&title=0`,
    },
    dailymotion: {
        regex: /^(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com\/video\/)([a-zA-Z0-9_-]{11})/,
        transformer: (videoId) => `https://www.dailymotion.com/embed/video/${videoId}`,
    },
    facebook: {
        regex: /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/video\.php\?v=)([a-zA-Z0-9_-]{11})/,
        transformer: (videoId) => `https://www.facebook.com/video/embed?video_id=${videoId}`,
    },
};
export default transformers;
