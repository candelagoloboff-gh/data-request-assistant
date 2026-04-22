import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Box, ButtonBase, IconButton, Stack, useTheme } from '@mui/material';
import { IconType } from '../../../types/icons';
import { IconPlus } from '@tabler/icons-react';
import { CONTENT_HEIGHT, ICON_TILE_SIZE, IMAGE_ICON_SIZE } from './constants';
import { matchesImageOption } from './utils';
const ImageGrid = ({ options, selectedSource, onSelect, onUpload, width, }) => {
    const { palette, shape } = useTheme();
    const inputId = useId();
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1,
            p: 2,
            height: CONTENT_HEIGHT,
            width,
            boxSizing: 'border-box',
            overflowY: 'auto',
            alignContent: 'flex-start',
        }, children: [options.map(option => {
                const isSelected = matchesImageOption(selectedSource, option.name);
                return (_jsx(ButtonBase, { onClick: () => onSelect({ value: option.source, type: IconType.IMAGE }), sx: {
                        width: ICON_TILE_SIZE,
                        height: ICON_TILE_SIZE,
                        borderRadius: shape.borderRadiusM,
                        border: isSelected
                            ? `1px solid ${palette.new.border.neutral.brand}`
                            : '1px solid transparent',
                        backgroundColor: isSelected
                            ? palette.new.background.elements.brand
                            : palette.new.background.elements.grey,
                        ':hover': {
                            backgroundColor: palette.new.action.background.neutral.hover,
                        },
                    }, children: _jsx(Box, { component: "img", src: option.source, alt: option.name, sx: {
                            width: IMAGE_ICON_SIZE,
                            height: IMAGE_ICON_SIZE,
                            objectFit: 'contain',
                        } }) }, option.id));
            }), onUpload && (_jsx(Box, { sx: {
                    width: ICON_TILE_SIZE,
                    height: ICON_TILE_SIZE,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: shape.borderRadiusM,
                    border: `2px solid ${palette.new.border.neutral.brand}`,
                    '&:hover': {
                        backgroundColor: palette.new.action.background.neutral.hover,
                    },
                    cursor: 'pointer',
                }, children: _jsxs("label", { htmlFor: inputId, children: [_jsx("input", { accept: "image/*", id: inputId, type: "file", style: { display: 'none' }, onChange: e => {
                                const file = e.target.files?.[0];
                                if (file)
                                    onUpload(file);
                                e.target.value = '';
                            } }), _jsx(IconButton, { component: "span", sx: { p: 0, ':hover': { backgroundColor: 'transparent' } }, children: _jsx(IconPlus, { size: IMAGE_ICON_SIZE }) })] }) }))] }));
};
export default ImageGrid;
