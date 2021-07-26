import Header from "./components/Sidebar/Header";
import Information from "./components/Information/Information"
import './index.css';
import SkillsPanel from './components/SkillsPanel/SkillsPanel'
import SiPython from 'react-icons/si'



function App() {


  return (
    <div className="container">
        <Header isSubmitBoxOpen={false}/>
        <Information/>
        <SkillsPanel/>

    </div>
  );

}



export default App;
