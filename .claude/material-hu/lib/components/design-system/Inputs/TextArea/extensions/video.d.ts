import { Node } from '@tiptap/react';
export type VideoOptions = {
    HTMLAttributes: Record<string, any>;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Set a video node
             */
            setVideo: (src: string) => ReturnType;
            /**
             * Toggle a video
             */
            toggleVideo: (src: string) => ReturnType;
        };
    }
}
declare const Video: Node<any, any>;
export default Video;
