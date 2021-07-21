import Header from "./components/Header";
import Information from "./components/Information"
import './index.css';


function App() {


  return (
    <div className="container">
        <Header isSubmitBoxOpen={false}/>
        <Information/>
    </div>
  );

}



export default App;
