import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map( p => <Post message={p.message}/>)

    return(
        <div className={c.postBlock}>
          <textarea className={c.new_post}></textarea>
          <button>Add Post</button>
        <div className={c.posts}>
           {postElements}
        </div>
        </div>
    )
}

export default MyPosts;