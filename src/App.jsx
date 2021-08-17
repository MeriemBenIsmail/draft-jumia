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
       {/*<Topbar livreur="682-GH ---- Amin Ghandri" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <Menu livreur="682-GH ---- Amin Ghandri" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <Hero livreur="682-GH ---- Amin Ghandri"/>*/}
           
    </div>
  );
}

export default App;
