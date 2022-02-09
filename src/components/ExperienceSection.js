import React, {useEffect, useState} from 'react';
import Card from "./Card.js";

function ExperienceSection() {

    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
        <div className='card-section'>
            {experiences.map(experience => <Card experience={experience} key={experience.id}/>)}
        </div>
    )
}

export default ExperienceSection