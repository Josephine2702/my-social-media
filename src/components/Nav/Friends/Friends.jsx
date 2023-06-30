import React from 'react';
import Friend from './Friend/Friend';
import c from './Friends.module.css';

const Friends = (props) => {
    let friend = props.friends.map(f => <Friend photo={f.photo} name={f.name}/>)

    return (
        <div className={c.block}>
            <h3 className={c.title}>Best Friends</h3>
            <div className={c.friendsBlock}>
                {friend}
            </div>
        </div>
    )
}

export default Friends;