import React from 'react';
import './ChuckJoke.css';
import {ChuckJokeProps} from "../../type";

interface Props{
    chuck: ChuckJokeProps;
}

const ChuckJoke:React.FC<Props> =React.memo(({chuck}) => {
    return (
        <>
            <span className="Chuck-joke">{chuck.value}</span>
        </>
    );
}, (prevProps, nextProps) => {
    return prevProps.chuck.id === nextProps.chuck.id && prevProps.chuck.value === nextProps.chuck.value;
});

export default ChuckJoke;