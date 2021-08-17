import './App.scss';
import Hero from './components/Hero/Hero';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (

     <div className="App">

        <Router>

              <Route path="/livreur/:id">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Hero />
              </Route>
            
                 
        </Router>

           
    </div>
  );
}

export default App;
