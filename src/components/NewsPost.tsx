import React, { useState } from 'react';
import { Post } from '../models/Post';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Box, Button, Collapse, ButtonBase, Stack } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useRouter } from 'next/router';
import { usePostStore } from '@/stores/postStore';
import Image from 'next/image';

interface NewsPostProps {
  post: Post;
}

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  elevation: 3,
  backgroundColor: theme.palette.background.paper,
  width: '100%', // Ensure the card takes up the full width of its container
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '500px', // Define a fixed height for the image container
  overflow: 'hidden',
});

const NewsPost: React.FC<NewsPostProps> = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const previewText = post.text.length > 100 ? `${post.text.substring(0, 100)}...` : post.text;
  const postStore = usePostStore();
  const router = useRouter();

  return (
    <StyledCard elevation={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
        <Typography variant="caption" color="textSecondary">
          {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
        <IconButton aria-label="add to favorites" color={post.isFavorite ? 'error' : 'default'} onClick={() => {
          postStore && postStore.toggleFavorite(post.id);
        }}>
          <FavoriteIcon />
        </IconButton>
      </Box>
      <ButtonBase onClick={() => router.push(`/post/${post.id}`)} sx={{ width: 1 }}>
        <ImageContainer>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,..."
          />
        </ImageContainer>
      </ButtonBase>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <CardHeader
          title={post.title}
          subheader={post.subTitle}
        />
        <Typography
          variant="body2"
          color="primary"
          onClick={handleExpandClick}
          sx={{ my: 'auto', cursor: 'pointer', textDecoration: 'underline' }}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Typography>
      </Stack>
      <CardContent>
        <Typography variant="body1" component="p" gutterBottom>
          {expanded ? post.text : previewText}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body1" component="p" gutterBottom>
            {post.text}
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleExpandClick}>
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default NewsPost;