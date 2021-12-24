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
                <li className={"item"} key={tech.id}><Technology icon={technology.logo} name={technology.name}/></li>
            ))}
            <li><div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="02c05104-f500-4e54-91eb-2e37b7d9bce5" data-share-badge-host="https://www.credly.com"/>
                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"/></li>
        </ul>



    </div>
}


