import './hero.scss';
import Axios from 'axios';
import { useState } from 'react';
import Table from '../table/Table';
import { useParams } from "react-router";
export default function Hero(props) {
  const { id } = useParams();


 const [livreurList,setLivreurList] = useState([]);
  

  const getLivreurs = (id) => {
        
            Axios.get('https://jumia0.herokuapp.com/'+id).then( (response) => {
       
              setLivreurList(response.data[0]);
              
              
            });
        
  }

  // day
  const [day,setDay] = useState([]);
  const [day_1,setDay_1] = useState([]);
  let dayData = [
    {
     
      DernierJourActif_1: '0',
      DernierJourActif: '0',
      note: <img src="" className="evalPic" alt="" />,
      
    }
  
  ];
  const getDay = (mm,dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/jour/'+mm+'/'+dd+"/"+id).then( (response) => {

      setDay(response.data);
      
    });
  }
  const getDay_1 = (mm,dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/jourPrev/'+mm+'/'+dd+"/"+id).then( (response) => {

      setDay_1(response.data);
      
    });
  }

  //month
  const [month,setMonth] = useState([]);
  const [month_1,setMonth_1] = useState([]);
  let monthData = [
    {
      DernierMoisActif_1: '0',
      DernierMoisActif: '0',
      note: <img src="" className="evalPic" alt="" />,
    }
  ];
  const getMonth = (dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/mois/'+dd+"/"+id).then( (response) => {

      setMonth(response.data);
      
    });
  }
  const getMonth_1 = (dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/moisPrev/'+dd+"/"+id).then( (response) => {

      setMonth_1(response.data);
      
    });
  }

  //year
  const [year,setYear] = useState([]);
  const [year_1,setYear_1] = useState([]);
  let yearData = [
    {
      DernièreAnnéeActive_1: '0',
      DernièreAnnéeActive: '0',
      note: <img src="" className="evalPic" alt="" />,
    }
  ];
  const getYear = (dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/annee/'+dd+"/"+id).then( (response) => {

      setYear(response.data);
      
    });
  }
  const getYear_1 = (dd,id) => {

    Axios.get('https://jumia0.herokuapp.com/anneePrev/'+dd+"/"+id).then( (response) => {

      setYear_1(response.data);
      
    });
  }

  const getEvalPic = (data,val_1,val) => {
    if ( val == val_1 ){

      data[0].note =<img src="/images/checkmark.png" className="evalPic" alt="" />;


    } else if(val > val_1) {

      data[0].note =<img src="/images/rise.svg" className="evalPic" alt="" />;

    }
    else {
      data[0].note =<img src="/images/low-price.png" className="evalPic" alt="" />;

    }
  }
 

  return (
    
    <div className="Hero" id="hero">


        <div className="wavyTitle">
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>F</span>
            <span>O</span>
            <span>R</span>
            <span>M</span>
            <span>A</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
        </div>
        <div className="hero_container">

        {getLivreurs({id}.id)}
        {console.log(livreurList)}
        { 

          <div className="global">

            <div className="hero_item">
              <h3 className="label">
                Nombre De Transaction Total 
              </h3>
              <h4 className="content">
                {livreurList.Nombre_de_transaction}
              </h4>

            </div>
            <div className="hero_item">
              <h3 className="label">
                Date De La Dernière Transaction
              </h3>
              <h4 className="content">
                {livreurList.Derniere_Transaction.split('T')[0]+" "+livreurList.Derniere_Transaction.split('T')[1].split('.')[0]}
              </h4>
                        
            </div>
                 
            
            
          </div>
          
        }
        </div>

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
  )
}
