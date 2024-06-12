import React from 'react';
import './Posts.css'

interface Props {
    nameMovie: string;
    onRemove:React.MouseEventHandler;
    onChangeName: React.ChangeEventHandler<HTMLInputElement>;
}

const Posts:React.FC<Props> = ({
    nameMovie,
    onChangeName,
    onRemove
                               }) => {
    return (
        <span className="Movie-post">
            <input type="text" value={nameMovie} onChange={onChangeName}/>
            <button className={"button-movie-delete"} onClick={onRemove}>Удалить</button>
        </span>
    );
};

export default Posts;