

import React, { useEffect, useState } from 'react';
import PostList from '@/components/PostList';
import { NextPage } from 'next';
import { usePostStore } from '@/stores/postStore';
import { Post } from '@/models/Post';
import PostFilter from '@/components/PostFilter';
import { Container } from '@mui/material';

const HomePage: NextPage = () => {
    const [filterText, setFilterText] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const postStore = usePostStore();

    useEffect(() => {
        postStore.fetch();
    }, [postStore]);

    useEffect(() => {
        let posts = postStore.posts;

        if (filterText) {
            const lowerCaseFilter = filterText.toLowerCase();
            posts = posts.filter(
                (post) =>
                    post.title.toLowerCase().includes(lowerCaseFilter)
                    
            );
        }

        if (showFavorites) {
            posts = posts.filter((post) => post.isFavorite);
        }

        setFilteredPosts(posts);
    }, [postStore.posts, filterText, showFavorites]);

    const handleFilterTextChange = (text: string) => {
        setFilterText(text);
    };

    const handleToggleShowFavorites = () => {
        setShowFavorites((prev) => !prev);
    };

    return (
        <Container maxWidth="md" sx={{ pt: 5 }}>
            <PostFilter
                filterText={filterText}
                showFavorites={showFavorites}
                onFilterTextChange={handleFilterTextChange}
                onToggleShowFavorites={handleToggleShowFavorites}
            />
            <PostList posts={filteredPosts} />
        </Container>
    );
};

export default HomePage;