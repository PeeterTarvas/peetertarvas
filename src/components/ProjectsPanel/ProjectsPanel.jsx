import { useState } from "react";
import { Technology } from "../Tech/Technology";
import {Project} from "./Project";
import './ProjectPanel.css'
import { SiGit, SiDocker, SiApache, SiGnubash} from "react-icons/si";
import {  } from '../images/IMG.png'
import React from 'react'



export const ProjectsPanel = () => {

    const [project, setProject] = useState([
        {
            id: 1,
            name: 'Zombieshooter',
            language: 'Java',
            technologies: [<Technology name={'Bash'} icon={<SiGnubash/>}/>, <Technology name={'Git'} icon={<SiGit/>}/>],
            shortDescription: 'In this project me and 2 of my classmates did a computer game for the first year project in CS.',
            link: 'https://petarv.pages.taltech.ee/iti0301-2021-docs/',
            repositoryLink: 'https://github.com/PeeterTarvas/BoxheadTypeGame',
            vidURL: 'https://www.youtube.com/watch?v=mG-V8MXyDiI',

        },
        {
            id: 2,
            name: 'Robocode 2021',
            shortDescription: 'I was one of the organisers of Robocode 2021 which is a virtual robot fighting competition between ' +
                'Taltech and University of Tartu students',
            link: 'https://robocode.mits.ee/',
            vidURL: 'https://www.youtube.com/watch?v=Y-qD52nXKc0',
        },
        {
            id: 3,
            name: 'Stockbooster',
            shortDescription: 'This was a project that me and 3 of my friends made, our idea was to build a website where you can view stocks and their information.' +
                'The main motivation behind this project was to learn new technologies(like docker and nginx),' +
                ' languages(like Typescript) and frameworks(like Spring Boot and Angular)',
            link: 'https://stockbooster.ml/app-layout',
            repositoryLink: "... need to move everything form gitlab to github"
        },
        {
            id: 4,
            name: 'This page',
            language: 'Javascript(with React.js framework)',
            shortDescription: 'This is my second page that I have written, its mainly front-end. ',
            link: 'https://github.com/PeeterTarvas/peetertarvas',
        }
    ])

    return (
        <div className='projects-container'>
            <div className={'header'}>Projects</div>
            {project.map((project) => (
                <Project name={project.name} language={project.language}
                         technologies={project.technologies} shortDescription={project.shortDescription}
                         link={project.link} vidURL={project.vidURL} secondLink={project.repositoryLink}
                />
            ))}
        </div>
    )
}

