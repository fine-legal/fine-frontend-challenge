import { create } from "zustand";
import { persist } from "zustand/middleware";
import _ from "lodash";
import { Post } from "@/models/Post";
import { PostService } from "@/services/PostService";

interface PostStore {
    loading: boolean;
    service: PostService;
    posts: Post[];
    fetch: (refresh?: boolean) => Promise<Post[]>;
    toggleFavorite: (id: string) => void;
    fetchById: (id: string) => Post | undefined;
}

export const usePostStore = create<PostStore>()(
    persist(
        (set, get) => ({
            loading: false,
            service: new PostService(),
            posts: [],
            fetch: async (refresh?: boolean): Promise<Post[]> => {
                const { posts: existingPosts, loading, service } = get();
                let data: Post[] = [];

                if (!loading) {
                    if (existingPosts.length <= 0 || refresh) {
                        set({ loading: true });
                        data = await service.fetchAll();

                        const mergedPosts = data.map((newPost) => {
                            const existingPost = existingPosts.find(p => p.id === newPost.id);
                            return existingPost
                                ? { ...newPost, isFavorite: existingPost.isFavorite }
                                : newPost;
                        });

                        set({ posts: mergedPosts, loading: false });
                    }
                }
                return Promise.resolve(data);
            },
            toggleFavorite: (id: string) => {
                const { posts } = get();
                const postIndex = posts.findIndex(x => x.id === id);
                if (postIndex !== -1) {
                    const updatedPosts = [...posts];
                    updatedPosts[postIndex].isFavorite = !updatedPosts[postIndex].isFavorite;
                    set({ posts: updatedPosts });
                }
            },
            fetchById: (id: string): Post | undefined => {
                const { posts } = get();
                return posts.find(x => x.id === id);
            },
        }),
        {
            name: "post-store",
            partialize: (state) => ({ posts: state.posts }),
        }
    )
);
