import './livreurList.css';
import { useState } from 'react';
import Axios from 'axios';
import Day from '../day/Day';
import Month from '../month/Month';
import Year from '../year/Year';


export default function LivreurList(props) {

  const [livreurList,setLivreurList] = useState([]);
  
 

  const getLivreurs = (id) => {

    Axios.get('https://draft-jumia.herokuapp.com/'+id).then( (response) => {

      setLivreurList(response.data);
      
      
    });

  }
  
  

  return (

    <div>
    
    {getLivreurs(props.id)}
      {livreurList.map( (val,key) => {

          return (
          
              <div className="livreurList" key={key}>
                  
                  <div className="item">
                    <h4>Livreur :</h4>
                    <p>{props.id}</p>
                  </div>
                  <div className="item">
                    <h4>Nombre de transactions:</h4>
                    <p>{val.Nombre_de_transaction}</p>
                  </div>
                  <div className="item">
                    <h4>Derniere Transaction:</h4>
                    <p>{val.Derniere_Transaction}</p>
                  </div>
                  <Day id={props.id} dd={val.Derniere_Transaction} />
                  <Month id={props.id} dd={val.Derniere_Transaction} />
                  <Year id={props.id} dd={val.Derniere_Transaction} />
                
              </div>
              
          );

    })}
    
      
    </div>
    
  )
}
