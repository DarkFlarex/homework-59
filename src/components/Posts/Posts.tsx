import React from 'react';
import './Posts.css'

interface Props {
    nameMovie: string;
    onRemove:React.MouseEventHandler;
    onChangeName: React.ChangeEventHandler<HTMLInputElement>;
}

const Posts:React.FC<Props> = React.memo( ({
   nameMovie,
   onChangeName,
   onRemove
}) => {
    console.log(`[Posts] render ${nameMovie}`);
    return (
        <span className="Movie-post">
            <input type="text" value={nameMovie} onChange={onChangeName}/>
            <button className={"button-movie-delete"} onClick={onRemove}>Удалить</button>
        </span>
    );
}, (prevProps, nextProps) => {
    return prevProps.nameMovie === nextProps.nameMovie;
});

export default Posts;