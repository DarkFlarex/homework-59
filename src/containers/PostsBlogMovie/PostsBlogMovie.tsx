import React, { useState } from 'react';
import {MoviePost} from '../../type';
import Posts from "../../components/Posts/Posts";
import './PostsBlogMovie.css';

const PostsBlogMovie: React.FC = () => {
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

    return (
        <>
            <div className={"Movie-list"}>
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
