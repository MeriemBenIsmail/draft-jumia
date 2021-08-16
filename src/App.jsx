import './App.scss';
import Hero from './components/Hero/Hero';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/menu/Menu';




function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  



  return (

     <div className="App">

       <Topbar livreur="682-GH ---- Amin Ghandri" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <Menu livreur="682-GH ---- Amin Ghandri" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       
       
       <Hero livreur="682-GH ---- Amin Ghandri"/>
           
              

          
       
           

    </div>
  );
}

export default App;
