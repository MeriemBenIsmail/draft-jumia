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
        
              setLivreurList(response.data);
              
              
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
        {livreurList.map( (val,key) => {
          return (

          <div className="global" key={key}>

            <div className="hero_item">
              <h3 className="label">
                Nombre De Transaction Total 
              </h3>
              <h4 className="content">
                {val.Nombre_de_transaction}
              </h4>

            </div>
            <div className="hero_item">
              <h3 className="label">
                Date De La Dernière Transaction
              </h3>
              <h4 className="content">
                {val.Derniere_Transaction.split('T')[0]+" "+val.Derniere_Transaction.split('T')[1].split('.')[0]}
              </h4>
                        
            </div>
                 {getDay(val.Derniere_Transaction,val.Derniere_Transaction,{id}.id)}
                 {day.map( (val,key) => {
                      
          
                    dayData[0].DernierJourActif=val.DernierJourActif;
                
                
                  })}
                 {getDay_1(val.Derniere_Transaction,val.Derniere_Transaction,{id}.id)}
                 {day_1.map( (val,key) => {
                      
          
                      if(val.DernierJourActif_1){
                        dayData[0].DernierJourActif_1=val.DernierJourActif_1;

                      } else {
                        dayData[0].DernierJourActif_1='0';

                      }
                    
                
                
                  })}
                  {getEvalPic(dayData,dayData[0].DernierJourActif_1,dayData[0].DernierJourActif)}
                 
                 {getMonth(val.Derniere_Transaction,{id}.id)}
                 {month.map( (val,key) => {
                      
                
                    monthData[0].DernierMoisActif=val.DernierMoisActif;
                

                  })}
                 {getMonth_1(val.Derniere_Transaction,{id}.id)}
                 {month_1.map( (val,key) => {
                      
                
                      if(val.DernierMoisActif_1){
                        monthData[0].DernierMoisActif_1=val.DernierMoisActif_1;

                      } else {
                        monthData[0].DernierMoisActif_1='0';
                      }
                    
                

                })}
                  {getEvalPic(monthData,monthData[0].DernierMoisActif_1,monthData[0].DernierMoisActif)}
                 {getYear(val.Derniere_Transaction,{id}.id)}
                  {year.map( (val,key) => {
                        
                    yearData[0].DernièreAnnéeActive= val.DernierAnnéeActive;
                  
                  })} 
                  {getYear_1(val.Derniere_Transaction,{id}.id)}
                  {year_1.map( (val,key) => {
                        
                        if(val.DernierAnnéeActive_1){
                          yearData[0].DernièreAnnéeActive_1= val.DernierAnnéeActive_1;

                        } else {
                          yearData[0].DernièreAnnéeActive_1= '0';
                        }
                    
                  
                  })}
                  {getEvalPic(yearData,yearData[0].DernièreAnnéeActive_1,yearData[0].DernièreAnnéeActive)}
            
            
          </div>
          );
        })}
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