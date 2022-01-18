import {Header} from "./components/Header/Header";
import {Information} from "./components/Information/Information"
import './index.css';
import {SkillsPanel} from './components/SkillsPanel/SkillsPanel'
import {ProjectsPanel} from './components/ProjectsPanel/ProjectsPanel'
import { TechnologyPanel } from './components/Tech/TechnologyPanel'
import { ContactMe } from "./components/contactMe/contactMe";
import React from 'react'
import {Home} from "./components/head";



function App() {


  return (
    <div className="container">
        <Home/>
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
