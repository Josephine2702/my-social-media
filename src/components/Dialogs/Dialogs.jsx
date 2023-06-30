import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo} />)

    const messageElements = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsList}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;