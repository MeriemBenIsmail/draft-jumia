import './livreurList.css';
import { useState } from 'react';
import Axios from 'axios';


export default function LivreurList(props) {

  const [livreurList,setLivreurList] = useState([]);
  const [jour,setJour] = useState([]);
 

  const getLivreurs = (id) => {

    Axios.get('https://draft-jumia.herokuapp.com/'+id).then( (response) => {

      setLivreurList(response.data);
      
    });

  }
  const getJour = (mm,dd,id) => {

    Axios.get('https://draft-jumia.herokuapp.com/jour'+mm+"/"+dd+"/"+id).then( (response) => {

      setJour(response.data);
      console.log(jour);
      
    });

  }
  

  return (
    <div>
    
                  

    {getJour("2021-06-06","2021-06-06",props.id)}
      {jour.map( (val,key) => {

          return (
          
              <div className="livreurList">
                  
                  <div className="item">
                    <h4>Livreur :</h4>
                    <p>{props.id}</p>
                  </div>
                  <div className="item">
                    <h4>Nombre de transactions:</h4>
                    <p>{val.DernierMoisActif}</p>
                  </div>
                  <div className="item">
                    <h4>Derniere Transaction:</h4>
                    <p></p>
                  </div>
                
                
              </div>
              
          );

    })}
      
    </div>
  )
}
