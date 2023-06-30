import React from "react";
import c from "./../Friends.module.css"

const Friend = (props) => {
    return (
        <div className={c.friend}>
            <img className={c.photo} src={props.photo} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;