import React from 'react';
import './ChuckJoke.css';
import {ChuckJokeProps} from "../../type";

interface Props{
    chuck: ChuckJokeProps;
}

const ChuckJoke:React.FC<Props> =(({chuck}) => {

    return (
        <>
            <span className="Chuck-joke">{chuck.value}</span>
        </>
    );
});

export default ChuckJoke;