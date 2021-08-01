import {Header} from "./components/Sidebar/Header";
import {Information} from "./components/Information/Information"
import './index.css';
import {SkillsPanel} from './components/SkillsPanel/SkillsPanel'
import {ProjectsPanel} from './components/ProjectsPanel/ProjectsPanel'
import { TechnologyPanel } from './components/Tech/TechnologyPanel'
import { ContactMe } from "./components/contactMe/contactMe";
import React from 'react'


function App() {


  return (
    <div className="container">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
        </style>
        <Header isSubmitBoxOpen={false}/>
        <div className={'main-container-block'}>
            <Information/>
            <SkillsPanel/>
            <TechnologyPanel/>
            <ProjectsPanel/>
            <ContactMe/>
        </div>
    </div>
  );

}



export default App;
