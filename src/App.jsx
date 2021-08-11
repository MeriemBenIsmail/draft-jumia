import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {
  // livreur ID example = "563-GH ---- Tarek Bergachi"
  return (

     <div className="App">
      <Router>

        <Navbar id="563-GH ---- Tarek Bergachi"/>

      </Router>
      <Hero />
      
      
    </div>
  );
}

export default App;
