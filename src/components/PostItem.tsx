import React from 'react';
import NewsPost from './NewsPost';
import BannerPost from './BannerPost';
import { Post } from '../models/Post';
import { Box } from '@mui/material';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <>
      {post.type.toLowerCase() === 'news' ? (
        <NewsPost post={post} />
      ) : (
        <BannerPost post={post} />
      )}
    </>
  );
};

export default PostItem;