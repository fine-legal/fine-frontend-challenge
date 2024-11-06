

import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { InputWithDebounce } from './InputWithDebounce';

interface PostFilterProps {
    filterText: string;
    showFavorites: boolean;
    onFilterTextChange: (text: string) => void;
    onToggleShowFavorites: () => void;
}

const PostFilter: React.FC<PostFilterProps> = ({
    filterText,
    showFavorites,
    onFilterTextChange,
    onToggleShowFavorites,
}) => {
    return (
        <Box display="flex" alignItems="center" mb={2}>
            <InputWithDebounce
                placeholder="Search Posts"
                variant="outlined"
                size="small"
                value={filterText}
                onChange={(value: string) => onFilterTextChange(value)}
                sx={{ mr: 2, flexGrow: 1 }}
                debounceTime={500}
            />
            <IconButton
                color={showFavorites ? 'error' : 'default'}
                onClick={onToggleShowFavorites}>
                <FavoriteIcon />
            </IconButton>
        </Box>
    );
};

export default PostFilter;