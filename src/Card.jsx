import React from 'react'
import './Card.css'

const Card = ({ image, title, link }) => {
    return (
        <div className="card">
            <div className="cardimage">
                <img src={image} alt={title} />
            </div>
            <div className="cardcontent">
                <h2>{title}</h2>
                <a href={link} className="cardbutton">Learn More</a>
            </div>
        </div>
    )
}

export default Card