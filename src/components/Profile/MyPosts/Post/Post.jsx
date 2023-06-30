import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
    return(
    <div className={c.block}>
        <img className={c.user_avatar} src="https://randomuser.me/api/portraits/women/47.jpg" alt="" />
        <div className={c.text}>{props.message}</div>
    </div>
    )
}

export default Post;