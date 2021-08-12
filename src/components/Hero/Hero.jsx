import './hero.css';
import Day from '../day/Day';
export default function Hero() {
  /*<Day face="images/happy.png" pic="images/rise.svg" comment="Bon Travail !"/>
          <Day face="images/sad.png" pic="images/low-price.png" comment="Bon Courage !"/> */
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

          <div className="global">

            <div className="hero_item">
              <h3 className="label">
                Nombre De Transaction Total 
              </h3>
              <h4 className="content">
                10
              </h4>

            </div>
            <div className="hero_item">
              <h3 className="label">
                Date De La Dernière Transaction
              </h3>
              <h4 className="content">
                06-06-2021 22:30:00
              </h4>
                        
            </div>
            
            
          </div>
          
      
        </div>
        
        
      
    </div>
  )
}
