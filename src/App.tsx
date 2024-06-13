import React from 'react';
import PostsBlogMovie from "./containers/PostsBlogMovie/PostsBlogMovie";
import './App.css'
import BlogChuckJoke from "./containers/BlogСhuckJoke/BlogСhuckJoke";

const App: React.FC = () => {
    return (
        <div className="App">
            <PostsBlogMovie/>
            <BlogChuckJoke/>
        </div>
    );
};

export default App;
