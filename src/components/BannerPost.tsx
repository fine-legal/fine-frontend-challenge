import React from 'react';
import { Post } from '../models/Post';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Box, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface BannerPostProps {
  post: Post;
}

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  elevation: 3,
  backgroundColor: theme.palette.background.default,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const BannerImageContainer = styled(Box)({
  width: '100%',
  height: '200px', 
  overflow: 'hidden',
  position: 'relative',
});

const BannerImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TitleOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.5)', 
  color: theme.palette.common.white,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const BannerPost: React.FC<BannerPostProps> = ({ post }) => {
  const router = useRouter();

  return (
    <StyledCard elevation={3}>
      <ButtonBase /*onClick={() => router.push(`/post/${post.id}`)}*/>
        <BannerImageContainer>
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,..."
          />
          <TitleOverlay>
            <Typography variant="h6">{post.title}</Typography>
          </TitleOverlay>
        </BannerImageContainer>
      </ButtonBase>
    </StyledCard>
  );
};

export default BannerPost;

