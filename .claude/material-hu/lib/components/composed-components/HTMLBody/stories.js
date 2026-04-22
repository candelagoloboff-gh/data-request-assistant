import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Switch, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import HTMLBody from './index';
const meta = {
    title: 'Composed Components/HTMLBody',
    component: HTMLBody,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A component that renders HTML content with customizable parser options.',
            },
        },
    },
};
export default meta;
export const Basic = {
    args: {
        body: '<p>This is a basic paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>',
    },
};
export const WithLinks = {
    args: {
        body: `
      <p>Here are some links:</p>
      <ul>
        <li><a href="https://example.com">External Link</a></li>
        <li><a href="https://google.com">Google</a></li>
        <li><a href="mailto:test@example.com">Email Link</a></li>
      </ul>
    `,
    },
};
export const WithImagesEmbedsAndVideos = {
    args: {
        body: `
      <h1 style="text-align: center">Center aligned</h1>
      <div data-type="resizable-media" style="display: block; text-align: center;">
        <div style="display: inline-block; width: 33%;">
          <img src="https://picsum.photos/200/300">
        </div>
      </div>
      <div data-type="resizable-media" style="display: block; text-align: center;">
        <div style="display: inline-block; width: 25%;">
          <iframe src="https://www.youtube.com/embed/vKQi3bBA1y8"></iframe>
        </div>
      </div>
      <div data-type="resizable-media" style="display: block; text-align: right;">
        <div style="display: inline-block; width: 50%;">
          <video src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
        </div>
      </div>
    `,
    },
};
export const WithVideosDisabledDownload = {
    render: () => {
        const [canDownloadVideo, setCanDownloadVideo] = useState(true);
        return (_jsxs(Stack, { sx: { alignItems: 'center', gap: 3 }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Switch, { checked: canDownloadVideo, onChange: () => setCanDownloadVideo(!canDownloadVideo) }), _jsx(Typography, { variant: "globalS", children: canDownloadVideo ? 'Can download video' : 'Cannot download video' })] }), _jsx(HTMLBody, { body: `
        <video controls width="400">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      `, canDownloadVideo: canDownloadVideo })] }));
    },
};
