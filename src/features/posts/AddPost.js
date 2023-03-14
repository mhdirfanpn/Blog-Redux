import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";


import React from 'react'

const AddPost = () => {

  const [title,setTitle] = useState('')
  const [content,setContent]  = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked=()=>{
    if(title && content){
        dispatch(
            postAdded(title,content)
        )
        setTitle('')
        setContent('')
    }
   
  }
  return (
    <section>
        <h2>Add a new Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input 
            type="text" 
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
             id="postContent"
             name="postContent"
             value={content}
             onChange={onContentChanged}
            />
            <button onClick={onSavePostClicked} type="button">Save post</button>
            </form>
    </section>
  )
}

export default AddPost