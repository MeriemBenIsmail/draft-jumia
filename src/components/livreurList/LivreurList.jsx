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
  getJour("2021-06-06","2021-06-06",props.id);

  return (
    <div>
    
                  

    {getLivreurs(props.id)}
      {livreurList.map( (val,key) => {

          return (
          
              <div className="livreurList">
                  
                  <div className="item">
                    <h4>Livreur lala:</h4>
                    <p>{val.Livreur}</p>
                  </div>
                  <div className="item">
                    <h4>Nombre de transactions:</h4>
                    <p>{val.Nombre_de_transaction}</p>
                  </div>
                  <div className="item">
                    <h4>Derniere Transaction:</h4>
                    <p>{val.Derniere_Transaction}</p>
                  </div>
                
                
              </div>
              
          );

    })}
      
    </div>
  )
}
