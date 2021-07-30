import { useState } from "react";
import { Technology } from "../Tech/Technology";
import {Project} from "./Project";
import './ProjectPanel.css'
import { SiGit, SiDocker, SiApache, SiGnubash} from "react-icons/si";



const ProjectsPanel = () => {

    const [project, setProject] = useState([
        {
            id: 1,
            name: 'Zombieshooter',
            language: 'Java',
            technologies: [<Technology name={'Bash'} icon={<SiGnubash/>}/>],
            shortDescription: 'In this project me and 2 of my classmates did a computer game for the first year project in CS.',
            link: 'https://petarv.pages.taltech.ee/iti0301-2021-docs/',
            secondLink: 'https://github.com/PeeterTarvas/BoxheadTypeGame',


        }
    ])

    return (
        <div className='projects-container'>
            {project.map((project) => (
                <Project name={project.name} language={project.language}
                         technologies={project.technologies} shortDescription={project.shortDescription}
                         link={project.link}
                />
            ))}
        </div>
    )
}

export default ProjectsPanel