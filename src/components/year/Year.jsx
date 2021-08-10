import './year.css';
import { useState } from 'react';
import Axios from 'axios';

export default function Year(props) {

  const [year,setYear] = useState([]);


  const getYear = (dd,id) => {

    Axios.get('https://draft-jumia.herokuapp.com/annee/'+dd+"/"+id).then( (response) => {

      setYear(response.data);
    });

  }
  return (
    <div>
    
                  

    {getYear(props.dd,props.id)}
  
      { year.map( (val,key) => {
        

          return (
          
              <div key={key}>
                  
                  <div>
                    <h4>Nombre de transactions de la dernière année active:</h4>
                    <p>{val.DernierAnnéeActive}</p>
                  </div>
                  
            
              </div>
              
          );

    })}
      
    </div>
  )
}
