import React from 'react';
import PostItem from './PostItem';
import { Post } from '../models/Post';
import { Box, Skeleton, Card, CardHeader, CardContent, CardActions, IconButton, Stack } from '@mui/material';
import { usePostStore } from '@/stores/postStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/system';

interface PostListProps {
  posts: Post[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  elevation: 3,
  backgroundColor: theme.palette.background.paper,
  width: '100%', 
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '200px', 
  overflow: 'hidden',
});

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const postStore = usePostStore();

  return (
    postStore.loading ? (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={2}
        margin="0 auto"
        maxWidth="800px"
      >
        {[1, 2, 3].map((_, index) => (
          <StyledCard key={index} elevation={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
              <Skeleton variant="text" width={100} />
            </Box>
            <ImageContainer>
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </ImageContainer>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <CardHeader
                title={<Skeleton variant="text" width="60%" />}
                subheader={<Skeleton variant="text" width="40%" />}
              />
              <Skeleton variant="text" width={80} />
            </Stack>
            <CardContent>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={100} height={36} />
            </CardActions>
          </StyledCard>
        ))}
      </Box>
    ) : (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        maxWidth="100%"
      >
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>
    )
  );
};

export default PostList;