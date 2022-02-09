import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Add from "./components/Add";
import AboutUs from "./components/AboutUs";

function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName})
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
        <div className="App">
            <Header />
                <Routes>
                    <Route path="/" element={<ExperienceSection ExperienceSection={ExperienceSection}/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/add" element={<Add/>} />
                </Routes>
            <Footer />
           {/* <div className="newExperienceForm">
                <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>

            <ul>
                {experiences.map(experience => <li>{experience.name}</li>)}
            </ul>*/}
        </div>
    );
}

export default App;
