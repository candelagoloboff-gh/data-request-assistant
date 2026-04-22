import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
import InputSearch from '../../../Inputs/Search';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { useDebounce } from '../../../../../hooks/useDebounce';
import { Stack, Typography, useTheme } from '@mui/material';
import PoweredByGiphyLogo from '../../../../../assets/poweredByGiphy.png';
import { CONTENT_HEIGHT, EMPTY_GIFS_RESULT, GIF_DEBOUNCE_MS, GIF_GRID_WIDTH, GIF_LIMIT, GIF_RATING, } from '../../constants';
import { useGifPicker } from './GifPickerContext';
const GifPickerContent = ({ apiKey, title, noResultsMessage = 'No GIFs found', searchPlaceholder = 'Search', onGifSelect, onClose, }) => {
    const theme = useTheme();
    const gf = useMemo(() => new GiphyFetch(apiKey), [apiKey]);
    const [query, setQuery] = useState('');
    const searchTerm = useDebounce(query, GIF_DEBOUNCE_MS);
    const handleQueryChange = useCallback((value) => {
        setQuery(value);
    }, []);
    const fetchGifs = useCallback((term, offset) => {
        const request = term
            ? gf.search(term, { offset, limit: GIF_LIMIT, rating: GIF_RATING })
            : gf.trending({ offset, limit: GIF_LIMIT, rating: GIF_RATING });
        return request.catch(() => EMPTY_GIFS_RESULT);
    }, [gf]);
    const fetchGifsForGrid = useCallback((offset) => fetchGifs(searchTerm, offset), [fetchGifs, searchTerm]);
    const handleGifClick = useCallback((gif, e) => {
        e.preventDefault();
        onGifSelect?.(gif);
        onClose?.();
    }, [onGifSelect, onClose]);
    return (_jsxs(Stack, { sx: {
            minHeight: 0,
            flex: 1,
            px: '10px',
            py: '15px',
            gap: 1,
        }, children: [title && (_jsx(Typography, { component: "h2", fontWeight: "fontWeightSemiBold", color: theme.palette.new.text.neutral.default, children: title })), _jsx(InputSearch, { value: query, onChange: handleQueryChange, placeholder: searchPlaceholder, autoFocus: true, sx: {
                    '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.new.background.elements.grey,
                        height: '40px',
                    },
                    '& .MuiInputBase-input': {
                        fontSize: '14px',
                    },
                    '& .MuiInputAdornment-root svg': {
                        width: 15,
                        height: 15,
                    },
                } }), _jsxs(Stack, { sx: { overflow: 'auto' }, children: [_jsx("img", { src: PoweredByGiphyLogo, alt: "Powered by Giphy", style: { marginTop: '12px', marginBottom: '12px', width: '150px' } }), _jsx(Grid, { hideAttribution: true, noResultsMessage: _jsx(Typography, { children: noResultsMessage }), width: GIF_GRID_WIDTH, onGifClick: handleGifClick, columns: 4, borderRadius: 0, fetchGifs: fetchGifsForGrid }, searchTerm)] })] }));
};
const GifPicker = (props) => {
    const { apiKey } = useGifPicker();
    if (!apiKey) {
        return (_jsx(Stack, { sx: {
                height: CONTENT_HEIGHT,
                alignItems: 'center',
                justifyContent: 'center',
                color: theme => theme.palette.new.text.neutral.lighter,
            }, children: "Wrap with GifPickerProvider to use the GIF tab." }));
    }
    return (_jsx(GifPickerContent, { apiKey: apiKey, ...props }));
};
export default GifPicker;
