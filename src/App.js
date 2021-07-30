import Header from "./components/Sidebar/Header";
import Information from "./components/Information/Information"
import './index.css';
import SkillsPanel from './components/SkillsPanel/SkillsPanel'
import ProjectsPanel from './components/ProjectsPanel/ProjectsPanel'
import { TechnologyPanel } from './components/Tech/TechnologyPanel'


function App() {


  return (
    <div className="container">
        <Header isSubmitBoxOpen={false}/>
        <div className={'main-container-block'}>
            <Information/>
            <SkillsPanel/>
            <TechnologyPanel/>
            <ProjectsPanel/>
        </div>
    </div>
  );

}



export default App;
