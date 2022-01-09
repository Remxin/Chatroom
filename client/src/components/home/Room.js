import React from 'react'
import './Room.css';

const Room = ({ name }) => {
    return (
        <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                    <p>{name}</p>
                </div>

            </div>
        </div>

    )
}

export default Room
