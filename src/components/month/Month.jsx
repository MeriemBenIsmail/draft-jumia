import './month.css';
import { useState } from 'react';
import Axios from 'axios';

export default function Month(props) {

  const [month,setMonth] = useState([]);


  const getMonth = (dd,id) => {

    Axios.get('https://draft-jumia.herokuapp.com/mois/'+dd+"/"+id).then( (response) => {

      setMonth(response.data);
    
      
    });

  }
  return (
    <div>
    
                  

    {getMonth(props.dd,props.id)}
  
      { month.map( (val,key) => {
        

          return (
          
              <div key={key}>
                  
                  <div>
                    <h4>Nombre de transactions du dernier mois actif:</h4>
                    <p>{val.DernierMoisActif}</p>
                  </div>
                  
            
              </div>
              
          );

    })}
      
    </div>
  )
}

