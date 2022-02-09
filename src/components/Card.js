import React from "react";

function Card({experience}) {
    return (
        <div className="card">
            <img src={experience.imageUrl} alt="Experience picture"/>
            <h1>{experience.name}</h1>
            <p>{experience.description}</p>
            <span>{experience.duration}</span><span>H</span><br/>
            <span>{experience.price}</span><span>€</span><br/>
            <p>{experience.tags}</p>
        </div>
    )
}

export default Card