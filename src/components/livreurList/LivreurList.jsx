import './livreurList.css';
import { useState } from 'react';
import Axios from 'axios';


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
          
              <div className="livreurList">
                  
                  <div className="item">
                    <h4>Livreur:</h4>
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
