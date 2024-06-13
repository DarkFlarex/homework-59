import React, { useState } from 'react';
import {MoviePost} from '../../type';
import Posts from "../../components/Posts/Posts";
import './PostsBlogMovie.css';
import AddPostsForm from "../../components/AddPostsForm/AddPostsForm";

const PostsBlogMovie = () => {
    const [posts, setPosts] = useState<MoviePost[]>([
        { id: '1', nameMovie: 'Movie name #1' },
        { id: '2', nameMovie: 'Movie name #2' },
        { id: '3', nameMovie: 'Movie name #3' },
    ]);

    const removePost = (id: string) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    };

    const changeNameMovie = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post) => {
                if (post.id === id) {
                    return {...post, nameMovie: event.target.value};
                }
                return post;
            });
        });
    };

    const createPost = (newPost:MoviePost) => {
        setPosts(prevPosts => [...prevPosts, newPost ]);
    };

    return (
        <>
            <AddPostsForm onSubmit={createPost}/>
            <div className={"Movie-list"}>
                <h1>To Watch list:</h1>
                {posts.map((post) => (
                    <Posts
                        key={post.id}
                        nameMovie={post.nameMovie}
                        onRemove={() => removePost(post.id)}
                        onChangeName={(event) => changeNameMovie(event, post.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default PostsBlogMovie;
