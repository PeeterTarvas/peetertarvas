import React from 'react'
import Skillbar from "./Skillbar";
import { SiPython, SiJava, SiJavascript, SiReact } from "react-icons/si";
import "./SkillPanel.css"
import { useState} from "react";


export let SkillsPanel = () => {

    const [languages, setLanguages] = useState([
        {
            id: 1,
            color: "#090821",
            icon: <SiPython/>,
            text: "Python",
            percentage: '70%'
        },
        {
            id: 2,
            color: "#751430",
            icon: <SiJava/>,
            text: "Java",
            percentage: '80%'
        },
        {
            id: 3,
            color: "#baba25",
            icon: <SiJavascript/>,
            text: "Javascript",
            percentage: '50%'
        },
        {
            id: 4,
            color: "#518ef0",
            icon: <SiReact/>,
            text: "React",
            percentage: '40%'
        }
    ])

    return (
        <div className="skillful-container">
            <div className='heading'>Languages</div>
            <ul>
                {languages.map((lang) => (
                    <li key={lang.id}>
                        <Skillbar bgcolor={lang.color} icon={lang.icon} text={lang.text} precentage={lang.percentage}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

