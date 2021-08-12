import './App.scss';
import Hero from './components/Hero/Hero';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import './App.scss';
import Table from './components/table/Table';


function App() {
  // livreur ID example = "563-GH ---- Tarek Bergachi"
  /*<Router>

        <Navbar id="563-GH ---- Tarek Bergachi"/>

      </Router>
      <Hero /> */
      const [menuOpen, setMenuOpen] = useState(false);
     

const dayData = [
  {
   
    DernierJourActif_1: '16',
    DernierJourActif: '25',
    note: <img src="images/rise.svg" className="evalPic" alt="" />,
    
  }

];
const monthData = [
  {
   
    DernierJourActif_1: '20',
    DernierJourActif: '30',
    note: <img src="images/low-price.png" className="evalPic" alt="" />,
    
  }

];
const yearData = [
  {
   
    DernierJourActif_1: '250',
    DernierJourActif: '200',
    note: <img src="images/rise.svg" className="evalPic" alt="" /> ,
    
  }

];



  return (

     <div className="App">

       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       
       
            <Hero />
            <div id="tables">
              <Table 
                tableData={dayData}
                headingColumns={[ 'Dernier Jour Actif-1', 'Dernier Jour Actif', 'Evaluation']}
                title="Tableau Comparatif Par Jour"
              />
              <Table 
                tableData={monthData}
                headingColumns={[ 'Dernier Mois Actif-1', 'Dernier Mois Actif', 'Evaluation']}
                title="Tableau Comparatif Par Mois"
              />
              <Table 
                tableData={yearData}
                headingColumns={[ 'Dernière Année Active-1', 'Dernière Année Active', 'Evaluation']}
                title="Tableau Comparatif Par An"
              />

          
            

            </div>
       
           

    </div>
  );
}

export default App;
