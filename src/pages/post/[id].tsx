import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostDetail from '@/components/PostDetail';
import { usePostStore } from '@/stores/postStore';
import { NextPage } from 'next';
import _, { set } from 'lodash';
import { Post } from '@/models/Post';

interface PostDetailPageProps {

}

const PostDetailPage: NextPage = ({ }: PostDetailPageProps) => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post | undefined>();
    const postStore = usePostStore();

    useEffect(() => {
        if (id && !_.isArray(id) && postStore) {
            const _post = postStore.fetchById(id);
            if (_post) {
                setPost(_post);
            }
        }
    }, [id]);


    return post ? <PostDetail post={post} /> : <p>Loading...</p>;
};

export default PostDetailPage;