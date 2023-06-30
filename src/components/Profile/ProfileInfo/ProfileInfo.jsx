import React from "react";
import c from "./ProfileInfo.module.css"


const ProfileInfo = (props) => {
    return (
        <div>
             <div className={c.img_container}>
                    <img src="https://images.unsplash.com/photo-1596573787499-3b6cd45b2ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1847&q=80" alt="" />
                </div>
                <div className={c.descriptionBlock}>
                    <div>
                        <img className={c.user_avatar} src="https://randomuser.me/api/portraits/women/47.jpg" alt="" />
                    </div>
                    <div>description</div>
                </div>
        </div>
    )
}

export default ProfileInfo;