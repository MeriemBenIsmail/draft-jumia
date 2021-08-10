import './day.css';
import { useState } from 'react';
import Axios from 'axios';

export default function Day(props) {

  const [jour,setJour] = useState([]);


  const getJour = (mm,dd,id) => {

    Axios.get('https://draft-jumia.herokuapp.com/jour/'+mm+"/"+dd+"/"+id).then( (response) => {

      setJour(response.data);
    
      
    });

  }
  return (
    <div>
    
                  

    {getJour(props.dd,props.dd,props.id)}
  
      { jour.map( (val,key) => {
        

          return (
          
              <div key={key}>
                  
                  <div>
                    <h4>Nombre de transactions du dernier jour actif:</h4>
                    <p>{val.DernierJourActif}</p>
                  </div>
                  
            
              </div>
              
          );

    })}
      
    </div>
  )
}
