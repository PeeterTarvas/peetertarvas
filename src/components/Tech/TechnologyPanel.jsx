import { useState } from "react";
import {SiGit, SiDocker, SiApache, SiGnubash, SiNginx, SiAmazonaws} from "react-icons/si";
import './TechnologyPanel.css'
import React from "react";
import { Technology } from './Technology'

export const TechnologyPanel = () => {
    const [tech, setTech] = useState([
        {
            id: 1,
            logo: <SiGit/>,
            name: 'Git'
        },
        {
            id: 2,
            logo: <SiDocker/>,
            name: 'Docker'
        },
        {
            id: 3,
            logo: <SiApache/>,
            name: 'Apache2'

        },
        {
            id: 4,
            logo: <SiGnubash/>,
            name: 'Bash'
        },
        {
            id: 5,
            logo: <SiNginx/>,
            name: 'Nginx'
        }, {
            id: 6,
            logo: <SiAmazonaws/>,
            name: 'AWS(ec2 mainly)'
        }

    ])
    return <div className={'technologiesPanel'}>
        <div className={'header'}>Technologies used and familiar with</div>
        <ul className={"list"}>
            {tech.map((technology) => (
                <li className={"item"}><Technology key={tech.id} icon={technology.logo} name={technology.name}/></li>
            ))}
        </ul>



    </div>
}


