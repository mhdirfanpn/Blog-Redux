import { useSelector } from "react-redux";

import React from 'react'

const PostsList = () => {
    const posts = useSelector((state)=>state.posts)

    console.log(posts);

    const renderedPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))
  return (
    <section>
        <h2 style={{textAlign:"center"}}>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList