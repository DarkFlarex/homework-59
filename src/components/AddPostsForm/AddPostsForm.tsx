import React, {ChangeEvent,useState} from 'react';
import './AddPostsForm.css'

interface PostFormProps{
    onSubmit: (post: { id: string, nameMovie: string }) => void;
}

const AddPostsForm:React.FC<PostFormProps> = ({onSubmit}) => {
    const[postText,setPostText]=useState('');

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostText(event.target.value);
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (postText.trim() === '') return;

        const newPost = {
            id: Math.random().toString(),
            nameMovie: postText
        };
        onSubmit(newPost);
        setPostText('');
    };

    return (
        <form className={"AddPostForm"} onSubmit={onFormSubmit}>
            <input className={"AddPostForm-input"} type="text" value={postText} onChange={onTextChange}/>
            <button className={"AddPostForm-btn"} type="submit">Add</button>
        </form>
    );
};

export default AddPostsForm;