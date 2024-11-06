import React from 'react';
import { Post } from '../models/Post';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { usePostStore } from '@/stores/postStore';
import Image from 'next/image';

interface PostDetailProps {
  post: Post;
}

const PostImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '400px', // Define a fixed height for the image container
  overflow: 'hidden',
  marginBottom: '16px',
});

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const postStore = usePostStore();

  return (
    <Container maxWidth="lg">
      <Box padding={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h4" component="h1">
            {post.title}
          </Typography>
          <IconButton aria-label="add to favorites" color={post.isFavorite ? 'error' : 'default'} onClick={() => {
            postStore && postStore.toggleFavorite(post.id);
          }}>
            <FavoriteIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
        <PostImageContainer>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,..."
          />
        </PostImageContainer>
        <Typography variant="body1" component="p" gutterBottom>
          {post.text}
        </Typography>
      </Box>
    </Container>
  );
};

export default PostDetail;