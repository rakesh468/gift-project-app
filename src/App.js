import MainSection1 from './components/Mainsection1';
import Mainsection2 from './components/Mainsection2';
import SilderCard from './components/Carosuel/SilderCard';
import './App.css';


function App() {
  return (
    <div className="main-section">
      <MainSection1/>  
      <SilderCard/>
      <Mainsection2/>
    </div>
  );
}

export default App;
