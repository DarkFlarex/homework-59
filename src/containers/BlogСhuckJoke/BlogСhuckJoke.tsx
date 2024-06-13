import React, { useState,useEffect } from 'react';
import ChuckJoke from '../../components/ChuckJoke/ChuckJoke';
import {ChuckJokeProps} from "../../type";
import './BlogChuckJoke.css';

const url = 'https://api.chucknorris.io/jokes/random';

const BlogChuckJoke: React.FC = () => {

    const [jokeTexts, setJokeTexts] = useState<ChuckJokeProps[]>([]);

    const showNewJoke = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const newJokeTexts = await response.json() as ChuckJokeProps;
            setJokeTexts(prevJokeTexts => [...prevJokeTexts, newJokeTexts]);
        }
    };

    useEffect(() => {
        showNewJoke
    }, []);

    return (
        <div>
            <h1>Chuck Norris Joke</h1>
            <div className="Chuck-jokes">
                {jokeTexts.length === 0 ? (
                    <span>Нажмите на кнопку чтобы получить шутку про Чака Нориса</span>
                ) : (
                    jokeTexts.map((jokeText) => (
                        <ChuckJoke
                            key={jokeText.id}
                            chuck={jokeText}
                        />
                    ))
                )}
            </div>
            <button onClick={showNewJoke} className="show-new-joke-button">
                new Chuck joke
            </button>
        </div>
    );
};

export default BlogChuckJoke;
