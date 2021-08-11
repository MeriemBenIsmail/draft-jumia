import './day.css';


export default function Day(props) {

 
  return (

    <div className="Day">

      <div className="day_item">
        <h3>
          Nombre De Transaction Du Dernier Jour-1 Actif
        </h3>
        <p>
                10
        </p>

      </div>
      <div className="day_item">
        <h3>
          Nombre De Transaction Du Dernier Jour Actif
        </h3>
        <p>
                12
        </p>

      </div>
      <div className="day_item">
        <img className="progressPic" src={props.pic} alt="" />
        <span>{props.comment}
        <img src={props.face} alt="" className="face"/>
        </span>
        
      </div>

    </div>
  );
 
}
