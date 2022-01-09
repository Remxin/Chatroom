import React from 'react'
import './message.css'

const Message = ({ message: { name, user_id, text }, current_uid }) => {
    let isCurrentUser = false;
    if (user_id === current_uid) {
        isCurrentUser = true;
    }
    return (
        isCurrentUser?(
        <div className="row right-align">
            <div className="col s12 m8 16 right">
                <p className="sentbyme">{name}: {text}</p>
            </div>
        </div>
        ) : (<div className="row right-align fixOpponent">
            <div className="col s12 m8 16 left">
                <p className="opponent">{name}: {text}</p>
            </div>
        </div>)
    )
}

export default Message
